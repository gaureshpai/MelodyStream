import React from 'react';
import '../public/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gauresh. All rights reserved.</p>
    </footer>
  );
}

export default Footer;