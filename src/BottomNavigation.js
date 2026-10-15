import React from 'react';
import { NewsIcon, DiningIcon, MapIcon, PersonIcon, MoreIcon } from './NavigationIcons';

const TabButton = ({ icon: Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`nav-tab ${isActive ? 'active' : ''}`}
  >
    <Icon className="nav-icon" />
    <span className="nav-label">{label}</span>
  </button>
);

const BottomNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="bottom-nav">
        <div className="nav-tabs">
          <TabButton
            icon={NewsIcon}
            label="Notícias"
            isActive={activeTab === 'Notícias'}
            onClick={() => setActiveTab('Notícias')}
          />
          <TabButton
            icon={DiningIcon}
            label="RU"
            isActive={activeTab === 'RU'}
            onClick={() => setActiveTab('RU')}
          />
          <TabButton
            icon={MapIcon}
            label="Mapa"
            isActive={activeTab === 'Mapa'}
            onClick={() => setActiveTab('Mapa')}
          />
          <TabButton
            icon={PersonIcon}
            label="Pessoal"
            isActive={activeTab === 'Pessoal'}
            onClick={() => setActiveTab('Pessoal')}
          />
          <TabButton
            icon={MoreIcon}
            label="Outros"
            isActive={activeTab === 'Outros'}
            onClick={() => setActiveTab('Outros')}
          />
        </div>
      </div>

      <div className="home-indicator">
      </div>
    </>
  );
};

export default BottomNavigation;
