import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Markets from './pages/Markets.js';
import News from './pages/News.js';
import Watchlist from './pages/Watchlist.js';
import Portfolio from './pages/Portfolio.js';
import StockTicker from './components/StockTicker.js';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header appName="SlimFinance" />
      <StockTicker />
      <main className="main-content">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/news" element={<News />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;