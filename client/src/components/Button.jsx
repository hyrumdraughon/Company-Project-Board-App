import React from 'react';

const buttonStyle = {
  margin: '100px',
  width: '140px',
  height: '60px',
  backgroundColor: '#C4C4C4',
  borderRadius: '6.9px',
  border: '1px solid #4F4F4F',
  boxShadow: 'none'
};

const Button = ({ label, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;