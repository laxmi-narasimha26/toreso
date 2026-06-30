import React from 'react';
import { getNodeById } from '../data/blueprintData';

interface Props {
  nodeId: string;
  onClose: () => void;
}

const NodeDetailsPanel: React.FC<Props> = ({ nodeId, onClose }) => {
  const node = getNodeById(nodeId);

  if (!node) return null;

  return (
    <div className="node-details-panel">
      <div className="panel-header">
        <button className="panel-close" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Node Header */}
      <div className="node-header">
        <span style={{ fontSize: '2rem' }}>{node.icon}</span>
        <div>
          <h4 className="node-title">{node.label}</h4>
          <div className="node-type">
            {node.type} • Tier {node.tier}
          </div>
        </div>
      </div>

      <p className="node-summary-text">{node.summary}</p>

      {/* Details Sections */}
      <div className="details-section">
        <div className="detail-label">
          <span className="detail-indicator" style={{ backgroundColor: '#22c55e' }}></span>
          Strategic Significance
        </div>
        <p className="detail-text">{node.details.significance}</p>
      </div>

      <div className="details-section">
        <div className="detail-label">
          <span className="detail-indicator" style={{ backgroundColor: '#3b82f6' }}></span>
          Strategic Justification
        </div>
        <p className="detail-text">{node.details.justification}</p>
      </div>

      <div className="details-section">
        <div className="detail-label">
          <span className="detail-indicator" style={{ backgroundColor: '#8b5cf6' }}></span>
          Data Flow & Architecture
        </div>
        <p className="detail-text">{node.details.dataFlow}</p>
      </div>

      {/* Additional Details */}
      {node.details.goals && node.details.goals.length > 0 && (
        <div className="details-section">
          <div className="detail-label">
            <span className="detail-indicator" style={{ backgroundColor: '#f59e0b' }}></span>
            Strategic Goals
          </div>
          <ul style={{ margin: 0, paddingLeft: '1rem' }}>
            {node.details.goals.map((goal, index) => (
              <li key={index} className="detail-text" style={{ marginBottom: '0.25rem' }}>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      )}

      {node.details.features && node.details.features.length > 0 && (
        <div className="details-section">
          <div className="detail-label">
            <span className="detail-indicator" style={{ backgroundColor: '#10b981' }}></span>
            Key Features
          </div>
          <ul style={{ margin: 0, paddingLeft: '1rem' }}>
            {node.details.features.map((feature, index) => (
              <li key={index} className="detail-text" style={{ marginBottom: '0.25rem' }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {node.details.challenges && node.details.challenges.length > 0 && (
        <div className="details-section">
          <div className="detail-label">
            <span className="detail-indicator" style={{ backgroundColor: '#ef4444' }}></span>
            Challenges Addressed
          </div>
          <ul style={{ margin: 0, paddingLeft: '1rem' }}>
            {node.details.challenges.map((challenge, index) => (
              <li key={index} className="detail-text" style={{ marginBottom: '0.25rem' }}>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tier Information */}
      <div className="tier-info">
        <span>Tier {node.tier}</span>
        <div 
          className="tier-color"
          style={{ backgroundColor: node.color }}
        ></div>
      </div>
    </div>
  );
};

export default NodeDetailsPanel; 
