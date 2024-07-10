import React from "react";
import "./MinimalHero.css";

const MinimalHero = ({topicTitle, pageContent, pageDescription}) => {

    return (
        <section className="minimal-hero">
            <div className="minimal-hero-content">
                <h2>Vous êtes sur /<span style={{fontSize: "50px", textDecoration: "underline"}}>{topicTitle}</span></h2>
                <p>{pageDescription}</p>
                <div className="minimal-hero-buttons">
                    <a href={"#"+pageContent} className='btn btn-primary'>Poursuivre la navigation</a>
                </div>
            </div>
        </section>
    );
};

export default MinimalHero;