import React, { useState } from 'react';
import { FileDown } from 'lucide-react';
import './AcademicServices.css';

export default function AcademicServices() {
  const [message, setMessage] = useState('');

  return (
    <main className="academic-services" aria-labelledby="academic-services-title">
      <header className="academic-services-header">
        <h1 id="academic-services-title">Serviços Acadêmicos</h1>
      </header>

      <div className="academic-services-list">
        {['Histórico Escolar', 'Atestado de Conclusão'].map((document) => (
          <button
            key={document}
            type="button"
            className="academic-services-option"
            onClick={() => setMessage(`${document}: documento ainda não disponível para download.`)}
          >
            <FileDown aria-hidden="true" size={23} strokeWidth={2.5} />
            <span>{document}</span>
          </button>
        ))}
      </div>

      <p className="academic-services-message" role="status">{message}</p>
    </main>
  );
}
