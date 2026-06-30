"use client";

import React, { useRef, Suspense, useEffect } from 'react';
import * as THREE from 'three';

// Simple fallback component instead of complex 3D scene
function SimpleScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create simple geometries
    const geometry1 = new THREE.SphereGeometry(1, 32, 32);
    const material1 = new THREE.MeshPhongMaterial({ 
      color: 0x3b82f6, 
      transparent: true, 
      opacity: 0.8,
      shininess: 100
    });
    const sphere = new THREE.Mesh(geometry1, material1);
    sphere.position.set(-3, 0, 0);
    scene.add(sphere);
    
    const geometry2 = new THREE.BoxGeometry(2, 1.5, 2);
    const material2 = new THREE.MeshPhongMaterial({ 
      color: 0x10b981, 
      transparent: true, 
      opacity: 0.9 
    });
    const box = new THREE.Mesh(geometry2, material2);
    box.position.set(3, 0, 0);
    scene.add(box);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xff6b6b, 0.5);
    pointLight.position.set(-10, -10, -10);
    scene.add(pointLight);
    
    camera.position.z = 10;
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.003;
      
      box.rotation.y += 0.008;
      box.position.y = Math.sin(Date.now() * 0.001) * 0.1;
      
      renderer.render(scene, camera);
    }
    animate();
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="absolute inset-0" />;
}


export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/60">Loading 3D Scene...</p>
          </div>
        </div>
      }>
        <SimpleScene />
      </Suspense>
    </div>
  );
}

