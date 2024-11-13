import React, { useState } from 'react';
import { useLanguage } from './LanguageContext'; // Importar el hook del contexto

// Componente de Notificaciones
function Notificaciones() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const { language } = useLanguage(); // Obtener el idioma del contexto

  const handleSave = () => {
    alert(language === 'es' ? 'Preferencias de notificación guardadas' : 'Notification preferences saved');
  };

  return (
    <div className="bg-slate-900 p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-white mb-4">
        {language === 'es' ? 'Notificaciones' : 'Notifications'}
      </h2>
      <form>
        <div className="mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="mr-2"
            />
            {language === 'es' ? 'Notificaciones por correo electrónico' : 'Email notifications'}
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={(e) => setSmsNotifications(e.target.checked)}
              className="mr-2"
            />
            {language === 'es' ? 'Notificaciones por SMS' : 'SMS notifications'}
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center text-white">
            <input
              type="checkbox"
              checked={pushNotifications}
              onChange={(e) => setPushNotifications(e.target.checked)}
              className="mr-2"
            />
            {language === 'es' ? 'Notificaciones push' : 'Push notifications'}
          </label>
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
  );
}

// Componente de Configuración General
function ConfiguracionGeneral() {
  const [timezone, setTimezone] = useState('America/Bogota');
  const { language, changeLanguage } = useLanguage();

  const handleSave = () => {
    alert(language === 'es' ? 'Configuración general guardada' : 'General settings saved');
  };

  return (
    <div className="bg-slate-900 p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-white mb-4">
        {language === 'es' ? 'Configuración General' : 'General Settings'}
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-white mb-2">
            {language === 'es' ? 'Idioma' : 'Language'}
          </label>
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
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
            <option value="America/Bogota">{language === 'es' ? 'Bogotá' : 'Bogota'}</option>
            <option value="America/New_York">{language === 'es' ? 'Nueva York' : 'New York'}</option>
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
  );
}

// Componente principal que agrupa las vistas
function Configuracion() {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-400 p-10 flex flex-col items-center gap-8 min-h-screen">
      {/* Contenedor del título */}
      <div className="rounded-xl bg-purple-600 w-3/4 py-6 text-center text-white text-3xl font-bold">
        {language === 'es' ? 'Configuración General' : 'General Settings'}
      </div>

      {/* Contenedor de las vistas restantes */}
      <div className="flex flex-wrap gap-8 justify-center w-full">
        <Notificaciones />
        <ConfiguracionGeneral />
      </div>
    </div>
  );
}

export default Configuracion;
