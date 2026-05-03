// Button.jsx – A reusable button component
// Props let us customise the button from outside:
//   label    → the text shown on the button
//   onClick  → the function to call when clicked
//   variant  → "primary" | "outline" | "tonal" (controls colour style)
//   icon     → optional emoji/icon to display before label
//   disabled → greys out the button and prevents clicks
import React from 'react'

function Button({ label, onClick, variant = 'primary', icon = null, disabled = false }) {
  // Build the CSS class name based on the variant prop
  const className = `btn btn-${variant}`

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={disabled ? { opacity: .55, cursor: 'not-allowed' } : {}}
    >
      {/* Show icon only if one was passed in */}
      {icon && <span>{icon}</span>}
      {label}
    </button>
  )
}

export default Button
