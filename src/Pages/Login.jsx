import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import './Login.css'

const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [roomNo, setRoomNo] = useState('')

  const [error, setError] = useState('')

  const handleLogin = () => {
    if (username.trim() === '' || roomNo.trim() === '') {
      setError('⚠️ Please enter both your name and room number.')
      return
    }

    setError('')
    navigate('/dashboard')
  }


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="login-page">

      <Card className="login-card animate-in">


        <div className="login-header">
          <span className="login-icon">🛏️</span>
          <h1 className="login-title">DormCare</h1>
          <p className="login-subtitle">Sign in to manage your hostel experience</p>
        </div>


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
