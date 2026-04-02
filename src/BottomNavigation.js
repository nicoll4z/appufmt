import React from 'react';
import { Calendar, Utensils, MapPin, User, MoreHorizontal } from 'lucide-react';

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
            icon={Calendar}
            label="Notícias"
            isActive={activeTab === 'Notícias'}
            onClick={() => setActiveTab('Notícias')}
          />
          <TabButton
            icon={Utensils}
            label="RU"
            isActive={activeTab === 'RU'}
            onClick={() => setActiveTab('RU')}
          />
          <TabButton
            icon={MapPin}
            label="Mapa"
            isActive={activeTab === 'Mapa'}
            onClick={() => setActiveTab('Mapa')}
          />
          <TabButton
            icon={User}
            label="Pessoal"
            isActive={activeTab === 'Pessoal'}
            onClick={() => setActiveTab('Pessoal')}
          />
          <TabButton
            icon={MoreHorizontal}
            label="Outros"
            isActive={activeTab === 'Outros'}
            onClick={() => setActiveTab('Outros')}
          />
        </div>
      </div>

      <div className="home-indicator">
        <div className="indicator-bar"></div>
      </div>
    </>
  );
};

export default BottomNavigation;