import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/styles.css';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  
  // Determine if we're on the homepage to use the special hero header
  const isHomePage = location.pathname === '/';

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
    document.body.classList.toggle('no-scroll');
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    document.body.classList.remove('no-scroll');
  };

  // Close mobile nav when changing routes
  useEffect(() => {
    closeMobileNav();
  }, [location]);

  return (
    <header className={isHomePage ? 'header-home' : 'header'}>
      <nav className="navbar">
        <Link to="/" className="logo">Louie the Corgi</Link>

        <div 
          className={`hamburger-menu ${mobileNavOpen ? 'active' : ''}`} 
          onClick={toggleMobileNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-links">
          <Link to="/behind-the-scenes">Behind the Scenes</Link>
          <Link to="/adopt">Adopt Don't Shop</Link>
          <Link to="/shop">Louie's Store</Link>
          <button className="donate-btn">Donate</button>
        </div>

        <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`}>
          <Link to="/behind-the-scenes" onClick={closeMobileNav}>Behind the Scenes</Link>
          <Link to="/adopt" onClick={closeMobileNav}>Adopt Don't Shop</Link>
          <Link to="/shop" onClick={closeMobileNav}>Louie's Store</Link>
          <button className="donate-btn" onClick={closeMobileNav}>Donate</button>
        </div>
      </nav>
      
      {isHomePage && (
        <div className="hero-content">
          <h1 className="hero-title">Louie<br/>the Corgi</h1>
          <a href="#about" className="scroll-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <img src="/louie-header.png" alt="Louie the Corgi peeking" className="corgi-hero-image" />
        </div>
      )}
    </header>
  );
}

export default Header;