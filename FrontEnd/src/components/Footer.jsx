import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-2 mt-4"> {/* Fondo negro y texto blanco */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Información de Contacto */}
                <div className="flex justify-between items-center text-center mb-2"> {/* Alineación horizontal */}
                    <p className="text-sm">
                        <a 
                          href="/contacto" 
                          className="underline transition-colors duration-300 hover:text-purple-500" // Efecto hover morado
                        >
                          Contacto
                        </a>
                    </p>
                    <p className="text-sm">&copy; {new Date().getFullYear()} TextileUniforms. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;