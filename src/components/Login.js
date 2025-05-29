import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Placeholder for Google authentication
    navigate('/menu', { state: { name: 'Usuario Google' } });
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleGoogleLogin}>Ingresar con Google</button>
    </div>
  );
};

export default Login;
