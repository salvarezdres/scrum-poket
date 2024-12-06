import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  return (
    <div>
      <h1>Hola, {name}</h1>
      <button onClick={() => navigate('/create-room')}>Crear Sala</button>
      <button onClick={() => navigate('/join-room')}>Unirse a Sala</button>
    </div>
  );
};

export default Menu;