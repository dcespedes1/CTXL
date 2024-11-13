import React, { useState } from 'react';
import { useLanguage } from './LanguageContext'; // Importar el hook del contexto

// Componente de Seguridad
function Seguridad() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [enable2FA, setEnable2FA] = useState(false);

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Seguridad guardada:', { newPassword, enable2FA });
    alert('Cambios de seguridad guardados');
  };

  return (
    <div className="bg-slate-400 p-10 flex justify-center items-center min-h-screen">
      <div className="bg-slate-900 rounded-xl shadow-lg max-w-3xl w-full p-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Seguridad</h2>
        <p className="text-white mb-8">Administra las configuraciones de acceso y autenticación de tu cuenta.</p>

        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Cambiar contraseña</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-1">Contraseña actual</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-1">Nueva contraseña</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-1">Confirmar nueva contraseña</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Métodos adicionales de autenticación</h3>
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={enable2FA}
                onChange={(e) => setEnable2FA(e.target.checked)}
                className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              Activar autenticación en dos pasos (2FA)
            </label>
          </div>

          <div className="text-right mt-6">
            <button
              type="button"
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
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

// Componente de Notificaciones
function Notificaciones() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleSave = () => {
    console.log('Preferencias guardadas:', { emailNotifications, smsNotifications, pushNotifications });
    alert('Preferencias de notificación guardadas');
  };

  return (
    <div className="bg-slate-400 p-10 flex justify-center items-center min-h-screen">
      <div className="bg-slate-900 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Notificaciones</h2>
        <form>
          <div className="mb-4">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="mr-2"
              />
              Notificaciones por correo electrónico
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
              Notificaciones por SMS
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
              Notificaciones push
            </label>
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

// Componente de Configuración General
function ConfiguracionGeneral() {
  const [timezone, setTimezone] = useState('America/Bogota');
  const { language, changeLanguage } = useLanguage();

  const handleSave = () => {
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

// Componente principal que agrupa las tres vistas
function Configuracion() {
  return (
    <div>
      <Seguridad />
      <Notificaciones />
      <ConfiguracionGeneral />
    </div>
  );
}

export default Configuracion;
