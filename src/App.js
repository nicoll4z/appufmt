import React, { useState } from 'react';
import QRCode from './QRCode';
import InfoCard from './InfoCard';
import BottomNavigation from './BottomNavigation';
import StudentId from './StudentId';

import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Pessoal');

  const studentData = {
    name: 'NICOLLAS KAUA PEREIRA REIS',
    course: 'CIENCIA DA COMPUTACAO - BACHARELADO',
    campus: 'CAMPUS CUIABÁ',
    institution: 'UNIVERSIDADE FEDERAL DE MATO GROSSO',
    situation: 'MATRICULADO NO PERÍODO',
    registration: '202111310031',
    currentPeriod: '20262'
  };

  return (
    <div className="app-container">
      {/* Header Tabs */}
      <div className="header-tabs">
         <button className="header-tab">
          Serviços Acadêmicos
        </button>
        <button className="header-tab active">
          Carteira de Estudante
        </button>
      </div>
       <StudentId />
       <BottomNavigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
};

export default App;