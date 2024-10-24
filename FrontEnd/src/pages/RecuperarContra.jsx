import React from 'react';

const PasswordResetForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
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
          <div className="flex flex-col md:col-span-2">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Restablecer Contraseña
            </button>
          </div>
        </form>

        {/* Enlace a iniciar sesión */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            ¿Recuerdas tu contraseña?{' '}
            <a href="/login" className="text-purple-600 hover:underline">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetForm;
