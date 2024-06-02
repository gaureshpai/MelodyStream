import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../public/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link legacyBehavior href="/" passHref>
          <a className="logo">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <div className='title'>MediaPlayer</div>
          </a>
        </Link>
      </div>
      <div className="button-container">
        <a href="https://gauresh.vercel.app" target="_blank" rel="noopener noreferrer" className="buttons">
          Portfolio
        </a>
        <a href="https://github.com/gaureshpai" target="_blank" rel="noopener noreferrer" className="buttons">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/gaureshpai/" target="_blank" rel="noopener noreferrer" className="buttons">
          LinkedIn
        </a>
        <a href="https://www.twitter.com/hseruag/" target="_blank" rel="noopener noreferrer" className="buttons">
          Twitter
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
