// src/components/Header/Header.js
import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../assets/images/site-logo-white.png"
import './Header.css';

const Header = () => (
    <header className="header">
    <div className="logo">
      <Link to="/gttechandco"><img src={logo} alt="Logo" /></Link>
    </div>
    <nav className="navigation">
      <ul>
        <li><Link to="/gttechandco">Accueil</Link></li>
        <li><Link to="/gttechandco/about">A propos</Link></li>
        <li><Link to="/gttechandco/projects">Projets</Link></li>
        <li><Link to="/gttechandco/services">Services</Link></li>
        <li><Link to="/gttechandco/news">Nouvelles</Link></li>
        <li><Link to="/gttechandco/contact">Contacts</Link></li>
        <li><Link to="/gttechandco/faq">F A Q</Link></li>
        <li><Link to="/gttechandco/team_members">Equipe</Link></li>
      </ul>
    </nav>
    <div className="search">
      <input type="text" className='form-control' placeholder="Rechercher sur le site" />
      <button type="submit">🔍</button>
    </div>
  </header>
);

export default Header;
