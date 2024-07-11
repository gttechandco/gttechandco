import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";
import { Helmet } from "react-helmet-async";

const Services = () => {
    return (
        <div className="services">
            <Helmet>
                <title>GT TECH & Co - Services</title>
            </Helmet>
            <MinimalHero topicTitle="Nos Services" pageContent="services_list" pageDescription="Faites vous une idée globale des différents services que nous rendons aux personnes désireuses"/>
        </div>
    );
};

export default Services;