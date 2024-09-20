import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Asegúrate de que el CSS se carga correctamente
import LogoCTXY from '../img/LogoCTXY.jpg';  // Cambia esta ruta a la ubicación de tu imagen

const Navbar2 = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={LogoCTXY} alt="Logo" className="h-10 mr-2" /> {/* Ajusta la altura según lo necesites */}
                    <h1 className="text-white text-xl font-bold">Textiles la Y</h1>
                </div>
                <div className="space-x-4">
                    <Link to="/singUp" className="text-white hover:text-purple-300">
                        Iniciar Sesión
                    </Link>
                    <Link to="/login" className="text-white hover:text-purple-300">
                        Registrarse
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;
