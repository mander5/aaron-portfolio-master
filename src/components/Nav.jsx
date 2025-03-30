import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='logo'>AaronMander</div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#portfolio'>Work</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <div className='hamburger' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
