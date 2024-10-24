import React, { useState } from 'react';

function ConfiguracionGeneral() {
  const [language, setLanguage] = useState('es');
  const [timezone, setTimezone] = useState('America/Bogota');

  const handleSave = () => {
    // Aquí podrías agregar la lógica para guardar los cambios en el servidor
    console.log('Configuración guardada:', { language, timezone });
    alert('Configuración general guardada');
  };

  return (
    <div className="bg-slate-400 p-10 flex justify-center items-center min-h-screen">
      <div className="bg-slate-900 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Configuración General</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2">Idioma</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Zona Horaria</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="America/Bogota">Bogotá</option>
              <option value="America/New_York">Nueva York</option>
              <option value="Europe/Madrid">Madrid</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
              onClick={handleSave}
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfiguracionGeneral;
