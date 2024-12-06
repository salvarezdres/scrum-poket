import React from 'react';

const FibonacciCard = ({ number, isSelected, onClick }) => {
  return (
    <button
      style={{
        padding: '20px',
        margin: '5px',
        backgroundColor: isSelected ? 'green' : 'lightgray',
      }}
      onClick={onClick}
    >
      {number}
    </button>
  );
};

export default FibonacciCard;