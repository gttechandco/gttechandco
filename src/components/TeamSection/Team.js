// src/components/TeamSection/TeamSection.js
import React from 'react';
import './Team.css';
import {Link} from 'react-router-dom';
import teamLogo from "../../assets/images/team-logo.png";

const TeamSection = () => (
  <section className="team-section">
    <div className="team-container">
      <div className="team-content">
        <div className="team-image">
          <img src={teamLogo} alt="Team" />
        </div>
        <div className="team-details">
          <h2>Notre équipe de Développeurs</h2>
          <div className="team-tags">
            <span className="tag">Développement FullStack</span>
            <span className="tag">Pensée Créative</span>
          </div>
          <p>Faites la connaissance des personnes à la base de tout le travail effectué </p>
        </div>
      </div>
      <div className="team-action">
        <Link to="/gttechandco/team_members" className='btn btn-dark'>En savoir plus</Link>
      </div>
    </div>
  </section>
);

export default TeamSection;
