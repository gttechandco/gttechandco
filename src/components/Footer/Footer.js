// src/components/Header/Header.js
import React from 'react';
import './Footer.css';
import logo from "../../assets/images/site-logo-white.png";

const getYear = () => {
    let dateOfTheDay = new Date();
    let year = dateOfTheDay.getFullYear();

    return year;
}

const Footer = () => (
    <footer className='footer-section pt-4'>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Entreprise</h5>
          <img src={logo} width="100px" alt="Logo" className="mb-2" />
          <p>GT TECH & Co</p>
          <p>+237 698 60 31 78</p>
          <p>jakim2621@gmail.com</p>
        </div>
        <div className="col-md-4">
          <h5>Liens</h5>
          <ul className="list-unstyled">
            <li><a href="/home">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Suivez-nous</h5>
          <ul className="list-unstyled">
            <li><a href="https://facebook.com/profile.php?id=61553743893716">Facebook</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
            <li><a href="https://linkedin.com/">LinkedIn</a></li>
            <li><a href="https://instagram.com/">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center">
          <p>&copy; {getYear()} GT TECH & Co. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
