import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ appName }) => {
  return (
    <header className="header">
      <div className="logo">{appName}</div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/markets">Markets</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
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