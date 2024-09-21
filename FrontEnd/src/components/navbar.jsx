import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Asegúrate de que el CSS se carga correctamente

const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-end items-center">
                <div className="space-x-4">
                    <Link to="/index" className="text-white hover:text-purple-300">
                        Cerrar Sesion
                    </Link>
                </div>
            </div>  
        </nav>
    );
};

export default Navbar;
