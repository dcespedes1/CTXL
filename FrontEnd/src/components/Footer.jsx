import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-2"> {/* Reduced padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-sm">
                        <a 
                          href="/contacto" 
                          className="underline transition-colors duration-300 hover:text-purple-500"
                        >
                          Contacto
                        </a>
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
