import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import './Dashboard.css'

const Dashboard = () => {
  const navigate = useNavigate()
  const [timeGreeting, setTimeGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setTimeGreeting('Good Morning')
    else if (hour < 17) setTimeGreeting('Good Afternoon')
    else setTimeGreeting('Good Evening')
  }, [])

  return (
    <>
      <div className="liquid-header animate-in">
        <div className="container">
          <p className="page-subtitle">{timeGreeting} 👋 – Welcome back to your dashboard</p>
          <h1 className="page-title">Dashboard</h1>
        </div>
      </div>
      <div className="page">

      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-icon">🧹</span>
          <div>
            <p className="stat-value">2</p>
            <p className="stat-label">Cleaning Requests</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🔧</span>
          <div>
            <p className="stat-value">3</p>
            <p className="stat-label">Maintenance</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">✅</span>
          <div>
            <p className="stat-value">4</p>
            <p className="stat-label">Resolved</p>
          </div>
        </div>
      </div>


      <h2 style={{ marginBottom: '20px', marginTop: '8px' }}>Quick Access</h2>

      <div className="module-grid">

        <Card className="module-card" style={{ '--accent': '#6750A4' }}>
          <div className="module-card-icon">🧹</div>
          <h3 className="module-card-title">Room Cleaning</h3>
          <p className="module-card-desc">
            Book a housekeeping session for your room. Choose a date and confirm.
          </p>
          <Button
            label="Book Cleaning"
            variant="primary"
            onClick={() => navigate('/cleaning')}
          />
        </Card>


        <Card className="module-card">
          <div className="module-card-icon">🔧</div>
          <h3 className="module-card-title">Maintenance</h3>
          <p className="module-card-desc">
            Report any issue – electrical, plumbing, furniture, or WiFi.
          </p>
          <Button
            label="Report Issue"
            variant="primary"
            onClick={() => navigate('/maintenance')}
          />
        </Card>

      </div>

      <h2 style={{ marginTop: '40px', marginBottom: '16px' }}>Recent Activity</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

        <div className="request-item">
          <div className="request-item-info">
            <span className="request-item-label">🧹 Room Cleaning – B204</span>
            <span className="request-item-meta">Booked for Tomorrow · 10:00 AM</span>
          </div>
          <span className="badge badge-pending">Pending</span>
        </div>

        <div className="request-item">
          <div className="request-item-info">
            <span className="request-item-label">🔧 Maintenance – AC not working</span>
            <span className="request-item-meta">Submitted 2 days ago</span>
          </div>
          <span className="badge badge-pending">Pending</span>
        </div>

      </div>
      </div>
    </>
  )
}

export default Dashboard
