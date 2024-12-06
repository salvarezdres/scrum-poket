import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const roomId = Math.random().toString(36).substr(2, 6);
    navigate(`/room/${roomId}`);
  };

  return (
    <div>
      <h1>Crear Sala</h1>
      <button onClick={handleCreateRoom}>Generar Sala</button>
    </div>
  );
};

export default CreateRoom;