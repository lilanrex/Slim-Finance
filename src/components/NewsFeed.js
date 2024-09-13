import React from 'react';
import './NewsFeed.css';

const NewsFeed = () => {
  const newsItems = [
    { title: 'Fed Signals Potential Rate Hike', source: 'Financial Times', time: '2 hours ago' },
    { title: 'Tech Stocks Rally on Positive Earnings', source: 'Wall Street Journal', time: '4 hours ago' },
    { title: 'Oil Prices Surge Amid Global Supply Concerns', source: 'Reuters', time: '6 hours ago' },
    { title: 'Cryptocurrency Market Faces Regulatory Challenges', source: 'Bloomberg', time: '8 hours ago' },
  ];

  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      <ul>
        {newsItems.map((item, index) => (
          <li key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.source} - {item.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;