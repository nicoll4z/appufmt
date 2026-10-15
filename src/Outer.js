import React, { useState } from "react";
import {
  MapPin,
  BookMarked,
  CheckCircle,
  UserCheck,
  Bell,
  LogOut,
} from "lucide-react";
import "./Outer.css";

export default function Outros() {
  const [notificacoes, setNotificacoes] = useState(true);

  const opcoes = [
    {
      icon: MapPin,
      titulo: "Alterar campus",
      descricao: "Localização de Notícias, RU e Mapa.",
    },
    {
      icon: BookMarked,
      titulo: "Cartilha de Acolhimento aos Calouros",
    },
    {
      icon: CheckCircle,
      titulo: "Termo de Uso",
    },
    {
      icon: BookMarked,
      titulo: "Flexibilização Educacional",
      descricao:
        "Guias de Orientação para Estudantes e para Coordenadores de Curso",
    },
    {
      icon: UserCheck,
      titulo: "Alterar vínculo",
    },
  ];

  return (
    <main className="outras-tela">
      <header className="outras-cabecalho">
        <h1>Outras opções</h1>
      </header>

      <section className="outras-lista">
        {opcoes.map(({ icon: Icon, titulo, descricao }) => (
          <button
            className="outras-opcao"
            key={titulo}
            onClick={() => alert(`${titulo}: demonstração`)}
          >
            <Icon className="outras-icone" size={36} strokeWidth={2.5} />

            <span className="outras-textos">
              <span className="outras-titulo">{titulo}</span>
              {descricao && (
                <span className="outras-descricao">{descricao}</span>
              )}
            </span>
          </button>
        ))}

        <div className="outras-opcao notificacoes-opcao">
          <Bell className="outras-icone" size={36} fill="currentColor" />

          <span className="outras-titulo">Receber notificações</span>

          <button
            type="button"
            className={`notificacoes-switch ${
              notificacoes ? "ligado" : ""
            }`}
            role="switch"
            aria-checked={notificacoes}
            aria-label="Receber notificações"
            onClick={() => setNotificacoes((estado) => !estado)}
          >
            <span />
          </button>
        </div>

        <button
          className="outras-opcao"
          onClick={() => alert("Opção sair: demonstração")}
        >
          <LogOut className="outras-icone" size={36} strokeWidth={2.5} />
          <span className="outras-titulo">Sair</span>
        </button>
      </section>

      <p className="outras-versao">Versão: 1.4.2</p>
    </main>
  );
}
