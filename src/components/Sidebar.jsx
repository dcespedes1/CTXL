import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import LogoCTXY from '../img/LogoCTXY.jpg'; // Asegúrate de que esta ruta sea correcta

const Sidebar = () => {
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
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-500">
            <img src={LogoCTXY} alt="LogoCTXY" className="h-10" />
          </h2>
        </div>
        <nav className="flex flex-col p-6 space-y-2">
          {/* Se eliminaron los enlaces de Inicio y Perfil */}
          <div>
            <button
              onClick={toggleInventory}
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
            >
              Inventarios
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isInventoryOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isInventoryOpen && (
              <div className="pl-6 mt-2">
                <Link
                  to="/app/ipedidos"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300" 
                >
                  Inventario Pedidos
                </Link>
                <Link
                  to="/app/iproducto"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300" 
                >
                  Inventario Material
                </Link>
                <Link
                  to="/app/iempleado"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Inventario Empleados
                </Link>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={toggleRegister}
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 transition duration-300 flex justify-between items-center"
            >
              Registros
              <svg
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isRegisterOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isRegisterOpen && (
              <div className="pl-6 mt-2">
                <Link
                  to="/app/rpedidos"
                  className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
                >
                  Registro Pedido
                </Link>
                <Link
                  to="/app/rproductos"
                  className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
                >
                  Registro Material
                </Link>
                <Link
                  to="/app/rempleado"
                  className="block p-3 rounded-lg hover:bg-purple-600 transition duration-300"
                >
                  Registro Empleados
                </Link>
              </div>
            )}
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;