import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import { Helmet } from "react-helmet-async";

const Project = () => {
    return (
        <div className="projects">
            <Helmet>
                <title>Gentle Tech et Compagnie: Site officiel - Espace projets</title>
            </Helmet>
            <MinimalHero pageContent="our_projects" topicTitle="Nos Projets" pageDescription="Découvrez une liste des différents travaux réalisés par nos soins afin de vous faire une bonne idée du niveau de nos développeurs" />
            <div className="project_content">
                <CarouselComponent joinedId="#our_projects"/>

                <div className="container" id="our_projects">
                    <h2>Tous les projets</h2>
                </div>
            </div>
        </div>
    );
};

export default Project;