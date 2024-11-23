import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Headers() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to={'/'}>Movies</Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/">Watch List</NavLink>
            </li>
            <li>
              <NavLink to="/watched">Watched</NavLink>
            </li>
            <li>
              <NavLink to="/add" className="btn">add</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Headers;
