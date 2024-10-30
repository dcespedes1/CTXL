import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import {
  FaClipboardList, FaBoxOpen, FaUserTie, FaBell, FaLock, FaCog, FaHome, FaBars, FaTimes
} from 'react-icons/fa'; // Importamos los iconos
import LogoCTXY from '../img/LogoCTXY.jpg'; // Asegúrate de que esta ruta sea correcta

const Sidebar = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Para abrir el menú de configuración
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Para abrir/cerrar sidebar en pantallas pequeñas
  const location = useLocation(); // Para manejar el estado activo del menú
  const [notifications] = useState({ pedidos: 2, productos: 1 }); // Simulamos notificaciones para mostrar en los menús

  const toggleInventory = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Botón de hamburguesa (sólo en móviles) */}
      <button
        onClick={toggleSidebar}
        className="p-4 text-white bg-gray-800focus:outline-none md:hidden"
      >
        {isSidebarOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:flex md:flex-col`}
      >
        {/* Logo */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-500">
            <Link to="/admin/home">
              <img src={LogoCTXY} alt="LogoCTXY" className="h-10" />
            </Link>
          </h2>
        </div>

        <nav className="flex flex-col p-6 space-y-2">
          {/* Enlace directo a Home */}
          <Link
            to="/admin/home"
            className={`flex items-center p-3 rounded-lg hover:bg-purple-600 transition duration-300 ${
              location.pathname === '/admin/home' ? 'bg-purple-600' : ''
            }`}
          >
            <FaHome className="mr-2" /> Inicio
          </Link>

          <div>
            <button
              onClick={toggleInventory}
              className={`w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center ${
                location.pathname.startsWith('/admin/ipedidos') || location.pathname.startsWith('/admin/iproducto') || location.pathname.startsWith('/app/iempleado') ? 'bg-purple-600' : ''
              }`}
            >
              Inventarios
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${isInventoryOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Menú colapsable de Inventarios */}
            <div
              className={`pl-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isInventoryOpen ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ maxHeight: isInventoryOpen ? '300px' : '0px' }}
            >
              <Link
                to="/admin/ipedidos"
                className={`flex items-center p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 ${
                  location.pathname === '/admin/ipedidos' ? 'bg-purple-600' : ''
                }`}
              >
                <FaClipboardList className="mr-2" /> Inventario Pedidos
                {notifications.pedidos > 0 && (
                  <span className="ml-auto bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {notifications.pedidos}
                  </span>
                )}
              </Link>
              <Link
                to="/admin/iproducto"
                className={`flex items-center p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 ${
                  location.pathname === '/admin/iproducto' ? 'bg-purple-600' : ''
                }`}
              >
                <FaBoxOpen className="mr-2" /> Inventario Material
                {notifications.productos > 0 && (
                  <span className="ml-auto bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {notifications.productos}
                  </span>
                )}
              </Link>
              <Link
                to="/admin/iempleado"
                className={`flex items-center p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 ${
                  location.pathname === '/admin/iempleado' ? 'bg-purple-600' : ''
                }`}
              >
                <FaUserTie className="mr-2" /> Inventario Empleados
              </Link>
            </div>
          </div>

          <div>
            <button
              onClick={toggleRegister}
              className={`w-full text-left p-3 rounded-lg hover:bg-purple-600 transition duration-300 flex justify-between items-center ${
                location.pathname.startsWith('/admin/rpedidos') || location.pathname.startsWith('/app/rproductos') || location.pathname.startsWith('/app/rempleado') ? 'bg-purple-600' : ''
              }`}
            >
              Registros
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${isRegisterOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Menú colapsable de Registros */}
            <div
              className={`pl-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isRegisterOpen ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ maxHeight: isRegisterOpen ? '300px' : '0px' }}
            >
              <Link
                to="/admin/regiPedido"
                className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Registro Pedido
              </Link>
              <Link
                to="/admin/regiMaterial"
                className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Registro Material
              </Link>
              <Link
                to="/admin/regiEmpleado"
                className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Registro Empleados
              </Link>
            </div>
          </div>

          {/* Sección de Configuración */}
          <div>
            <button
              onClick={toggleSettings}
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 transition duration-300 flex justify-between items-center"
            >
              Configuración
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${isSettingsOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Menú colapsable de Configuración */}
            <div
              className={`pl-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isSettingsOpen ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ maxHeight: isSettingsOpen ? '300px' : '0px' }}
            >
              <Link
                to="/admin/configNotificaciones"
                className="flex items-center p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                <FaBell className="mr-2" /> Notificaciones
              </Link>
              <Link
                to="/admin/configSeguridad"
                className="flex items-center p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                <FaLock className="mr-2" /> Seguridad
              </Link>
              <Link
                to="/admin/configGeneral"
                className="flex items-center p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                <FaCog className="mr-2" /> General
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Overlay (solo se muestra en móviles cuando el sidebar está abierto) */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
