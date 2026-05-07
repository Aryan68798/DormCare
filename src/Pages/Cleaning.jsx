// Cleaning.jsx – Room Cleaning booking page at route "/cleaning"
// Users fill a form (name, room, date) to book a cleaning session.
// On submit, the request is added to a list shown on this same page.
import React, { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import './Cleaning.css'

function Cleaning() {
  // ── Form field states ─────────────────────────────
  // Each useState stores the current value of one input field
  const [name, setName] = useState('')   // typed name
  const [room, setRoom] = useState('')   // typed room number
  const [date, setDate] = useState('')   // selected date

  // ── Submission state ──────────────────────────────
  // successMsg stores a message to show after successful booking
  // empty string = no message shown
  const [successMsg, setSuccessMsg] = useState('')

  // requests is an array of booked cleaning objects
  // Each object has: { name, room, date }
  // When the user submits the form, we add a new object here
  const [requests, setRequests] = useState([])

  // ── Error state ───────────────────────────────────
  // If any field is empty, we show an error instead of submitting
  const [error, setError] = useState('')

  // handleBook is called when "Book Cleaning" button is clicked
  const handleBook = () => {
    // Validation: all three fields must be filled
    if (!name.trim() || !room.trim() || !date) {
      setError('⚠️ Please fill in all fields before booking.')
      setSuccessMsg('')
      return
    }

    // Create a new request object from the current state values
    const newRequest = { name, room, date }

    // Add the new request to the requests array
    // We use spread [...] to keep all existing items and add the new one
    setRequests(prev => [...prev, newRequest])

    // Show success message
    setSuccessMsg(`✅ Cleaning booked for Room ${room} on ${date}!`)
    setError('')

    // Reset all form fields back to empty
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

        {/* ── Booking Form Card ──────────────────────── */}
        <Card className="animate-in">
          <h2 style={{ marginBottom: '24px' }}>Book a Cleaning Session</h2>

          {/* Name field */}
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

          {/* Room number field */}
          <div className="form-group">
            <label htmlFor="clean-room">Room Number</label>
            <input
              id="clean-room"
              type="text"
              placeholder="e.g. B-204"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>

          {/* Date picker */}
          <div className="form-group">
            <label htmlFor="clean-date">Preferred Date</label>
            <input
              id="clean-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Error message – rendered only when error state has text */}
          {error && (
            <div className="alert" style={{ background: '#e75545', color: '#e4e2e2', marginBottom: '16px', border: "2px solid white" }}>
              {error}
            </div>
          )}

          {/* Success message – rendered only when successMsg state has text */}
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

        {/* ── Booked Requests List ───────────────────── */}
        <div className="requests-panel">
          <h2 style={{ marginBottom: '16px' }}>
            Your Bookings
            {requests.length > 0 && (
              <span className="count-badge">{requests.length}</span>
            )}
          </h2>

          {/* Show empty state if no requests yet */}
          {requests.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🗓️</div>
              <p>No cleaning sessions booked yet.</p>
              <p style={{ fontSize: '.8rem', marginTop: '4px' }}>Fill the form to get started.</p>
            </div>
          ) : (
            // Render each request as a card
            // NOTE: .map() is used here to display the dynamic list
            // The assignment says "no map for static content" – this is dynamic state-driven content
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
