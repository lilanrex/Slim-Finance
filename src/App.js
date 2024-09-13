import React from 'react';
import Header from './components/Header.js';
import MarketOverview from './components/MarketOverview.js';
import NewsFeed from './components/NewsFeed.js';
import StockTicker from './components/StockTicker.js';
import Footer from './components/Footer.js';

import './App.css';
import './components/Header.css';
import './components/MarketOverview.css';
import './components/NewsFeed.css';
import './components/StockTicker.css';

function App() {
  return (
    <div className="App">
      <Header appName="SlimFinance" />
      <StockTicker />
      <main>
        <MarketOverview />
        <NewsFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;