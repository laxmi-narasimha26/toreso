import React, { useState } from 'react';
import './App.css';
import StrategicRoadmap2D from './components/StrategicRoadmap2D';
import ConceptualWorld3D from './components/ConceptualWorld3D';
import NetworkGraph3D from './components/NetworkGraph3D';
import NodeDetailsPanel from './components/NodeDetailsPanel';
import { BlueprintNode } from './data/blueprintData';

type ViewType = '2d' | '3d-conceptual' | '3d-network';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('2d');
  const [selectedNode, setSelectedNode] = useState<string | undefined>(undefined);
  const [filters, setFilters] = useState({
    showPersonas: true,
    showHomepage: true,
    showSupplierFeatures: true,
    showTechStack: true,
    showBackendServices: true,
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    setSelectedNode(undefined);
  };

  const handleFilterChange = (filterKey: string) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey as keyof typeof prev]
    }));
  };

  const renderCurrentView = () => {
    const viewProps = {
      selectedNode,
      onNodeSelect: setSelectedNode,
      filters
    };

    switch (currentView) {
      case '2d':
        return <StrategicRoadmap2D {...viewProps} />;
      case '3d-conceptual':
        return <ConceptualWorld3D {...viewProps} />;
      case '3d-network':
        return <NetworkGraph3D {...viewProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="title-section">
            <h1 className="main-title">
              🔮 Cerebrum: Toreso Strategic Blueprint
            </h1>
            <p className="subtitle">Interactive Multi-Dimensional Strategic Presentation</p>
          </div>
          
          {/* View Selection */}
          <div className="view-buttons">
            <button
              onClick={() => handleViewChange('2d')}
              className={`view-button ${currentView === '2d' ? 'active' : ''}`}
            >
              📊 2D Strategic Roadmap
            </button>
            <button
              onClick={() => handleViewChange('3d-conceptual')}
              className={`view-button ${currentView === '3d-conceptual' ? 'active' : ''}`}
            >
              🌌 3D Conceptual World
            </button>
            <button
              onClick={() => handleViewChange('3d-network')}
              className={`view-button ${currentView === '3d-network' ? 'active' : ''}`}
            >
              🕸️ 3D Network Graph
            </button>
          </div>
        </div>
      </header>

      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          {/* Filters */}
          <div className="filter-section">
            <h3 className="section-title">🎛️ Filters</h3>
            <div className="filter-list">
              {Object.entries(filters).map(([key, value]) => (
                <label key={key} className="filter-item">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => handleFilterChange(key)}
                  />
                  <span className="filter-label">
                    {key.replace('show', '').replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Current View Info */}
          <div className="view-info-section">
            <h3 className="section-title">📍 Current View</h3>
            <div className="view-description">
              {currentView === '2d' && "Strategic subway map showing hierarchical flow from personas to backend services."}
              {currentView === '3d-conceptual' && "Abstract 3D landscape representing Toreso as a data refinement hub."}
              {currentView === '3d-network' && "Force-directed graph showing relationships and data flow between components."}
            </div>
          </div>

          {/* Strategic Goals */}
          <div className="goals-section">
            <h3 className="section-title">🎯 Strategic Goals</h3>
            <ul className="goals-list">
              <li>Combine monthly volume for discounts</li>
              <li>Supplier quality and auditing</li>
              <li>Invoice discounting for cash flow</li>
              <li>Easy RFQ/RFI uploading</li>
              <li>Real-time order tracking</li>
              <li>Automated compliance checks</li>
            </ul>
          </div>

          {/* Node Details Panel */}
          {selectedNode && (
            <NodeDetailsPanel 
              nodeId={selectedNode} 
              onClose={() => setSelectedNode(undefined)} 
            />
          )}
        </aside>

        {/* Main Visualization Area */}
        <main className="visualization-area">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}

export default App; 
