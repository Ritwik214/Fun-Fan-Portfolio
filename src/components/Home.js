import React, { useState, useEffect } from 'react';
import video from './Layout/video/home-video.mp4';
import { Link } from 'react-router-dom';
import './Home.css';
import './styles.css';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        window.location.href = '/projects';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page home">
      <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'fixed', zIndex: -1 }}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className={`card ${isHovered ? 'active' : ''}`}
        id="aboutMeCard"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 style={{ fontSize: isHovered ? '0.8em' : '0.8em' }}>
          {isHovered ? 'About Me' : 'Hi ! There I Myself Ritwik Kumar Gupta'}
        </h2>
        {isHovered ? (
          <>
            <h3>Heading: About Me</h3>
            <p>
              Final year B.Tech student in Electronics and Communication Engineering, specializing in front-end and full-stack web development.
              Proficient in Java, Python, and data structures & algorithms. Passionate about creating user-friendly interfaces and eager to apply my creativity in building intuitive user interfaces.
            </p>
          </>
        ) : null}
      </div>

      <Link to="/projects">
        <div className="scroll-down-button">
          Explore More
        </div>
      </Link>
    </div>
  );
};

export default Home;
