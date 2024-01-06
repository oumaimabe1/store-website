// Star.js
import React from 'react';
import PropTypes from 'prop-types';
import './star.css' ;
const Star = ({ selected, onClick }) => (
  <span onClick={onClick} style={{ cursor: 'pointer' }}>
    {selected ? '★★★★★' : '☆☆☆☆☆'}
  </span>
);

Star.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Star;