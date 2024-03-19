import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
 return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 JBECP. All rights reserved.</p>
        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </nav>
      </div>
    </footer>
 );
};

export default Footer;