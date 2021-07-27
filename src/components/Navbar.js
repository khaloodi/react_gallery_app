import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/sunsets'>Sunsets</NavLink></li>
        <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar