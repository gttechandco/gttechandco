import React from 'react';
import './CarouselComponent.css';
import projet1 from "../../assets/images/agencesdevoyagesapp2.png";
import projet2 from "../../assets/images/autoecoleapp.png";
import projet3 from "../../assets/images/gsm-software.PNG";
//import projet4 from "../../assets/images/agencesdevoyagesapp2.png";
//import projet5 from "../../assets/images/agencesdevoyagesapp2.png";

const CarouselComponent = ({joinedId}) => (
    <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
        <h2>Nos Travaux</h2>
        <p>Une sélection de quelques projets que nous avons déjà éffectués</p>
        <a href={'/projects'+joinedId} className='btn btn-dark'>Voir tous les projets</a>
      
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="overlay"></div>
        <img src={projet1} className="d-block w-100" alt="Project 1" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Plateforme de vente de tickets de voyages et de gestion d'agences de voyages</h5>
          <p>Il s'agit d'une plateforme en ligne de vente de tickets de voyages dans un premier temps, mais également de gestion des compagnies de voyages et de toutes leurs agences.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="overlay"></div>
        <img src={projet2} className="d-block w-100" alt="Project 2" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Application de gestion d'une Auto Ecole</h5>
          <p>Cette application permet à un propriétaire d'auto école de gérer son programme, ses cours, ses employés et ses apprenants.</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="overlay"></div>
        <img src={projet3} className="d-block w-100" alt="Project 3" />
        <div className="carousel-caption d-none d-md-block">
          <h5> G S M : Global Store Management</h5>
          <p>Il s'agit d'un logiciel d'entreprise pour la gestion d'une petite boutique. Autant les ventes que les niveaux de stocks, tout est pris en compte pour avoir un suivi particulier et des statistiques globales de l'état de sa boutique.</p>
        </div>
      </div>
      {/*<div className="carousel-item">
      <div className="overlay"></div>
        <img src="path/to/image4.jpg" className="d-block w-100" alt="Project 4" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Projet 4</h5>
          <p>Description brève du projet 4.</p>
        </div>
      </div>
      <div className="carousel-item">
      <div className="overlay"></div>
        <img src="path/to/image5.jpg" className="d-block w-100" alt="Project 5" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Projet 5</h5>
          <p>Description brève du projet 5.</p>
        </div>
      </div>*/}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default CarouselComponent;
