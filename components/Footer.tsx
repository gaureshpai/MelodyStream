import React from 'react';
import '../public/styles/Footer.css'; // Assuming the CSS file is located here

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Gauresh. All rights reserved.</p>
    </footer>
  );
}

export default Footer;