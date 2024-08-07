import React from "react";
import MinimalHero from "../../components/MinimalistHero/MinimalHero";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="contacts">
            <Helmet>
                <title>Gentle Tech et Compagnie: Site officiel - Contactez nous via nos différents canaux</title>
            </Helmet>
            <MinimalHero topicTitle="Contact" pageContent="contacts" pageDescription="Découvrez nos différents réseaux sociaux, liens, et remplissez divers formulaires de contact selon vos besoins"/>
        </div>
    );
};

export default Contact;