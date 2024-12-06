import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinRoom = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
    }
  };

  return (
    <div>
      <h1>Unirse a Sala</h1>
      <form onSubmit={handleJoinRoom}>
        <input
          type="text"
          placeholder="Código de la sala"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button type="submit">Unirse</button>
      </form>
    </div>
  );
};

export default JoinRoom;