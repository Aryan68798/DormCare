import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Landing     from './Pages/Landing.jsx'
import Login       from './Pages/Login.jsx'
import Dashboard   from './Pages/Dashboard.jsx'
import Cleaning    from './Pages/Cleaning.jsx'
import Maintenance from './Pages/Maintenance.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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