import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-violet-950 text-white py-2"> {/* Reduced padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-sm">
                    <Link to="/Contact" >
                          Contacto
                        </Link>
                    </p>
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} TextileUniforms. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
