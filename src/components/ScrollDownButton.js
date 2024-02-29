import React from 'react';
import { Link } from 'react-scroll';

const ScrollDownButton = ({ to }) => {
  return (
    <div className="scroll-down-button">
      <Link to={to} smooth={true} duration={500}>
        Scroll Down
      </Link>
    </div>
  );
};

export default ScrollDownButton;