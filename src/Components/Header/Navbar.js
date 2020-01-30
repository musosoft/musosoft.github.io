import React from 'react';
import logo from '../../assets/img/logo.svg';

const Navbar = () => (
  <nav
    className="navbar navbar-transparent navbar-expand"
    color-on-scroll="100"
    id="sectionsNav"
  >
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="./">
          <img
            className="navbar-brand-logo"
            src={logo}
            alt="muso.sk logo"
            title="muso.sk logo"
          />
        </a>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Say Hello
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
