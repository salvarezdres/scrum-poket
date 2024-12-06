import React, { useState } from 'react';
import FibonacciCard from './FibonacciCard';

const Room = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [participants, setParticipants] = useState([
    { name: 'Usuario 1', vote: null },
    { name: 'Usuario 2', vote: null },
    { name: 'Usuario 3', vote: null },
  ]); // Ejemplo inicial

  const fibonacciNumbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

  const handleVote = (number) => {
    setSelectedCard(number);

    // Simula actualizar el voto del usuario actual (ej. Usuario 1)
    setParticipants((prev) =>
      prev.map((p, index) =>
        index === 0 ? { ...p, vote: number } : p // Cambia Usuario 1 a otro índice según el usuario
      )
    );
  };

  return (
    <div>
      <h1>Sala de Votación</h1>
      <h2>Participantes</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
            {participant.name}: {participant.vote || 'Sin voto'}
          </li>
        ))}
      </ul>
      <h2>Selecciona tu voto</h2>
      <div>
        {fibonacciNumbers.map((num) => (
          <FibonacciCard
            key={num}
            number={num}
            isSelected={selectedCard === num}
            onClick={() => handleVote(num)}
          />
        ))}
      </div>
      {selectedCard && <p>Tu selección: {selectedCard}</p>}
    </div>
  );
};

export default Room;