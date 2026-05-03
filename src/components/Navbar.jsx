// Navbar.jsx – The navigation bar shown at the top of every page
// useNavigate → lets us go to another page programmatically
// useLocation  → tells us which URL we are currently on (for active link styling)
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

// List of navigation links (label + path)
// Having them in one array makes it easy to add/remove items later
const NAV_LINKS = [
  { label: '🏠 Dashboard',   path: '/dashboard'   },
  { label: '🧹 Cleaning',    path: '/cleaning'    },
  { label: '🔧 Maintenance', path: '/maintenance' },
]

function Navbar() {
  const navigate = useNavigate()    // function to navigate to a URL
  const location = useLocation()    // current URL object

  // useState stores whether the mobile hamburger menu is open or closed
  // false = closed, true = open
  const [menuOpen, setMenuOpen] = useState(false)

  // Toggles the mobile menu open/close
  const toggleMenu = () => setMenuOpen(prev => !prev)

  // Navigate to a link and close the mobile menu
  const handleNav = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  // Checks if a nav link matches the current page URL
  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* Brand logo – clicking it goes to the landing page */}
        <button className="navbar-brand" onClick={() => handleNav('/')}>
          <span className="brand-icon">🛏️</span>
          <span className="brand-name">DormCare</span>
        </button>

        {/* Desktop navigation links */}
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

        {/* Hamburger button – only visible on mobile screens */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu – shown when menuOpen is true */}
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
