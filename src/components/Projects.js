// Projects.js
import React from 'react';
import Project from './Layout/gifs/Project.gif';
import { Link } from 'react-router-dom';
import './styles.css'; // Import your CSS file for styling

const Projects = () => {
  return (
    <div id='projects' className="page" style={{ backgroundImage: `url(${Project})`, backgroundSize: 'cover' }}>
      <h1>Projects Page</h1>
      <Link to="/skills">
        <div className="scroll-down-button">
        Explore More
        </div>
      </Link>
    </div>
  );
};

export default Projects;
