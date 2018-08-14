import React from 'react'

const Header = ({ logo, title }) => (
  <header className="header">
    <div className="header-logo">{logo}</div>
    {title}
  </header>
)

export default Header