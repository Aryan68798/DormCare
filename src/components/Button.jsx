import React from 'react'

function Button({ label, onClick, variant = 'primary', icon = null, disabled = false }) {
  const className = `btn btn-${variant}`

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={disabled ? { opacity: .55, cursor: 'not-allowed' } : {}}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  )
}
export default Button
