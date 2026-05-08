import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV_LINKS = [
  { label: '🏠 Dashboard',   path: '/dashboard'   },
  { label: '🧹 Cleaning',    path: '/cleaning'    },
  { label: '🔧 Maintenance', path: '/maintenance' },
]

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)
  const handleNav = (path) => {
    navigate(path)
    setMenuOpen(false)
  }
  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <button className="navbar-brand" onClick={() => handleNav('/')}>
          <span className="brand-icon">🛏️</span>
          <span className="brand-name">DormCare</span>
        </button>

        <ul className="navbar-links">
          {NAV_LINKS.map(link => (
            <li key={link.path}>
              <button
                className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                onClick={() => handleNav(link.path)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(link => (
            <button
              key={link.path}
              className={`mobile-link ${isActive(link.path) ? 'mobile-link-active' : ''}`}
              onClick={() => handleNav(link.path)}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
