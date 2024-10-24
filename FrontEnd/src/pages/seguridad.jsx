import React, { useState } from 'react';

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

    // Aquí podrías agregar la lógica para cambiar la contraseña y configurar la 2FA
    console.log('Seguridad guardada:', { newPassword, enable2FA });
    alert('Cambios de seguridad guardados');
  };

  return (
    <div className="bg-slate-400 p-10 flex justify-center items-center min-h-screen">
      <div className="bg-slate-900 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Seguridad</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2">Contraseña actual</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Nueva contraseña</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Confirmar nueva contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={enable2FA}
                onChange={(e) => setEnable2FA(e.target.checked)}
                className="mr-2"
              />
              Activar autenticación en dos pasos (2FA)
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

export default Seguridad;
