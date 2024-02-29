import React from 'react';
import Skill from './Layout/gifs/Skill.gif';
import { Link } from 'react-router-dom';
import './styles.css'; // Import your CSS file for styling

const Skills = () => {
  return (
    <div id='skills' className="page" style={{ backgroundImage: `url(${Skill})`, backgroundSize: 'cover' }}>
      <h1>Skills Page</h1>
      <Link to="/certificates">
        <div className="scroll-down-button">
        Explore More
        </div>
      </Link>
    </div>
  );
};

export default Skills;
