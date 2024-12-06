import React, { useState } from 'react';
import FibonacciCard from './FibonacciCard';

const Room = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const fibonacciNumbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

  return (
    <div>
      <h1>Sala de Votación</h1>
      <div>
        {fibonacciNumbers.map((num) => (
          <FibonacciCard
            key={num}
            number={num}
            isSelected={selectedCard === num}
            onClick={() => setSelectedCard(num)}
          />
        ))}
      </div>
      {selectedCard && <p>Tu selección: {selectedCard}</p>}
    </div>
  );
};

export default Room;