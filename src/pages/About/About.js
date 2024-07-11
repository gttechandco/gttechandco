import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="about">
            <Helmet>
                <title>GT TECH & Co - A propos</title>
            </Helmet>
            <MinimalHero topicTitle="A Propos" pageContent="about_us" pageDescription="Découvrez notre vision, nos objectifs, notre politique et faites vous une idée par vous même du style de services que nous rendons"/>
            <section className="about_us" id="about_us">
                <div className="container">

                    <div className="we_are">
                        <h2>Qui sommes nous ?</h2>
                    </div>
                    <div className="our_vision">
                        <h2>Notre Vision</h2>
                    </div>

                    <div className="our_objectives">
                        <h2>Nos Objectifs</h2>
                    </div>

                    <div className="our_politic">
                        <h2>Notre Politique</h2>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;