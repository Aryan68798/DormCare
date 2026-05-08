import React, { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import './Cleaning.css'

const Cleaning = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [date, setDate] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [requests, setRequests] = useState([])
  const [error, setError] = useState('')
  const handleBook = () => {
    if (!name.trim() || !room.trim() || !date) {
      setError('⚠️ Please fill in all fields before booking.')
      setSuccessMsg('')
      return
    }
    const newRequest = { name, room, date }
    setRequests(prev => [...prev, newRequest])
    setSuccessMsg(`✅ Cleaning booked for Room ${room} on ${date}!`)
    setError('')
    setName('')
    setRoom('')
    setDate('')
  }

  return (
    <>
      <div className="liquid-header animate-in">
        <div className="container">
          <h1 className="page-title">Room Cleaning</h1>
          <p className="page-subtitle">Book a housekeeping session for your room.</p>
        </div>
      </div>
      <div className="page">

      <div className="cleaning-layout">

        <Card className="animate-in">
          <h2 style={{ marginBottom: '24px' }}>Book a Cleaning Session</h2>
          <div className="form-group">
            <label htmlFor="clean-name">Your Name</label>
            <input
              id="clean-name"
              type="text"
              placeholder="e.g. Aryan Rai"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="clean-room">Room Number</label>
            <input
              id="clean-room"
              type="number"
              placeholder="e.g. B-204"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="clean-date">Preferred Date</label>
            <input
              id="clean-date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {error && (
            <div className="alert" style={{ background: '#e75545', color: '#e4e2e2', marginBottom: '16px', border: "2px solid white" }}>
              {error}
            </div>
          )}

          {successMsg && (
            <div className="alert alert-success">{successMsg}</div>
          )}

          <div style={{ marginTop: '20px' }}>
            <Button
              label="Book Cleaning"
              icon="🧹"
              variant="primary"
              onClick={handleBook}
            />
          </div>
        </Card>

        <div className="requests-panel">
          <h2 style={{ marginBottom: '16px' }}>
            Your Bookings
            {requests.length > 0 && (
              <span className="count-badge">{requests.length}</span>
            )}
          </h2>

          {requests.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🗓️</div>
              <p>No cleaning sessions booked yet.</p>
              <p style={{ fontSize: '.8rem', marginTop: '4px' }}>Fill the form to get started.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {requests.map((req, index) => (
                <div className="request-item" key={index}>
                  <div className="request-item-info">
                    <span className="request-item-label">🧹 Room {req.room}</span>
                    <span className="request-item-meta">👤 {req.name} · 📅 {req.date}</span>
                  </div>
                  <span className="badge badge-pending">Pending</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
      </div>
    </>
  )
}

export default Cleaning
