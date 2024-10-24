import React from 'react';
import { Link } from 'react-router-dom';

const PasswordResetForm = ({ setModalVisible }) => {
  const closeModal = () => {
    setModalVisible(false); 
  };

  return (
    <div
      className="fixed inset-0 bg-slate bg-opacity-60 flex justify-center items-center"
      onClick={closeModal} 
    >
      <div
        className="bg-slate-400 p-8 rounded-lg shadow-lg max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
          Recuperar Contraseña
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ingresa tu correo"
              required
            />
          </div>

          {/* Nueva contraseña */}
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-semibold text-gray-700">
              Nueva Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Nueva contraseña"
              required
            />
          </div>

          {/* Confirmar contraseña */}
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="mb-2 font-semibold text-gray-700">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Confirma la contraseña"
              required
            />
          </div>

          {/* Botón enviar */}
          <div className="mx-auto text-center mt-6 flex  md:col-span-2">
                    <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-500 text-white font-semibold  rounded-md mr-2 hover:bg-gray-700 transition duration-300"
                    >
                    Cancelar
                    </button>
                    <button
              type="submit"
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
              >
              Restablecer Contraseña
            </button>
                    </div>
                    
        </form>

        {/* Enlace a iniciar sesión */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            ¿Recuerdas tu contraseña?{' '}
            <Link to="/singin" onClick={closeModal} className="ml-2 text-purple-500 hover:underline">Inicia sesión</Link>             
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;
