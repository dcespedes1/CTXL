import React, { useState } from 'react';
import { useLanguage } from './LanguageContext'; // Importar el hook del contexto

function ConfiguracionGeneral() {
  const [timezone, setTimezone] = useState('America/Bogota');
  const { language, changeLanguage } = useLanguage(); // Usar el idioma del contexto

  const handleSave = () => {
    // Lógica para guardar la configuración (puedes agregar la lógica para guardarlo en el servidor)
    console.log('Configuración guardada:', { language, timezone });
    alert(language === 'es' ? 'Configuración general guardada' : 'General settings saved');
  };

  return (
    <div className="bg-slate-400 p-10 flex justify-center items-center min-h-screen">
      <div className="bg-slate-900 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          {language === 'es' ? 'Configuración General' : 'General Settings'}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2">
              {language === 'es' ? 'Idioma' : 'Language'}
            </label>
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)} // Cambiar el idioma
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="es">Español</option>
              <option value="en">Inglés</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">
              {language === 'es' ? 'Zona Horaria' : 'Timezone'}
            </label>
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
              {language === 'es' ? 'Guardar cambios' : 'Save changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfiguracionGeneral;
