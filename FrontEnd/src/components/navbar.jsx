import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; // Importa los íconos de react-icons

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white p-4 fixed w-full z-10"> {/* Cambiado a bg-transparent y texto negro */}
      <ul className="flex justify-end space-x-6"> {/* Alineación a la derecha con más espacio */}
        <li>
          <a 
            href="/" 
            className="text-xl transition-colors duration-300 hover:text-purple-500" // Tamaño de texto aumentado
          >
            Inicio
          </a>
        </li>
        <li>
          <a 
            href="/perfil" 
            className="flex items-center text-xl transition-colors duration-300 hover:text-purple-500" // Tamaño de texto aumentado
          >
            <FaUser className="w-5 h-5 mr-1" /> {/* Ícono de perfil */}
            Perfil
          </a>
        </li>
        <li>
          <a 
            href="/logout" // Cambia esto a la ruta correcta para cerrar sesión
            className="flex items-center text-xl transition-colors duration-300 hover:text-purple-500" // Tamaño de texto aumentado
          >
            <FaSignOutAlt className="w-5 h-5 mr-1" /> {/* Ícono de cerrar sesión */}
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;