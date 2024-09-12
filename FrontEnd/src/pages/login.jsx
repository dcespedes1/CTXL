import React, { useState } from 'react';
import logoFacebook from "../img/OIP.jpg";
import logoGoogle from "../img/google_logo-google_icongoogle-512.webp"

function Registro() {
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registro con:', { nombres, correo, direccion, contraseña, confirmarContraseña, aceptoTerminos });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-2xl bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-white mb-2" htmlFor="nombres">
                Nombres
              </label>
              <input
                type="text"
                id="nombres"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="col-span-2 md:col-span-1">
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

            <div className="col-span-2 md:col-span-1">
              <label className="block text-white mb-2" htmlFor="direccion">
                Dirección
              </label>
              <input
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="col-span-2 md:col-span-1">
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
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="confirmar-contraseña">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmar-contraseña"
              value={confirmarContraseña}
              onChange={(e) => setConfirmarContraseña(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="acepto-terminos"
              checked={aceptoTerminos}
              onChange={(e) => setAceptoTerminos(e.target.checked)}
              className="mr-2"
              required
            />
            <label htmlFor="acepto-terminos" className="text-white">
              Acepto los términos y condiciones
            </label>
          </div>

          <div className="mb-6 flex justify-between">
            <button type="button" className="flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-md mx-1">
              <img src={logoGoogle} alt="Google" className="w-6 h-6" />
            </button>
            <button type="button" className="flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-md mx-1">
              <img src={logoFacebook} alt="Facebook" className="w-6 h-6" />
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
