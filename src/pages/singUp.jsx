import React, { useState } from 'react';
import logoFacebook from "../img/facebook-512.webp";
import logoGoogle from "../img/google_logo-google_icongoogle-512.webp"
import { Link } from 'react-router-dom';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login con:', { correo, contraseña });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="correo">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="contraseña">
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="recordar"
                className="mr-2"
              />
              <label htmlFor="recordar" className="text-white">
                Recordar sesión
              </label>
            </div>

            <a href="." className="text-purple-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="flex mb-6 justify-between">
            <button type="button" className="flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-md mx-1">
              <img src={logoGoogle} alt="Google" className="w-6 h-6 mr-2" />
            </button>
            <button type="button" className="flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-md mx-1">
              <img src={logoFacebook} alt="Facebook" className="w-6 h-6 mr-2" />
            </button>
          </div>
          <Link
          to="/app/home">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Iniciar Sesión
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
