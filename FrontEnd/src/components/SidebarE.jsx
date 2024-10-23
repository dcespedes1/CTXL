import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaClipboardList, FaBoxOpen, FaFileAlt, FaBox, FaUserPlus } from 'react-icons/fa'; // Importamos los iconos
import LogoCTXY from '../img/LogoCTXY.jpg'; // Asegúrate de que esta ruta sea correcta

const SidebarE = ({ children }) => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleInventory = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-violet-900 text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-400">
            <Link to="/app/home">
              <img src={LogoCTXY} alt="LogoCTXY" className="h-10 mb-4" />
            </Link>
          </h2>
        </div>
        
        <nav className="flex flex-col p-6 space-y-4">
          {/* Inventarios */}
          <div>
            <button
              onClick={toggleInventory}
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 flex justify-between items-center"
            >
              <span className="flex items-center">
                <FaClipboardList className="mr-2" /> Inventarios
              </span>
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
            {isInventoryOpen && (
              <div className="pl-6 mt-2 space-y-2">
                <Link
                  to="/app/ipedidos"
                  className="flex items-center p-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <FaClipboardList className="mr-2" /> Inventario Pedidos
                </Link>
                <Link
                  to="/app/iproducto"
                  className="flex items-center p-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <FaBoxOpen className="mr-2" /> Inventario Material
                </Link>
              </div>
            )}
          </div>

          {/* Registros */}
          <div>
            <button
              onClick={toggleRegister}
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 transition-all duration-300 flex justify-between items-center"
            >
              <span className="flex items-center">
                <FaFileAlt className="mr-2" /> Registros
              </span>
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
            {isRegisterOpen && (
              <div className="pl-6 mt-2 space-y-2">
                <Link
                  to="/app/regiPedido"
                  className="flex items-center p-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
                >
                  <FaFileAlt className="mr-2" /> Registro Pedido
                </Link>
                <Link
                  to="/app/regiMaterial"
                  className="flex items-center p-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
                >
                  <FaBox className="mr-2" /> Registro Material
                </Link>
                <Link
                  to="/app/regiEmpleado"
                  className="flex items-center p-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
                >
                  <FaUserPlus className="mr-2" /> Registro Empleados
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-gray-100 p-10">
        {children}
      </main>
    </div>
  );
};

export default SidebarE;
