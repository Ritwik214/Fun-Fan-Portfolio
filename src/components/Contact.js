import React from 'react';
import Contacts from './Layout/gifs/Contacts.gif';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div id='contact' className="page" style={{ backgroundImage: `url(${Contacts})`, backgroundSize: 'cover' }}>
      <h1>Contact Page</h1>
      <Link to="/resume">
        <div className="scroll-down-button">
        Explore More
        </div>
      </Link>
    </div>
  );
};

export default Contact;
