import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Bloom</h3>
          <p>Empowering investors with cutting-edge market insights and tools.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/markets">Markets</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">T</a>
            <a href="#" className="social-icon">L</a>
            <a href="#" className="social-icon">F</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Bloom Financial. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;