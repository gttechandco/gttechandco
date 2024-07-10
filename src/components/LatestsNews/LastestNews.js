// src/components/LatestNews/LatestNews.js
import React from 'react';
import './LatestNews.css';
import article1Img from '../../assets/images/article1.jpg'; // Remplacez par le chemin réel de l'image
import article2Img from '../../assets/images/article2.jpg'; // Remplacez par le chemin réel de l'image
import { Link } from 'react-router-dom';

const LatestNews = () => (
  <section className="latest-news py-5">
    <div className="container">
      <div className="text-center mb-5">
        <h2>Dernières Nouvelles</h2>
        <p>Restez constamment à jour pour ne rien rater des nos nouvelles offres et possibilités.</p>
        <Link to='/news' className="btn btn-dark">Lire plus</Link>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={article1Img} className="card-img" alt="Article 1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Article 1</h5>
                  <p className="card-text">Profitez de notre promotion pour obtenir un site web simple ou statique en seulement 2 jours ! Obtenez un design personnalisé, une navigation fluide et une optimisation SEO. Contactez-nous maintenant pour transformer vos idées en réalité numérique rapidement et à moindre coût.
                  </p>
                  <p className="card-text"><small className="text-muted">Julien Akim</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={article2Img} className="card-img" alt="Article 2" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Article 2</h5>
                  <p className="card-text">Nous développons votre application web dynamique en seulement 14 jours grâce à notre promotion exclusive ! Ces applications web peuvent assurer votre présence en ligne ou gérer votre petite entreprise directement depuis votre téléphone ou ordinateur, sans avoir besoin de vous déplacer. Ne manquez pas cette opportunité de booster votre efficacité et présence en ligne rapidement et efficacement.</p>
                  <p className="card-text"><small className="text-muted">Julien Akim</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LatestNews;
