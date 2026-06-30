'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { getFilteredNodes } from '@/data/blueprintData';

interface Props {
  selectedNode?: string;
  onNodeSelect: (nodeId: string | undefined) => void;
  filters: Record<string, boolean>;
}

interface NodeMeshProps {
  node: any;
  position: [number, number, number];
  isSelected: boolean;
  onClick: () => void;
}

function NodeMesh({ node, position, isSelected, onClick }: NodeMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      if (isSelected) {
        meshRef.current.scale.setScalar(1.3 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
      } else if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const nodeColor = useMemo(() => {
    const hex = node.color?.replace('#', '') || 'ffffff';
    return `#${hex}`;
  }, [node.color]);

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.5, 16, 16]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={nodeColor}
          emissive={isSelected ? nodeColor : '#000000'}
          emissiveIntensity={isSelected ? 0.3 : 0}
        />
      </Sphere>
      <Text
        position={[0, -1, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        {node.label}
      </Text>
    </group>
  );
}

function ConnectionLine({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  return (
    <Line
      points={points}
      color="#444444"
      lineWidth={2}
      transparent
      opacity={0.6}
    />
  );
}

function NetworkGraph3DScene({ selectedNode, onNodeSelect, filters }: Props) {
  const filteredNodes = getFilteredNodes(filters);
  
  // Create 3D positions for nodes
  const nodePositions = useMemo(() => {
    const positions: Record<string, [number, number, number]> = {};
    const tierPositions: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    
    filteredNodes.forEach(node => {
      const tierAngle = (tierPositions[node.tier] * Math.PI * 2) / Math.max(filteredNodes.filter(n => n.tier === node.tier).length, 1);
      const radius = 3 + node.tier * 1.5;
      const height = (node.tier - 4) * 2;
      
      positions[node.id] = [
        Math.cos(tierAngle) * radius,
        height,
        Math.sin(tierAngle) * radius
      ];
      
      tierPositions[node.tier]++;
    });
    
    return positions;
  }, [filteredNodes]);

  // Create connections between tiers
  const connections = useMemo(() => {
    const conns: Array<{ start: [number, number, number]; end: [number, number, number] }> = [];
    
    for (let tier = 1; tier < 7; tier++) {
      const currentTierNodes = filteredNodes.filter(n => n.tier === tier);
      const nextTierNodes = filteredNodes.filter(n => n.tier === tier + 1);
      
      currentTierNodes.forEach(currentNode => {
        nextTierNodes.forEach(nextNode => {
          if (nodePositions[currentNode.id] && nodePositions[nextNode.id]) {
            conns.push({
              start: nodePositions[currentNode.id],
              end: nodePositions[nextNode.id]
            });
          }
        });
      });
    }
    
    return conns;
  }, [filteredNodes, nodePositions]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Connections */}
      {connections.map((conn, index) => (
        <ConnectionLine key={index} start={conn.start} end={conn.end} />
      ))}
      
      {/* Nodes */}
      {filteredNodes.map(node => (
        <NodeMesh
          key={node.id}
          node={node}
          position={nodePositions[node.id]}
          isSelected={selectedNode === node.id}
          onClick={() => onNodeSelect(selectedNode === node.id ? undefined : node.id)}
        />
      ))}
      
      {/* Controls */}
      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        autoRotate
        autoRotateSpeed={0.5}
        maxDistance={30}
        minDistance={5}
      />
    </>
  );
}

export default function NetworkGraph3D({ selectedNode, onNodeSelect, filters }: Props) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [15, 5, 15], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #1a1a2e, #16213e)' }}
      >
        <NetworkGraph3DScene
          selectedNode={selectedNode}
          onNodeSelect={onNodeSelect}
          filters={filters}
        />
      </Canvas>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-4 left-4 bg-black/70 rounded-lg p-3 text-white text-sm">
        <div className="space-y-1">
          <div className="font-semibold">🕸️ Network Graph Controls:</div>
          <div>• Click and drag to rotate</div>
          <div>• Scroll to zoom</div>
          <div>• Click nodes to select</div>
          <div>• Auto-rotation enabled</div>
        </div>
      </div>
    </div>
  );
}

