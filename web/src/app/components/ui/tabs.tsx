import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('recent-projects');

  const tabs = [
    { id: 'recent-projects', label: 'Recent Projects' },
    { id: 'chemicals', label: 'Chemicals' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'recent-projects':
        return <div>Content for Recent Projects</div>;
      case 'chemicals':
        return <div>Content for Chemicals</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;