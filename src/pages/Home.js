import React from 'react';
import MarketOverview from '../components/MarketOverview';
import NewsFeed from '../components/NewsFeed';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Uncover the trends, unlock the potential</h1>
      <MarketOverview />
      <NewsFeed />
    </div>
  );
};

export default Home;