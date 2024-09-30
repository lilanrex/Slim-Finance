import React from 'react';
import './TopMovers.css';

const TopMovers = () => {
  const gainers = [
    { symbol: 'AAPL', name: 'Apple Inc.', change: '+5.2%' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', change: '+4.8%' },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.', change: '+3.9%' },
  ];

  const losers = [
    { symbol: 'BA', name: 'Boeing Co.', change: '-3.1%' },
    { symbol: 'GE', name: 'General Electric Company', change: '-2.7%' },
    { symbol: 'XOM', name: 'Exxon Mobil Corporation', change: '-2.2%' },
  ];

  return (
    <div className="top-movers">
      <div className="gainers">
        <h2>Top Gainers</h2>
        <ul>
          {gainers.map((stock, index) => (
            <li key={index}>
              <span className="stock-symbol">{stock.symbol}</span>
              <span className="stock-name">{stock.name}</span>
              <span className="stock-change positive">{stock.change}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="losers">
        <h2>Top Losers</h2>
        <ul>
          {losers.map((stock, index) => (
            <li key={index}>
              <span className="stock-symbol">{stock.symbol}</span>
              <span className="stock-name">{stock.name}</span>
              <span className="stock-change negative">{stock.change}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopMovers;
