import React, { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineSearch,
    AiOutlineClose,
} from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs'; // Importar solo el icono de perfil
import { TbTruckDelivery } from 'react-icons/tb';
import { MdHelp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

    const handleSearch = () => {
        console.log("Buscando:", searchTerm);
    };

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-black text-white">
            {/* Left Side */}
            <div className="flex items-center">
                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer text-white"
                >
                    <AiOutlineMenu size={30} />
                </div>
                <div className="px-2">
                    <img src="img/logoCTXY.jpg" alt="Logo" className="h-10" />
                </div>
            </div>

            {/* Centered Search */}
            <div className="flex-1 flex justify-center">
                <div className="rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] border-2 border-[#9b59b6] transition duration-300">
                    <AiOutlineSearch size={25} onClick={handleSearch} className="cursor-pointer text-white" />
                    <input
                        className="bg-transparent p-2 w-full focus:outline-none text-white placeholder:text-gray-500 placeholder:opacity-100"
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {nav && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/80 z-10"></div>
            )}

            {/* Side Drawer Menu */}
            <div
                className={`fixed top-0 left-0 w-[300px] h-screen bg-black text-white z-20 duration-300 ${
                    nav ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer text-white"
                />
                <div className="flex justify-center p-4">
                    <img src="img/logoCTXY.jpg" alt="Logo" className="h-10" />
                </div>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-300">
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-[#9b59b6]">
                            <BsFillPersonFill size={25} className="mr-4" />
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-[#9b59b6]">
                            <BsFillPersonFill size={25} className="mr-4" />
                            <Link to="/singUp">Iniciar Sesión</Link>
                        </li>
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-[#9b59b6]">
                            <BsFillPersonFill size={25} className="mr-4" />
                            <Link to="/login">Registrarse</Link>
                        </li>
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-[#9b59b6]">
                            <TbTruckDelivery size={25} className="mr-4" />
                            Contacto
                        </li>
                        <li className="text-xl py-4 flex items-center cursor-pointer hover:text-[#9b59b6]">
                            <MdHelp size={25} className="mr-4" />
                            Ayuda
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
