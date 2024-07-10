import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SocialMedia.css';
import user2 from "../../assets/images/user2.png";
import publication from "../../assets/images/publication.png"

const SocialMedia = () => {
  return (
    <div className="social-media-section">
      <h2>Suivez nous sur les réseaux sociaux</h2>
      <p>Restez connectés pour avoir les mises à jours et les promotions en avant.</p>
      <a href='https://facebook.com/profile.php?id=61553743893716' className="btn btn-dark">Suivre maintenant</a>

      <div className="card mt-4">
        <div className="card-header d-flex align-items-center">
          <img
            src={user2} 
            width="50px"
            alt="User profile"
            className="rounded-circle"
          />
          <div className="ml-3">
            <h5 className="mb-0">GT Tech & Co</h5>
            <small>Promotion</small>
          </div>
        </div>
        <img
          src={publication}
          className="card-img-top"
          alt="Post"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
