import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Location.css';
import Map from '../Map/Map';

const LocationSection = () => {
  return (
    <div>
      <section className="location-section text-center py-5">
        <div className="container">
          <h2>Sachez toujours où vous êtes</h2>
          <p>Ma position sur la carte</p>
          <div className="row">
            <div className="col-12">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationSection;
