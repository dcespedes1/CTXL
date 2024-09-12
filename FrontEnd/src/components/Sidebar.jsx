import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logoFacebook from '../img/facebook-512.webp';
import logoGoogle from '../img/google_logo-google_icongoogle-512.webp';
import logoTwitter from '../img/1690643591twitter-x-logo-png.webp';
import logoInstagram from '../img/instagram-logo-instagram-icon-transparent-free-png.webp';
import '../index.css';



const Sidebar = () =>{
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  

  const toggleInventory = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };
return(

    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-purple-500">CTXL</h2>
        </div>
        <nav className="flex flex-col p-6 space-y-2">
          <Link
            to="/app/home"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/app/perfilDetalle"
            className="p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
          >
            Perfil
          </Link>
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
              className="w-full text-left p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300 flex justify-between items-center"
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
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Registro Pedido
                </Link>
                <Link
                  to="/app/rproductos"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Registro Material
                </Link>
                <Link
                  to="/app/rempleado"
                  className="block p-3 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                >
                  Registro Empleados
                </Link>
              </div>
            )}
          </div>
          
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center p-6 space-x-4 mt-auto">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoFacebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoInstagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoTwitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black transition duration-300"
          >
            <img src={logoGoogle} alt="Google" className="w-6 h-6" />
          </a>
        </div>
      </aside>

      
      
    </div>
  );
}

export default Sidebar;