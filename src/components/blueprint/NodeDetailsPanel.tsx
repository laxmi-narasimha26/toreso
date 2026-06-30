'use client';

import React from 'react';
import { getNodeById } from '@/data/blueprintData';

interface Props {
  nodeId: string;
  onClose: () => void;
}

export default function NodeDetailsPanel({ nodeId, onClose }: Props) {
  const node = getNodeById(nodeId);
  
  if (!node) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Persona': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Gateway': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'HomepageSection': return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'Portal': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'SupplierFeature': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'BackendService': return 'bg-red-100 text-red-800 border-red-200';
      case 'TechStack': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-xl p-6 m-4 max-w-md">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{node.icon}</span>
            <div>
              <h3 className="font-bold text-lg leading-tight">{node.label}</h3>
              <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(node.type)}`}>
                {node.type}
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 text-xl font-bold ml-2"
        >
          ×
        </button>
      </div>

      {/* Summary */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 leading-relaxed">{node.summary}</p>
      </div>

      {/* Details Sections */}
      <div className="space-y-4">
        {/* Significance */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Strategic Significance
          </h4>
          <p className="text-sm leading-relaxed text-gray-700">
            {node.details.significance}
          </p>
        </div>

        {/* Justification */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Strategic Justification
          </h4>
          <p className="text-sm leading-relaxed text-gray-700">
            {node.details.justification}
          </p>
        </div>

        {/* Data Flow */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Data Flow & Architecture
          </h4>
          <p className="text-sm leading-relaxed text-gray-700">
            {node.details.dataFlow}
          </p>
        </div>
      </div>

      {/* Tier Information */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Tier {node.tier}</span>
          <div 
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: node.color }}
          ></div>
        </div>
      </div>
    </div>
  );
} 
