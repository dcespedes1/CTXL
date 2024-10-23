import React from 'react';

const Footer = ({ setModalVisible }) => {
    return (
        <footer className=" w-full bg-violet-950 text-white py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-sm">
                        <button 
                            onClick={() => setModalVisible(true)} // Abrir el modal al hacer clic
                            className="text-white underline focus:outline-none hover:text-purple-300 transition duration-200"
                        >
                            Contacto
                        </button>
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
