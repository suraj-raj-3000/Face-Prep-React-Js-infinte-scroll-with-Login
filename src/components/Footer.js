import React from 'react'

export default function Footer() {
  return (
    <p className="text-center" style={ FooterStyle }>Designed & coded by <a to="https://github.com/suraj-raj-3000" target="_blank" rel="noopener noreferrer">SURAJ</a></p>

  )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}