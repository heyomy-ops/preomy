import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/estimator', label: 'Price Estimator' },
    { path: '/process', label: 'Process' },
    { path: '/contact', label: 'Contact' },
  ];

  // Check if on home page - only home page has transparent hero background
  const isHomePage = location.pathname === '/';
  
  // Apply dark navbar on non-home pages OR when scrolled on home page
  const shouldUseDarkNavbar = !isHomePage || isScrolled;

  return (
    <header className={`navbar ${shouldUseDarkNavbar ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src="/images/logo.png" alt="PREOMY" className="logo-image" />
          </Link>

          <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="navbar-cta-mobile">
              <Link to="/estimator" className="btn btn-gold">
                Get Free Quote
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            <Link to="/estimator" className="btn btn-gold navbar-cta-desktop">
              Get Free Quote
            </Link>
            
            <button 
              className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
