import React from 'react';
import NewsFeed from '../components/NewsFeed';
import './News.css';

const News = () => {
  return (
    <div className="news">
      <h1>Financial News</h1>
      <NewsFeed />
    </div>
  );
};

export default News;