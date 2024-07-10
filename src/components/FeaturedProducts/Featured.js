// src/components/FeaturedProducts/FeaturedProducts.js
import React from 'react';
import './Featured.css';
import prod1 from "../../assets/images/website-design.jpg";
import prod2 from "../../assets/images/mobile-app.jpg";
import prod3 from "../../assets/images/computer-software.jpg";
import { Link } from 'react-router-dom';

const FeaturedProducts = () => (
  <section className="featured-products">
    <div className="products-header">
      <h2>Nos Offres Exclusives </h2>
      <p>Découvrez nos toutes dernières promotions</p>
      <Link to='/services' className='btn btn-dark'>Voir toutes les offres</Link>
    </div>
    <div className="products-grid">
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <span className="badge bg-success">Promotion exclusive valable jusqu'au 11 Juillet 2024</span>
            <img src={prod1} alt="Offre 1" className="card-img-top" />
            <h3 className="card-title">Sites Web Simples</h3>
            <p className="card-text">Avant à <s>45 000 </s> Fcfa</p>
            <p className="card-text">Actuellement à <span className='badge bg-danger'>25 000 Fcfa</span></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <span className="badge bg-success">Promotion exclusive valable jusqu'au 11 Juillet 2024</span>
            <img src={prod2} alt="Offre 2" className="card-img-top" />
            <h3 className="card-title">Applications Web</h3>
            <p className="card-text">Avant à <s>110 000 </s> Fcfa</p>
            <p className="card-text">Actuellement à <span className='badge bg-danger'>80 000 Fcfa</span></p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <span className="badge bg-success">Promotion exclusive valable jusqu'au 11 Juillet 2024</span>
            <img src={prod3} alt="Offre 3" className="card-img-top" />
            <h3 className="card-title">Logiciels d'entreprises</h3>
            <p className="card-text">Avant à <s>140 000</s> Fcfa</p>
            <p className="card-text">Actuellement à <span className='badge bg-danger'>100 000 Fcfa</span></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default FeaturedProducts;
