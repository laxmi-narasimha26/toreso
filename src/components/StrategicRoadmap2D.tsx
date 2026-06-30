import React from 'react';
import { getFilteredNodes, getTierLabel } from '../data/blueprintData';

interface Props {
  selectedNode?: string;
  onNodeSelect: (nodeId: string | undefined) => void;
  filters: Record<string, boolean>;
}

const StrategicRoadmap2D: React.FC<Props> = ({ selectedNode, onNodeSelect, filters }) => {
  const filteredNodes = getFilteredNodes(filters);
  
  // Group nodes by tier
  const nodesByTier = filteredNodes.reduce((acc, node) => {
    if (!acc[node.tier]) acc[node.tier] = [];
    acc[node.tier].push(node);
    return acc;
  }, {} as Record<number, typeof filteredNodes>);

  const handleNodeClick = (nodeId: string) => {
    onNodeSelect(selectedNode === nodeId ? undefined : nodeId);
  };

  return (
    <div className="roadmap-container">
      <div className="roadmap-content">
        {/* Strategic Flow Legend */}
        <div className="legend">
          <div className="legend-title">🗺️ Strategic Flow</div>
          <div className="legend-items">
            <div>💼 Users access the platform</div>
            <div>🏠 Through the homepage gateway</div>
            <div>🔧 Features engage and convert</div>
            <div>🏭 Portals provide core value</div>
            <div>⚡ Backend services process data</div>
            <div>☁️ Technology stack enables scale</div>
          </div>
        </div>

        {/* Render each tier */}
        {Object.entries(nodesByTier)
          .sort(([a], [b]) => parseInt(a) - parseInt(b))
          .map(([tier, nodes]) => (
            <div key={tier} className="tier-section">
              <h3 className="tier-header">
                Tier {tier}: {getTierLabel(parseInt(tier))}
              </h3>
              
              <div className="tier-nodes">
                {nodes.map(node => (
                  <div
                    key={node.id}
                    className={`blueprint-node ${selectedNode === node.id ? 'selected' : ''}`}
                    style={{ 
                      backgroundColor: selectedNode === node.id ? 'white' : node.color,
                      color: selectedNode === node.id ? node.color : 'white'
                    }}
                    onClick={() => handleNodeClick(node.id)}
                  >
                    <div className="node-content">
                      <span className="node-icon">{node.icon}</span>
                      <div className="node-label">{node.label}</div>
                      <div className="node-summary">{node.summary}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection line between tiers */}
              {parseInt(tier) < 7 && (
                <div className="tier-connection">
                  <div className="connection-line"></div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default StrategicRoadmap2D; 
