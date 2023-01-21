import React from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css';

const Nav = () => (
  <header className="nav-bar">
    <h1 className="Heading"> Math Magicians </h1>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/Calculator">Calculator</Link>
      <Link to="/Quotes">Quote</Link>
    </nav>
  </header>
);

export default Nav;
