'use client';
import React from 'react';

interface Props {
  selectedNode?: string;
  onNodeSelect: (nodeId: string | undefined) => void;
  filters: Record<string, boolean>;
}

export default function ConceptualWorld3D({ selectedNode, onNodeSelect, filters }: Props) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black flex items-center justify-center text-white">
      <div className="text-center">
        <div className="text-6xl mb-4">🌌</div>
        <h2 className="text-2xl font-bold mb-2">3D Conceptual World</h2>
        <p className="text-gray-400">Interactive visualization coming soon</p>
      </div>
    </div>
  );
}

