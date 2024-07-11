import React from "react";
import "./NotFound.css";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
        <div className="row notfound">
            <Helmet>
                <title>Gentle Tech et Compagnie: Site officiel - Aucune correspondance</title>
            </Helmet>
            <h1>
                Oups ! 😓 
            </h1>
            <p>
                Aucune donnée ne correspond au chemin que vous empruntez !
            </p>
        </div>
    );
};

export default NotFound;