import React from 'react';
import logo from '../assets/images/logo.svg';
import themeIcon from '../assets/images/icon-moon.svg';

function Header() {
  return (
    <div className="header">
      <div className="header-extensions">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="header-theme-icon">
        <img src={themeIcon} alt="theme icon" />
      </div>
    </div>
  );
}

export default Header;
