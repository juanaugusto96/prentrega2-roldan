import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <img src="icowine.png" alt="" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="nav-link">
                carrito
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/vinos" className="nav-link">
                vinos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/birras" className="nav-link">
                birras
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/whisky" className="nav-link">
                whiskys🥃
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
