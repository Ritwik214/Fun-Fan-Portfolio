import React from 'react';
import Resumes from './Layout/gifs/Resumes.gif';
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div id='resume' className="page" style={{ backgroundImage: `url(${Resumes})`, backgroundSize: 'cover' }}>
      <h1>Resume Page</h1>
      <Link to="/home">
        <div className="scroll-down-button">
        Explore More
        </div>
      </Link>
    </div>
  );
};

export default Resume;
