// Maintenance.jsx – Maintenance Request page at route "/maintenance"
// Users pick an issue type from a dropdown, describe the problem,
// and submit. The request is added to a live list below the form.
import React, { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import './Maintenance.css'

function Maintenance() {
  // ── Form field states ─────────────────────────────────
  // issueType stores the selected dropdown option
  // description stores the text typed in the textarea
  const [issueType, setIssueType] = useState('')
  const [description, setDescription] = useState('')
  const [roomNo, setRoomNo] = useState('')

  // ── Feedback states ───────────────────────────────────
  // successMsg shows a green confirmation after submit
  // error shows a red message if fields are empty
  const [successMsg, setSuccessMsg] = useState('')
  const [error, setError] = useState('')

  // ── Requests list state ───────────────────────────────
  // requests is an array of submitted maintenance objects
  // Each object: { issueType, description, roomNo, time }
  const [requests, setRequests] = useState([])

  // handleSubmit runs when the user clicks "Submit Request"
  const handleSubmit = () => {
    // Validate – all three fields must be filled
    if (!issueType || !roomNo.trim() || !description.trim()) {
      setError('⚠️ Please fill in all fields before submitting.')
      setSuccessMsg('')
      return
    }

    // Build the new request object
    const newRequest = {
      issueType,
      description,
      roomNo,
      // Record the current time so we can show "Submitted at HH:MM"
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    // Add it to the top of the list (newest first)
    setRequests(prev => [newRequest, ...prev])

    // Show confirmation and clear errors
    setSuccessMsg(`✅ Request submitted for Room ${roomNo}. We'll fix it soon!`)
    setError('')

    // Reset the form fields back to empty/default
    setIssueType('')
    setDescription('')
    setRoomNo('')
  }

  // issueIcon returns an emoji for each issue type
  // This is a helper function – keeps JSX clean
  const issueIcon = (type) => {
    if (type === 'Electrical') return '⚡'
    if (type === 'Plumbing') return '🚿'
    if (type === 'Furniture') return '🪑'
    if (type === 'WiFi / Internet') return '📶'
    if (type === 'AC / Heating') return '❄️'
    if (type === 'Other') return '🔧'
    return '🔧'
  }

  return (
    <>
      <div className="liquid-header animate-in">
        <div className="container">
          <h1 className="page-title">🔧 Maintenance</h1>
          <p className="page-subtitle">Report an issue and we'll get it resolved quickly.</p>
        </div>
      </div>
      <div className="page">

      <div className="maintenance-layout">

        {/* ── Submission Form ───────────────────────────── */}
        <Card className="animate-in">
          <h2 style={{ marginBottom: '24px' }}>Submit a Request</h2>

          {/* Room number field */}
          <div className="form-group">
            <label htmlFor="maint-room">Room Number</label>
            <input
              id="maint-room"
              type="text"
              placeholder="e.g. A-101"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            />
          </div>

          {/* Issue type dropdown */}
          <div className="form-group">
            <label htmlFor="maint-issue">Issue Type</label>
            {/* When the user selects an option, setIssueType updates the state */}
            <select
              id="maint-issue"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
            >
              <option value="">-- Select an issue --</option>
              <option value="Electrical">⚡ Electrical</option>
              <option value="Plumbing">🚿 Plumbing</option>
              <option value="Furniture">🪑 Furniture</option>
              <option value="WiFi / Internet">📶 WiFi / Internet</option>
              <option value="AC / Heating">❄️ AC / Heating</option>
              <option value="Other">🔧 Other</option>
            </select>
          </div>

          {/* Description textarea */}
          <div className="form-group">
            <label htmlFor="maint-desc">Describe the Issue</label>
            <textarea
              id="maint-desc"
              placeholder="e.g. The ceiling fan in my room stopped working..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Error message – shown only when error state is non-empty */}
          {error && (
            <div className="alert" style={{ background: '#FDECEA', color: '#B3261E', marginBottom: '16px' }}>
              {error}
            </div>
          )}

          {/* Success message – shown only when successMsg state is non-empty */}
          {successMsg && (
            <div className="alert alert-success">{successMsg}</div>
          )}

          <div style={{ marginTop: '20px' }}>
            <Button
              label="Submit Request"
              icon="📨"
              variant="primary"
              onClick={handleSubmit}
            />
          </div>
        </Card>

        {/* ── Submitted Requests Panel ──────────────────── */}
        <div className="maint-requests-panel">
          <h2 style={{ marginBottom: '16px' }}>
            Active Requests
            {requests.length > 0 && (
              <span className="count-badge">{requests.length}</span>
            )}
          </h2>

          {requests.length === 0 ? (
            // Empty state – shown before any request is submitted
            <div className="empty-state">
              <div className="empty-icon">🔧</div>
              <p>No maintenance requests yet.</p>
              <p style={{ fontSize: '.8rem', marginTop: '4px' }}>Submit one using the form.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Render each submitted request */}
              {requests.map((req, index) => (
                <div className="request-item maint-item" key={index}>
                  <div className="maint-icon-wrap">
                    {issueIcon(req.issueType)}
                  </div>
                  <div className="request-item-info">
                    <span className="request-item-label">
                      {req.issueType} – Room {req.roomNo}
                    </span>
                    <span className="request-item-meta">
                      "{req.description.length > 50
                        ? req.description.slice(0, 50) + '…'
                        : req.description}"
                    </span>
                    <span className="request-item-meta">⏱ Submitted at {req.time}</span>
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

export default Maintenance
