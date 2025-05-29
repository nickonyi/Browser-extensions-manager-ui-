import React from 'react';
import logo from '../assets/images/logo.svg';
import IconMoon from '../assets/images/icon-moon.svg';
import IconSun from '../assets/images/icon-sun.svg';

function Header({darkMode,setDarkMode}) {
  return (
    <div className="header">
      <div className="header-extensions">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="header-theme-icon" onClick={()=> setDarkMode(prev => !prev)}>
        <img src={darkMode?IconSun:IconMoon} alt="theme icon" />
      </div>
    </div>
  );
}

export default Header;
