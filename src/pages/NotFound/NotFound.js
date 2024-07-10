import React from "react";
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="row notfound">
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