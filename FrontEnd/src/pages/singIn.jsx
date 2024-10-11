import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mostrarContraseña, setMostrarContraseña] = useState(false); // Nuevo estado
  const navigate = useNavigate();

  const validateForm = () => {
    if (!correo || !contraseña) {
      setError('Por favor, completa todos los campos.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(correo)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return false;
    }

    if (contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      console.log('Enviando datos:', { correo, contraseña }); // Para depuración
      const response = await fetch('http://localhost:8000/api/administrador/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error del servidor:', errorData); // Para depuración
        throw new Error(errorData.message || 'Error en la autenticación');
      }

      const data = await response.json();
      console.log('Login exitoso:', data);
      navigate('/app/home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError(error.message || 'Correo o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Iniciar Sesión</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6 relative"> {/* Aquí añadimos "relative" */}
            <label className="block text-white mb-2" htmlFor="contraseña">Contraseña</label>
            <input
              type={mostrarContraseña ? 'text' : 'password'} // Cambiar tipo según estado
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {/* Icono para mostrar/ocultar contraseña */}
            <span
              onClick={() => setMostrarContraseña(!mostrarContraseña)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
            >
              {mostrarContraseña ? '🙈' : '👁️'} {/* Cambia el icono aquí */}
            </span>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="recordar"
                className="mr-2"
              />
              <label htmlFor="recordar" className="text-white">Recordar sesión</label>
            </div>
            <Link to="/forgot-password" className="text-purple-500 hover:underline">¿Olvidaste tu contraseña?</Link>
          </div>

          <button
            type="submit"
            className={`w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </button>

          <div className="mt-4 text-center text-white">
            <span>¿No tienes cuenta?</span>
            <Link to="/login" className="ml-2 text-purple-500 hover:underline">Regístrate</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
