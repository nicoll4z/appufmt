
import React, { useState } from 'react';
import BottomNavigation from './BottomNavigation';
import StudentId from './StudentId';
import Outer from './Outer';
import AcademicServices from './AcademicServices';
import News from './News';
import CampusMap from './CampusMap';

import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Notícias');
  const [personalTab, setPersonalTab] = useState('carteira');
  const showingServices = activeTab !== 'Outros' && activeTab !== 'Notícias' && activeTab !== 'Mapa' && personalTab === 'servicos';

  return (
    <div className={`app-container${activeTab === 'Outros' ? ' app-container--outros' : ''}${activeTab === 'Mapa' ? ' app-container--mapa' : ''}${showingServices ? ' app-container--servicos' : ''}`}>

      {/* Conteúdo principal */}
      <div className="app-content">

        {activeTab === 'Outros' ? (
          <Outer />
        ) : activeTab === 'Notícias' ? (
          <News />
        ) : activeTab === 'Mapa' ? (
          <CampusMap />
        ) : (
          <>
            {/* Cabeçalho da carteira */}
            <div className="header-tabs">
              <button
                type="button"
                className={`header-tab${personalTab === 'servicos' ? ' active' : ''}`}
                onClick={() => setPersonalTab('servicos')}
                aria-pressed={personalTab === 'servicos'}
              >
                Serviços Acadêmicos
              </button>

              <button
                type="button"
                className={`header-tab${personalTab === 'carteira' ? ' active' : ''}`}
                onClick={() => setPersonalTab('carteira')}
                aria-pressed={personalTab === 'carteira'}
              >
                Carteira de Estudante
              </button>
            </div>

            {/* Carteira do estudante */}
            {personalTab === 'servicos' ? <AcademicServices /> : <StudentId />}
          </>
        )}

      </div>

      {/* Navegação inferior */}
      <BottomNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </div>
  );
};

export default App;
