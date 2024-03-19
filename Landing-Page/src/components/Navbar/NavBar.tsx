import React from 'react';
import './NavBar.css';
import Image from '../Image';

function NavBar() {
 return (
    <nav className="navbar">
      <div className="logo-container">
        <a href='#'><Image src="/ImageAssets/JBECP-Logo-White.png" alt="Logo" /></a>
      </div>

      <div className="navbar-content">
        <div className='nav-items'>
          <ul id='navbar'>
            <li><a href='/home'>Home</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
 );
};

export default NavBar;
