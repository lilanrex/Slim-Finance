import React from 'react';
import './SectorPerformance.css';

const SectorPerformance = () => {
  const sectors = [
    { name: 'Technology', performance: '+2.5%' },
    { name: 'Healthcare', performance: '+1.8%' },
    { name: 'Financials', performance: '-0.5%' },
    { name: 'Consumer Discretionary', performance: '+0.7%' },
    { name: 'Industrials', performance: '+1.2%' },
  ];

  return (
    <div className="sector-performance">
      <h2>Sector Performance</h2>
      <ul>
        {sectors.map((sector, index) => (
          <li key={index}>
            <span className="sector-name">{sector.name}</span>
            <span className={`sector-value ${sector.performance.startsWith('+') ? 'positive' : 'negative'}`}>
              {sector.performance}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectorPerformance;
