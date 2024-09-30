import React from 'react';
import './Commodities.css';

const Commodities = () => {
  const commodities = [
    { name: 'Crude Oil (WTI)', price: '$75.21', change: '+2.3%' },
    { name: 'Gold', price: '$1,845.50', change: '-0.5%' },
    { name: 'Silver', price: '$27.45', change: '+1.2%' },
    { name: 'Natural Gas', price: '$2.91', change: '-1.7%' },
    { name: 'Copper', price: '$4.52', change: '+0.8%' },
  ];

  return (
    <div className="commodities">
      <h2>Commodities</h2>
      <ul>
        {commodities.map((commodity, index) => (
          <li key={index}>
            <span className="commodity-name">{commodity.name}</span>
            <span className="commodity-price">{commodity.price}</span>
            <span className={`commodity-change ${commodity.change.startsWith('+') ? 'positive' : 'negative'}`}>
              {commodity.change}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Commodities;
