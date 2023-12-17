import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/Mangeky.png';

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
      <div className="navbar-brand">
  <Link to="/">
    <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top rounded-cirlce" />
    <span className="text-light ml-2">KingWizard's Portfolio</span>
  </Link>
</div>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => (
              <li key={link.key} className="nav-item">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}