// src/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Book Site</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
