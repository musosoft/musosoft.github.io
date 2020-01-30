import React from 'react';

const Footer = () => (
  <footer className="footer footer-default">
    <div className="container">
      <div className="copyright">
        &copy; {new Date().getFullYear()} | muso.sk
      </div>
    </div>
  </footer>
);

export default Footer;
