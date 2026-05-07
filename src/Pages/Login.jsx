// Login.jsx – The login page at route "/login"
// This page collects the user's name and room number, then navigates to the dashboard.
// No real authentication – this is UI simulation only.
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  // useState stores the text typed into each input field
  // username → the value of the name input field
  // roomNo   → the value of the room number input field
  const [username, setUsername] = useState('')
  const [roomNo, setRoomNo] = useState('')

  // useState stores a validation error message
  // empty string = no error; any text = show error to user
  const [error, setError] = useState('')

  // handleLogin is called when the user clicks "Enter DormCare"
  // It validates that both fields are filled, then navigates to /dashboard
  const handleLogin = () => {
    // Simple validation: both fields must have at least 1 character
    if (username.trim() === '' || roomNo.trim() === '') {
      setError('⚠️ Please enter both your name and room number.')
      return  // stop here if validation fails
    }
    // Clear error and navigate to dashboard
    setError('')
    navigate('/dashboard')
  }

  // Allow pressing Enter key in any field to trigger login
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="login-page">
      {/* Centred login card */}
      <Card className="login-card animate-in">

        {/* Header */}
        <div className="login-header">
          <span className="login-icon">🛏️</span>
          <h1 className="login-title">DormCare</h1>
          <p className="login-subtitle">Sign in to manage your hostel experience</p>
        </div>

        {/* Name input */}
        <div className="form-group">
          <label htmlFor="username">Your Name</label>
          <input
            id="username"
            type="text"
            placeholder="e.g. Aryan Rai"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Room number input */}
        <div className="form-group">
          <label htmlFor="roomNo">Room Number</label>
          <input
            id="roomNo"
            type="text"
            placeholder="e.g. B-204"
            value={roomNo}
            onChange={(e) => setRoomNo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Error message – only shown when error state is non-empty */}
        {error && (
          <div className="alert" style={{ background: '#FDECEA', color: '#B3261E', marginBottom: '4px' }}>
            {error}
          </div>
        )}

        {/* Login button */}
        <Button
          label="Enter DormCare"
          icon="🚀"
          variant="primary"
          onClick={handleLogin}
        />

        <p className="login-note">No account needed – this is a demo app.</p>
      </Card>
    </div>
  )
}

export default Login
