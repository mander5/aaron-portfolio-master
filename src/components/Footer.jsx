import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-links'>
          <a
            href='https://github.com/mander5'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/aaronmander/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a href='/assets/Aaron_Mander_CV.pdf' download='Aaron_Mander_CV.pdf'>
            Download CV
          </a>
        </div>
        <p>&copy; 2025 Aaron Mander. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
