import React, { useState, useEffect } from 'react';
import './Navigation.css';
import logo from "../images/logo.png";

const StickyNavigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 20);
      // Close the menu if it's open when scrolling
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav ${isSticky ? 'sticky' : ''}`}>
      <div className="nav-content">
        <div className="my-logo">
          {/* <a href="/#">SHRi.</a> */}
          <img src={logo} alt=''  />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#Skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#certification" onClick={toggleMenu}>Certification</a></li>
          <li><a href="#project" onClick={toggleMenu}>Project</a></li>
          <li><a href="#education" onClick={toggleMenu}>Education</a></li>
          <li><a href="#download" onClick={toggleMenu}>Downloads</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default StickyNavigation;
