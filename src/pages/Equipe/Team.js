import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";
import { Helmet } from "react-helmet-async";

const Team = () => {
    return (
        <div className="team">
            <Helmet>
                <title>GT TECH & Co - Equipe</title>
            </Helmet>
            <MinimalHero topicTitle="Equipe" pageContent="team" pageDescription="Visitez vous même les profils des membres de nos différentes équipes et services et apprenez en plus sur eux"/>
        </div>
    );
};

export default Team;