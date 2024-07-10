import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-section" id='contact_us'>
      <h2>Nous contacter</h2>
      <p>Veuillez remplir le formulaire si vous avez besoin de nos services. Ou d'une collaboration</p>
      
      <form className="container">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Votre nom</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            <small className="form-text text-muted">Requis</small>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Votre email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            <small className="form-text text-muted">Requis</small>
          </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Type your message here" maxLength="500" required></textarea>
          <small className="form-text text-muted">Maximum de 500 charactères</small>
        </div>
        
        <div className="d-flex justify-content-between">
          <button type="reset" className="btn btn-outline-dark">Réinitialiser</button>
          <button type="submit" className="btn btn-dark">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
