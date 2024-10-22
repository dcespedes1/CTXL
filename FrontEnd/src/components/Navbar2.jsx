import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import '../index.css'; // Asegúrate de que el CSS se carga correctamente
import LogoCTXY from '../img/LogoCTXY.jpg';  // Cambia esta ruta a la ubicación de tu imagen

const Navbar2 = () => {
    return (
        <nav className="bg-violet-950 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link to={"/index"}>
                        <img src={LogoCTXY} alt="Logo" className="h-10 mr-2" />
                    </Link>
                    <h1 className="text-white text-xl font-bold">Textiles la Y</h1>
                </div>
                <div className="space-x-4 flex items-center">
                    <Link to="/SingIn" className="text-white hover:text-purple-300 flex items-center">
                        <FaSignInAlt className="mr-1" /> {/* Ícono de inicio de sesión */}
                        Iniciar Sesión
                    </Link>
                    <Link to="/Login" className="text-white hover:text-purple-300 flex items-center">
                        <FaUserPlus className="mr-1" /> {/* Ícono de registro */}
                        Registrarse
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;