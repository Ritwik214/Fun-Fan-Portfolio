import React from 'react';
import Certificate from './Layout/gifs/Certificate.gif';
import { Link } from 'react-router-dom';

const Certificates = () => {
  return (
    <div id='certificates' className="page" style={{ backgroundImage: `url(${Certificate})`, backgroundSize: 'cover' }}>
      <h1>Certificates Page</h1>
      <Link to="/contact">
        <div className="scroll-down-button">
        Explore More
        </div>
      </Link>
    </div>
  );
};

export default Certificates;
