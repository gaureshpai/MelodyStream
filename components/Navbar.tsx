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
            <div className='title'>MelodyStream</div>
          </a>
        </Link>
      </div>
      <div className="button-container">
        <Link href="https://gauresh.vercel.app" target="_blank" rel="noopener noreferrer" className="buttons">
          Portfolio
        </Link>
        <Link href="https://github.com/gaureshpai" target="_blank" rel="noopener noreferrer" className="buttons">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/gaureshpai/" target="_blank" rel="noopener noreferrer" className="buttons">
          LinkedIn
        </Link>
        <Link href="https://www.twitter.com/hseruag/" target="_blank" rel="noopener noreferrer" className="buttons">
          Twitter
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
