import React, { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import './Maintenance.css'

function Maintenance() {
  const [issueType, setIssueType] = useState('')
  const [description, setDescription] = useState('')
  const [roomNo, setRoomNo] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [error, setError] = useState('')
  const [requests, setRequests] = useState([])
  const handleSubmit = () => {
    if (!issueType || !roomNo.trim() || !description.trim()) {
      setError('⚠️ Please fill in all fields before submitting.')
      setSuccessMsg('')
      return
    }

    const newRequest = {
      issueType,
      description,
      roomNo,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
    setRequests(prev => [newRequest, ...prev])

    setSuccessMsg(`✅ Request submitted for Room ${roomNo}. We'll fix it soon!`)
    setError('')

    setIssueType('')
    setDescription('')
    setRoomNo('')
  }

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

        <Card className="animate-in">
          <h2 style={{ marginBottom: '24px' }}>Submit a Request</h2>

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

          <div className="form-group">
            <label htmlFor="maint-issue">Issue Type</label>
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

          <div className="form-group">
            <label htmlFor="maint-desc">Describe the Issue</label>
            <textarea
              id="maint-desc"
              placeholder="e.g. The ceiling fan in my room stopped working..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {error && (
            <div className="alert" style={{ background: '#FDECEA', color: '#B3261E', marginBottom: '16px' }}>
              {error}
            </div>
          )}

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

        <div className="maint-requests-panel">
          <h2 style={{ marginBottom: '16px' }}>
            Active Requests
            {requests.length > 0 && (
              <span className="count-badge">{requests.length}</span>
            )}
          </h2>

          {requests.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">🔧</div>
              <p>No maintenance requests yet.</p>
              <p style={{ fontSize: '.8rem', marginTop: '4px' }}>Submit one using the form.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
