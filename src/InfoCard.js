import React from 'react';

const InfoCard = ({ label, value }) => {
  return (
    <div className="info-card">
      <div className="info-card-content">
        <div className="info-label">{label}:</div>
        <div className="info-value">{value}</div>
      </div>
    </div>
  );
};

export default InfoCard;