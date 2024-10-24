import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { FaClipboardList, FaBoxOpen, FaHome } from 'react-icons/fa'; // Importamos solo los iconos necesarios
import LogoCTXY from '../img/LogoCTXY.jpg'; // Asegúrate de que esta ruta sea correcta

const Sidebar = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const location = useLocation(); // Para manejar el estado activo del menú
  const [notifications] = useState({ pedidos: 2, productos: 1 }); // Simulamos notificaciones para mostrar en los menús

  const toggleInventory = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-violet-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-500">
            <Link to="/empleado/homeE">
              <img src={LogoCTXY} alt="LogoCTXY" className="h-10" />
            </Link>
          </h2>
        </div>

        <nav className="flex flex-col p-6 space-y-2">
          {/* Enlace directo a Home */}
          <Link
            to="/empleado/homeE"
            className={`flex items-center p-3 rounded-lg hover:bg-purple-600 transition duration-300 ${
              location.pathname === '/app/home' ? 'bg-purple-600' : ''
            }`}
          >
            <FaHome className="mr-2" /> Inicio
          </Link>

          {/* Menú colapsable de Inventarios */}
          <div>
            <button
              onClick={toggleInventory}
              className={`w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center ${
                location.pathname.startsWith('/app/ipedidos') || location.pathname.startsWith('/app/iproducto')
                  ? 'bg-purple-600'
                  : ''
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

            <div
              className={`pl-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isInventoryOpen ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ maxHeight: isInventoryOpen ? '300px' : '0px' }}
            >
              <Link
                to="/empleado/ipedidosE"
                className={`flex items-center p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 ${
                  location.pathname === '/app/ipedidos' ? 'bg-purple-600' : ''
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
                to="/empleado/iproductosE"
                className={`flex items-center p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 ${
                  location.pathname === '/app/iproducto' ? 'bg-purple-600' : ''
                }`}
              >
                <FaBoxOpen className="mr-2" /> Inventario Material
                {notifications.productos > 0 && (
                  <span className="ml-auto bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                    {notifications.productos}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Menú colapsable de Registros */}
          <div>
            <button
              onClick={toggleRegister}
              className={`w-full text-left p-3 rounded-lg hover:bg-purple-600 transition duration-300 flex justify-between items-center ${
                location.pathname.startsWith('/app/rpedidos') || location.pathname.startsWith('/app/rproductos')
                  ? 'bg-purple-600'
                  : ''
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

            <div
              className={`pl-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isRegisterOpen ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ maxHeight: isRegisterOpen ? '300px' : '0px' }}
            >
              <Link
                to="/empleado/regiPedido"
                className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Registro Pedido
              </Link>
              <Link
                to="/empleado/regiMaterial"
                className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
              >
                Registro Material
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
