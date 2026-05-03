// main.jsx – The entry point of the React app
// React and ReactDOM are imported to render the app into the HTML
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot finds the <div id="root"> in index.html
// and renders our entire App inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
