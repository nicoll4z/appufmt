
import React, { useState } from 'react';
import QRCode from './QRCode';
import InfoCard from './InfoCard';
import './App.css';

const studentId = () => {
  const [activeTab, setActiveTab] = useState('Pessoal');

  const studentData = {
    name: 'NICOLLAS KAUA PEREIRA REIS',
    course: 'CIENCIA DA COMPUTACAO - BACHARELADO',
    campus: 'CAMPUS CUIABÁ',
    institution: 'UNIVERSIDADE FEDERAL DE MATO GROSSO',
    situation: 'MATRICULADO NO PERÍODO',
    registration: '202111310031',
    currentPeriod: '20262',
  };

  return (
    <div className="app-container">
      {/* Conteúdo principal */}
      <div className="main-content">
        <QRCode />

        <p className="description">
          Com esse código QR qualquer pessoa pode comprovar que você é um estudante da UFMT.
        </p>

        {/* Informações do estudante */}
        <div className="info-cards">
          <InfoCard label="Estudante" value={studentData.name} />
          <InfoCard label="Curso" value={studentData.course} />
          <InfoCard label="Campus" value={studentData.campus} />
          <InfoCard label="Instituição" value={studentData.institution} />
          <InfoCard label="Situação" value={studentData.situation} />
          <InfoCard label="Matrícula" value={studentData.registration} />
          <InfoCard label="Período Atual" value={studentData.currentPeriod} />
        </div>
      </div>
    </div>
  );
};

export default studentId;
