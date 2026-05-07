// Landing.jsx – The home/welcome page of DormCare
// This is the first page a user sees when they visit "/"
// useNavigate lets us redirect the user to /login when they click the CTA button
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  // useState stores a greeting message that changes after 2 seconds
  // This demonstrates useEffect + useState working together
  const [greeting, setGreeting] = useState('Welcome to DormCare ')


  // useEffect runs once after the component first renders (because [] dependency array)
  // After 2 seconds, it updates the greeting message
  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting('Your Hostel, Simplified ✨')
    }, 2000)

    // Cleanup: cancel the timer if the user leaves the page early
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="landing">

      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="hero">
        <div className="hero-content animate-in">
          <div className="trust-badge">🏆 #1 Smart Hostel Platform</div>
          {/* greeting state is displayed here – it changes after 2 seconds */}
          <p className="hero-eyebrow">{greeting}</p>

          <h1 className="hero-title">
            Smart Hostel<br />
            <span className="hero-title-accent">Management</span>
          </h1>

          <p className="hero-description">
            Book cleaning sessions and raise maintenance requests – all from one beautiful dashboard.
          </p>

          {/* CTA button – navigate to /login when clicked */}
          <div className="hero-actions">
            <Button
              label="Get Started"
              icon="🚀"
              variant="primary"
              onClick={() => navigate('/login')}
            />
            <Button
              label="View Dashboard"
              icon="🏠"
              variant="outline"
              onClick={() => navigate('/dashboard')}
            />
          </div>
        </div>

        {/* Illustration card */}
        <div className="hero-visual animate-in">
          <div className="hero-card">
            <div className="hero-card-row">
              <span className="hero-card-icon">🧹</span>
              <div>
                <p className="hero-card-title">Cleaning Booked</p>
                <p className="hero-card-sub">Room 204 · Today 3 PM</p>
              </div>
              <span className="badge badge-done">✓ Done</span>
            </div>

            <div className="divider" />
            <div className="hero-card-row">
              <span className="hero-card-icon">🔧</span>
              <div>
                <p className="hero-card-title">Maintenance</p>
                <p className="hero-card-sub">AC not working</p>
              </div>
              <span className="badge badge-pending">Pending</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo Ticker (The Void) ─────────────────────────── */}
      <section className="logo-ticker">
        <p className="ticker-label">TRUSTED BY TOP UNIVERSITIES</p>
        <div className="ticker-track">
          <span>Stanford</span>
          <span>MIT</span>
          <span>Oxford</span>
          <span>Harvard</span>
          <span>Cambridge</span>
          <span>Stanford</span>
          <span>MIT</span>
          <span>Oxford</span>
        </div>
      </section>

      {/* ── Feature Cards ─────────────────────────────────── */}
      <section className="features">
        <h2 className="features-title">Everything you need</h2>
        <p className="features-sub">Two powerful modules, one simple app.</p>

        <div className="features-grid">
          {/* Each feature card is hardcoded JSX – no arrays, no map() */}

          <div className="feature-card" onClick={() => navigate('/cleaning')}>
            <div className="feature-icon">🧹</div>
            <h3>Room Cleaning</h3>
            <p>Schedule and book housekeeping for your room in seconds.</p>
          </div>

          <div className="feature-card" onClick={() => navigate('/maintenance')}>
            <div className="feature-icon">🔧</div>
            <h3>Maintenance</h3>
            <p>Report issues with furniture, plumbing, or electricity easily.</p>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ─────────────────────────────────── */}
      <section className="landing-footer">
        <h2>Ready to get started?</h2>
        <p>Join thousands of students managing hostel life the smart way.</p>
        <Button
          label="Login to DormCare"
          icon="🔐"
          variant="primary"
          onClick={() => navigate('/login')}
        />
      </section>

    </div>
  )
}

export default Landing
