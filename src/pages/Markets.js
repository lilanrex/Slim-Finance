import React from 'react';
import MarketOverview from '../components/MarketOverview.js';
//import SectorPerformance from '../components/SectorPerformance.js';
//import TopMovers from '../components/TopMovers.js';
//import Commodities from '../components/Commodities.js';
import './Markets.css';

import SectorPerformance from '../components/SectorPerformance.js';
import TopMovers from '../components/TopMovers.js';
import Commodities from '../components/Commodities.js';

const Markets = () => {
  return (
    <div className="markets">
      <h1>Markets</h1>
      <MarketOverview />
      <SectorPerformance />
      <TopMovers />
      <Commodities />
      
    </div>
  );
};

export default Markets;