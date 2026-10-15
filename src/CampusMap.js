import React, { useState } from 'react';
import './CampusMap.css';

const CAMPUS = 'Universidade Federal de Mato Grosso, campus Cuiabá';

export default function CampusMap() {
  const [search, setSearch] = useState('');
  const [place, setPlace] = useState(CAMPUS);

  function handleSearch(event) {
    event.preventDefault();
    const query = search.trim();
    setPlace(query ? `${query}, ${CAMPUS}` : CAMPUS);
  }

  return (
    <main className="campus-map" aria-label="Mapa da UFMT">
      <iframe
        className="campus-map-frame"
        title="Mapa interativo da UFMT em Cuiabá"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(place)}&z=15&output=embed`}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <form className="campus-map-search" role="search" onSubmit={handleSearch}>
        <label className="campus-map-label" htmlFor="campus-map-query">
          Procurar local na UFMT
        </label>
        <input
          id="campus-map-query"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Procurar local na UFMT"
          enterKeyHint="search"
        />
        <button type="submit" aria-label="Buscar local no mapa">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>
        </button>
      </form>
    </main>
  );
}
