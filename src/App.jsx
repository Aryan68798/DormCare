// App.jsx – Root component that sets up routing for the entire app
// BrowserRouter  → enables URL-based navigation
// Routes + Route → maps each URL path to a page component
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import shared Navbar component (shown on every page)
import Navbar from './components/Navbar.jsx'

// Import all page components
import Landing     from './pages/Landing.jsx'
import Login       from './pages/Login.jsx'
import Dashboard   from './pages/Dashboard.jsx'
import Cleaning    from './pages/Cleaning.jsx'
import Maintenance from './pages/Maintenance.jsx'

// App component – the top-level wrapper for the whole application
function App() {
  return (
    // BrowserRouter wraps everything so React Router can work
    <BrowserRouter>
      {/* Navbar is rendered on every page */}
      <Navbar />

      {/* Routes renders only the page whose path matches the current URL */}
      <Routes>
        <Route path="/"            element={<Landing />}     />
        <Route path="/login"       element={<Login />}       />
        <Route path="/dashboard"   element={<Dashboard />}   />
        <Route path="/cleaning"    element={<Cleaning />}    />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
