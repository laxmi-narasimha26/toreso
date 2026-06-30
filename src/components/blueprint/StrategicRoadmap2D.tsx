'use client';

import React from 'react';
import { getFilteredNodes } from '@/data/blueprintData';

interface Props {
  selectedNode?: string;
  onNodeSelect: (nodeId: string | undefined) => void;
  filters: Record<string, boolean>;
}

export default function StrategicRoadmap2D({ selectedNode, onNodeSelect, filters }: Props) {
  const filteredNodes = getFilteredNodes(filters);
  
  // Group nodes by tier
  const nodesByTier = filteredNodes.reduce((acc, node) => {
    if (!acc[node.tier]) acc[node.tier] = [];
    acc[node.tier].push(node);
    return acc;
  }, {} as Record<number, typeof filteredNodes>);

  const tierLabels: Record<number, string> = {
    1: 'Personas',
    2: 'Gateway', 
    3: 'Homepage Features',
    4: 'Portals',
    5: 'Supplier Features',
    6: 'Backend Services',
    7: 'Technology Stack'
  };

  return (
    <div className="w-full h-full overflow-auto bg-[#192231] p-8">
      <div className="min-w-[1200px] space-y-8">
        {Object.entries(nodesByTier).map(([tier, nodes]) => (
          <div key={tier} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300 border-b border-gray-600 pb-2">
              Tier {tier}: {tierLabels[parseInt(tier)]}
            </h3>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {nodes.map(node => (
                <div
                  key={node.id}
                  onClick={() => onNodeSelect(selectedNode === node.id ? undefined : node.id)}
                  className={`
                    min-w-[200px] max-w-[250px] p-4 rounded-lg cursor-pointer transition-all duration-200 border-2
                    ${selectedNode === node.id 
                      ? 'border-white bg-white text-black shadow-lg scale-105' 
                      : 'border-gray-600 hover:border-gray-400 hover:scale-102'
                    }
                  `}
                  style={{ 
                    backgroundColor: selectedNode === node.id ? 'white' : node.color,
                    color: selectedNode === node.id ? node.color : 'white'
                  }}
                >
                  <div className="text-center space-y-2">
                    <div className="text-2xl">{node.icon}</div>
                    <div className="font-semibold text-sm leading-tight">{node.label}</div>
                    <div className="text-xs opacity-80 leading-relaxed">{node.summary}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connection indicators */}
            {tier !== '7' && (
              <div className="flex justify-center">
                <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

