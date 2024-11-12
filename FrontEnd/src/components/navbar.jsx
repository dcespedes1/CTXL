// Navbar.js
import React, { useState } from 'react';
import { RiNotification3Line } from 'react-icons/ri';
import ConfigDesplegable from './ConfigDesplegable';
import { MdSettings } from 'react-icons/md';
import { useLanguage } from '../pages/LanguageContext'; 
import '../index.css';

const Navbar = () => {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [configOpen, setConfigOpen] = useState(false); // Estado para el menú deslizable de configuración
    const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para el dropdown del perfil

    const { language, changeLanguage } = useLanguage();

    const toggleNotifications = () => setNotificationsOpen(prev => !prev);
    const closeNotifications = () => setNotificationsOpen(false);

    const openConfig = () => {
        setConfigOpen(true); // Abre el menú deslizable de configuración
        setDropdownOpen(false); // Cierra el dropdown del perfil
    };
    const closeConfig = () => setConfigOpen(false); // Cierra el menú deslizable de configuración

    const toggleDropdown = () => setDropdownOpen(prev => !prev); // Alterna el estado del dropdown del perfil
    const closeDropdown = () => setDropdownOpen(false); // Cierra el dropdown del perfil

    // Datos de ejemplo para usuario y notificaciones
    const user = {
        profileImage: 'https://via.placeholder.com/150',
        role: 'Administrador',
    };

    const notifications = [
        { id: 1, message: "Nueva solicitud de acceso." },
        { id: 2, message: "Cambio de contraseña exitoso." },
        { id: 3, message: "Nuevo mensaje en tu bandeja." }
    ];

    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-end items-center space-x-4">

                    {/* Icono de notificaciones */}
                    <div className="relative">
                        <button
                            onClick={toggleNotifications}
                            className="text-purple-200 hover:text-purple-100 transition duration-300 relative"
                        >
                            <RiNotification3Line className="w-6 h-6" />
                            {notifications.length > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                                    {notifications.length}
                                </span>
                            )}
                        </button>

                        {/* Dropdown de notificaciones */}
                        {notificationsOpen && (
                            <div
                                className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg z-50"
                                onMouseLeave={closeNotifications}
                            >
                                <div className="p-4 border-b border-gray-200 font-semibold">
                                    Notificaciones
                                </div>
                                <ul className="py-1">
                                    {notifications.length > 0 ? (
                                        notifications.map(notification => (
                                            <li key={notification.id} className="px-4 py-2 hover:bg-purple-200">
                                                {notification.message}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="px-4 py-2 text-gray-500">
                                            Sin notificaciones
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Selector de idioma */}
                    <div className="relative">
                        <select
                            value={language}
                            onChange={(e) => changeLanguage(e.target.value)}  // Cambia el idioma
                            className="bg-gray-700 text-white p-2 rounded"
                        >
                            <option value="es">{language === 'es' ? 'Español' : 'Spanish'}</option>
                            <option value="en">{language === 'es' ? 'Inglés' : 'English'}</option>
                        </select>
                    </div>


                    {/* Imagen de perfil con dropdown */}
                    <div className="relative">
                        <button onClick={toggleDropdown} className="bg-transparent border-none cursor-pointer">
                            <img 
                                src={user.profileImage} 
                                alt="Perfil" 
                                className="w-12 h-12 rounded-md object-cover"
                            />
                        </button>

                        {/* Dropdown del perfil */}
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-50">
                                <div className="p-4 border-b border-gray-200 text-center font-semibold">
                                    {user.role}
                                </div>
                                <ul className="py-1">
                                    <li
                                        className="flex items-center px-4 py-2 hover:bg-purple-200 cursor-pointer"
                                        onClick={openConfig}
                                    >
                                        <MdSettings className="mr-2" />
                                        Configuración
                                    </li>
                                    <li
                                        className="px-4 py-2 text-center text-gray-600 cursor-pointer hover:text-black"
                                        onClick={closeDropdown}
                                    >
                                        Cerrar Sesion
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Componente ConfigDesplegable para el menú deslizable de configuración */}
            <ConfigDesplegable isOpen={configOpen} closeConfig={closeConfig} />
        </>
    );
};

export default Navbar;
