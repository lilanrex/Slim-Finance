import React from 'react';
import './Header.css';

const Header = ({ appName }) => {
  return (
    <header className="header">
      <div className="logo">{appName}</div>
      <nav className="main-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/markets">Markets</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/watchlist">Watchlist</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search stocks, News..." />
        <button>Search</button>
      </div>
      <div className="user-menu">
        <span>Welcome, Guest</span>
        <button>Login</button>
      </div>
    </header>
  );
};

export default Header;