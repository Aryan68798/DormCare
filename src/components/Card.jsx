// Card.jsx – A reusable container card component
// Props:
//   children  → any JSX content placed inside the card
//   className → extra CSS classes (optional) for custom overrides
//   style     → inline style object (optional)
import React from 'react'

function Card({ children, className = '', style = {} }) {
  return (
    // The "card" class is defined in index.css and gives us
    // the rounded, shadowed, Material You surface style
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  )
}

export default Card
