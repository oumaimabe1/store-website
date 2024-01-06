// Rating.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Star from './star';

const Rating = ({ totalStars }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (index) => {
    setSelectedStars(index + 1);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  totalStars: PropTypes.number.isRequired,
};

export default Rating ;
