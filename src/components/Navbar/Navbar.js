import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
    <img className="logo" src="http://www.mozambiquetours.co.za/wp-content/uploads/2018/01/master_0048-1.png"/>
    <ul className="nav-links">
    <li>
      <a href="/" className="nav-link"> Home </a>
    </li>
    <li>
      <a href="/" className="nav-link"> About </a>
    </li>
    <li>
      <a href="/" className="nav-link active"> Tours </a>
    </li>
    </ul>
    </nav> 
  )
}
