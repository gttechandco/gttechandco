import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";
import { Helmet } from "react-helmet-async";

const Faq = () => {
    return (
        <div className="faq">
            <Helmet>
                <title>GT TECH & Co - Foire aux question</title>
            </Helmet>
            <MinimalHero topicTitle="F A Q" pageContent="faq" pageDescription="Découvrez les questions qui reviennent fréquemment et les réponses aux diverses préoccupations"/>
        </div>
    );
};

export default Faq;