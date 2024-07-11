import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";
import { Helmet } from "react-helmet-async";

const News = () => {
    return (
        <div className="news">
            <Helmet>
                <title>Gentle Tech et Compagnie: Site officiel - Espace nouvelles</title>
            </Helmet>
            <MinimalHero topicTitle="Nouvelles" pageContent="news" pageDescription="Restez toujours à l'écoute des dernières informations et nouvelles concernant nos projets, nos activités, et nos meilleures offres"/>
        </div>
    );
};

export default News;