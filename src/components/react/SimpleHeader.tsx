import React, { useState, useEffect } from 'react';
import '../../styles/buttons.css';

const SimpleHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    console.log('Button clicked! Current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header Spacer */}
      <div style={{ 
        height: isScrolled ? '80px' : '120px',
        transition: 'height 0.3s ease'
      }} />
      
      {/* Sticky Header */}
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#F6F4F0', 
        padding: isScrolled ? '20px 0' : '40px 0', 
        zIndex: 1000,
        transition: 'padding 0.3s ease'
      }}>
      <div className="container" style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'relative'
      }}>
      {/* Left - Menu Button */}
      <button 
        onClick={toggleMenu}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ width: '20px', height: '1px', background: '#313131' }}></div>
          <div style={{ width: '20px', height: '1px', background: '#313131' }}></div>
          <div style={{ width: '20px', height: '1px', background: '#313131' }}></div>
        </div>
      </button>

      {/* Center - Logo */}
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        <img 
          src="/images/logo.svg" 
          alt="Logo" 
          className="header-logo"
          style={{ 
            height: isScrolled ? '40px' : '60px',
            transition: 'height 0.3s ease'
          }} 
        />
      </div>

      {/* Right - Contact (Desktop) / Email Icon (Mobile) */}
      <a 
        href="/contact" 
        className="btn-primary desktop-only"
        style={{ display: 'none' }} // Hidden by default, shown on desktop via CSS
      >
        Contact
      </a>
      
      {/* Mobile Email Icon */}
      <a 
        href="mailto:hello@insidersevents.com"
        className="mobile-email-icon"
        style={{ 
          display: 'none', // Hidden by default, shown on mobile via CSS
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          color: '#313131',
          transition: 'opacity 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>

      {/* Luxury Slide Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: isMenuOpen ? '0' : '-400px',
        width: '400px',
        height: '100vh',
        background: '#F6F4F0',
        zIndex: 9999,
        padding: '40px 30px',
        borderRight: '1px solid rgba(49, 49, 49, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}>
          {/* Menu Header with Logo */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '40px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(49, 49, 49, 0.1)'
          }}>
            <img src="/images/logo.svg" alt="Insider Events" style={{ height: '40px' }} />
            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(49, 49, 49, 0.1)'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#313131" strokeWidth="1">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav style={{ flex: 1 }}>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Corporate Events & Incentives', href: '/corporate-events' },
                { name: 'Crafted Experiences', href: '/crafted-experiences' },
                { name: 'Concierge', href: '/concierge' },
                { name: 'Contact', href: '/contact' }
              ].map((item, index) => {
                const isActive = item.name === 'Home';
                const baseColor = isActive ? '#313131' : '#999999';
                
                return (
                  <li key={index}>
                    <a 
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        display: 'block',
                        fontSize: '24px',
                        color: baseColor,
                        textDecoration: 'none',
                        padding: '20px 0',
                        fontWeight: '400',
                        letterSpacing: '0.5px',
                        borderBottom: '1px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.color = '#313131';
                        e.target.style.borderBottomColor = 'rgba(49, 49, 49, 0.2)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.color = baseColor;
                        e.target.style.borderBottomColor = 'transparent';
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div style={{ 
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '1px solid rgba(49, 49, 49, 0.1)',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: '16px', 
              color: '#666666', 
              margin: 0,
              fontWeight: '300',
              letterSpacing: '0.5px'
            }}>
              hello@insidersevents.com
            </p>
          </div>
        </div>

      {/* Overlay */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 9998,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      />
      </div>
      </div>
    </>
  );
};

export default SimpleHeader;
