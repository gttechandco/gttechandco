import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";

const News = () => {
    return (
        <div className="news">
            <MinimalHero topicTitle="Nouvelles" pageContent="news" pageDescription="Restez toujours à l'écoute des dernières informations et nouvelles concernant nos projets, nos activités, et nos meilleures offres"/>
        </div>
    );
};

export default News;