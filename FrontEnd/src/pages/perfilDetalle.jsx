import React, { useState } from 'react';
import '../index.css';
import Perfil from '../pages/perfilEditar'; 
import LogoCTXY from '../img/LogoCTXY.jpg';

const PerfilDetalle = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      {/* Main Content */}
      <main className="flex-1 flex flex-col p-6 md:p-10">
        {/* Content */}
        <div className="w-full rounded-lg shadow-2xl shadow-purple-600/100">
          <div className="bg-slate-900 p-6 rounded-t-lg">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="h-16 w-16 rounded-full bg-gray-500 overflow-hidden">
                <img src={LogoCTXY} alt="LogoCTXY" className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-1 text-center md:text-left flex-grow">
                <h2 className="text-2xl font-bold text-white">Paco Gertes</h2>
                <div className="text-gray-400">paco69@gmail.com</div>
              </div>
              <button
                onClick={openModal}
                className="bg-slate-400 text-white p-2 rounded hover:bg-purple-700 transition duration-300"
              >
                Editar
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 p-6 md:p-8 bg-slate-900 rounded-b-lg md:grid-cols-2">
            <div className="grid gap-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="password" className="text-white">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    defaultValue="********"
                    className="p-2 rounded bg-gray-800 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="birthdate" className="text-white">Fecha Nacimiento</label>
                  <input
                    id="birthdate"
                    type="date"
                    defaultValue="2001-09-11"
                    className="p-2 rounded bg-gray-800 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="phone" className="text-white">Celular</label>
                  <input
                    id="phone"
                    type="tel"
                    defaultValue="+57 3117275301"
                    className="p-2 rounded bg-gray-800 text-white"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="address" className="text-white">Dirección</label>
                  <textarea
                    id="address"
                    defaultValue="Crr69 estes - 68"
                    className="p-2 rounded bg-gray-800 text-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Historial Inicio Sesión</h3>
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-slate-400">
                    <th className="text-white p-2">Fecha</th>
                    <th className="text-white p-2">Ubicación</th>
                    <th className="text-white p-2">Dispositivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-black hover:bg-slate-400">
                    <td className="text-white p-2">2023-04-15 10:30 AM</td>
                    <td className="text-white p-2">Bogota, COL</td>
                    <td className="text-white p-2">iPhone 12</td>
                  </tr>
                  <tr className="bg-black hover:bg-slate-400">
                    <td className="text-white p-2">2023-04-10 3:45 PM</td>
                    <td className="text-white p-2">Bogota, COL</td>
                    <td className="text-white p-2">MacBook Pro</td>
                  </tr>
                  <tr className="bg-black hover:bg-slate-400">
                    <td className="text-white p-2">2023-04-05 8:20 AM</td>
                    <td className="text-white p-2">Bogota, COL</td>
                    <td className="text-white p-2">Samsung Galaxy S22</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Botones Responsivos */}
            <div className="mx-auto flex flex-col gap-2 p-6 bg-slate-900 rounded-b-lg md:flex-row md:justify-start">
              <button className="bg-slate-400 text-white p-2 rounded hover:bg-purple-700 transition duration-300">
                Cambiar Contraseña
              </button>
              <button className="bg-slate-400 text-white p-2 rounded hover:bg-purple-700 transition duration-300">
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal para editar perfil */}
      {isModalVisible && (
        <div
          className="fixed inset-0 bg-slate-900 bg-opacity-60 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-slate-900 p-8 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full mx-4 md:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Editar Perfil</h2>
            <Perfil setModalVisible={setModalVisible} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilDetalle;
