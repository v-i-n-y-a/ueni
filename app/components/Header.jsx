import React from 'react'

const Header = ({ logo, title }) => (
  <header className="header">
    <div className="header-logo">{logo}</div>
    <h1>{title}</h1>
  </header>
)

export default Header
