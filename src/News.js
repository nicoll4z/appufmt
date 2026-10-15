import React, { useState } from 'react';
import { Share2, Shield, Image as ImageIcon } from 'lucide-react';
import { newsItems } from './newsData';
import './News.css';

function NewsImage({ item }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="news-image">
      {failed ? (
        <div className="news-image-fallback"><ImageIcon aria-hidden="true" /><span>Imagem indisponível</span></div>
      ) : (
        <img src={item.image} alt={item.title} loading="lazy" onError={() => setFailed(true)} />
      )}
      <figcaption>{item.credit}</figcaption>
    </figure>
  );
}

export default function News() {
  const [tab, setTab] = useState('Notícias');
  const [message, setMessage] = useState('');
  const [manualLink, setManualLink] = useState('');
  const items = tab === 'Eventos' ? newsItems.filter((item) => item.event) : newsItems;

  async function share(item) {
    setMessage('');
    setManualLink('');
    try {
      if (navigator.share) {
        await navigator.share({ title: item.title, url: item.url });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(item.url);
        setMessage('Link copiado para compartilhar.');
      } else {
        setManualLink(item.url);
        setMessage('Copie o link abaixo para compartilhar.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        setManualLink(item.url);
        setMessage('Copie o link abaixo para compartilhar.');
      }
    }
  }

  return (
    <main className="news-screen" aria-label="Notícias da UFMT">
      <div className="header-tabs news-tabs" aria-label="Categorias">
        {['Notícias', 'Eventos'].map((label) => (
          <button key={label} type="button" className={`header-tab${tab === label ? ' active' : ''}`} aria-pressed={tab === label} onClick={() => setTab(label)}>{label}</button>
        ))}
      </div>

      <details className="news-safety">
        <summary><Shield size={19} aria-hidden="true" />Segurança do campus</summary>
        <p>Consulte as orientações e os canais de atendimento no <a href="https://www.ufmt.br/" target="_blank" rel="noopener noreferrer">portal oficial da UFMT</a>.</p>
      </details>

      <div className="news-feed">
        <p className="news-archive">{tab === 'Eventos' ? 'Eventos de arquivo' : 'Seleção de notícias de arquivo'} · UFMT</p>
        <div className="news-feedback" role="status">{message}</div>
        {manualLink && <input className="news-share-link" aria-label="Link para compartilhar" readOnly value={manualLink} onFocus={(event) => event.target.select()} />}
        {items.map((item) => (
          <article className="news-card" key={item.id}>
            <NewsImage item={item} />
            <div className="news-card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <time dateTime={item.date}>{new Date(`${item.date}T12:00:00`).toLocaleDateString('pt-BR')}</time>
              <div className="news-actions">
                <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Ler: ${item.title}`}>Ler</a>
                <button type="button" onClick={() => share(item)} aria-label={`Compartilhar: ${item.title}`}><Share2 size={17} aria-hidden="true" />Compartilhar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
