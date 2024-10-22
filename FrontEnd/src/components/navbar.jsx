import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import '../index.css'; // Asegúrate de que el CSS se carga correctamente

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-end items-center">
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="bg-transparent border-none cursor-pointer text-purple-600 hover:text-purple-400"
                    >
                        <FaUserCircle className="text-3xl" />
                    </button>
                    {dropdownOpen && (
                        <div 
                            className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50"
                            onMouseLeave={closeDropdown} // Cierra el menú al salir
                        >
                            <ul>
                                <Link to="/app/perfilDetalle" onClick={closeDropdown}>
                                    <li className="flex items-center px-4 py-2 hover:bg-purple-200 cursor-pointer">
                                        <MdSettings className="mr-2" />
                                        Mi Cuenta
                                    </li>
                                </Link>
                                <li className="flex items-center px-4 py-2 hover:bg-purple-200 cursor-pointer" onClick={closeDropdown}>
                                    <MdSettings className="mr-2" />
                                    Configuraciones
                                </li>
                                <li className="flex items-center px-4 py-2 hover:bg-purple-200 cursor-pointer" onClick={closeDropdown}>
                                    <RiLogoutCircleRLine className="mr-2" />
                                    Cerrar Sesión
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>  
        </nav>
    );
};

export default Navbar;
