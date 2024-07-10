// src/components/HeroSection/HeroSection.js
import React from 'react';
import './Hero.css';
import heroImage from "../../assets/images/software-developer.jpg";

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <h2>Bienvenue chez GT TECH & Co</h2>
      <p>Découvrez des solutions et offres légères et innovantes pour vous assurer une parfaite visibilité sur internet</p>
      <div className="hero-buttons">
        <a href="#contact_us" className='btn btn-primary'>Nous contacter</a>
        <a href='#projectCarousel' className='btn btn-dark'>Voir les projets</a>
      </div>
    </div>
    <div className="hero-image">
      <img src={heroImage} alt="Hero" />
    </div>
  </section>
);

export default HeroSection;
