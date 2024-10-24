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
        <nav className="bg-violet-900 p-4">
            <div className="container mx-auto flex justify-end items-center">
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="bg-transparent border-none cursor-pointer text-purple-200 hover:text-purple-100 transition duration-300"
                    >
                        <FaUserCircle className="text-3xl" />
                    </button>
                    {dropdownOpen && (
                        <div 
                            className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50"
                            onMouseLeave={closeDropdown} // Cierra el menú al salir
                        >
                            <ul className="rounded-lg">
                                <Link to="/admin/perfilDetalle" onClick={closeDropdown}>
                                    <li className="flex items-center px-4 py-2 hover:bg-purple-200 cursor-pointer rounded-t-lg">
                                        <MdSettings className="mr-2" />
                                        Mi Cuenta
                                    </li>
                                </Link>
                                <Link to="/salida/salida" onClick={closeDropdown}>
                                    <li className="flex items-center px-4 py-2 hover:bg-purple-200 cursor-pointer rounded-b-lg">
                                        <RiLogoutCircleRLine className="mr-2" />
                                        Cerrar Sesión
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            </div>  
        </nav>
    );
};

export default Navbar;