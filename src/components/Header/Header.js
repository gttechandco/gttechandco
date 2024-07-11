// src/components/Header/Header.js
import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../assets/images/site-logo-white.png"
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
      <Link className="navbar-brand" to="/gttechandco">
        <img src={logo} alt="Logo" height="50" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco/about">A propos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco/projects">Projets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco/news">Nouvelles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco/contact">Contacts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco/faq">F A Q</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gttechandco/team_members">Equipe</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Rechercher sur le site"
            aria-label="Search"
          />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">🔍</button>
        </form>
      </div>
      </div>
    </nav>
  );
};

export default Header;
