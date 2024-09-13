import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-[#3e2a8a] text-white py-8 mt-4">
            {/* Logo */}
            <div className="text-center mb-8">
           
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Contenedor general para el layout en horizontal */}
                <div className="flex flex-wrap justify-around items-start">
                    {/* Redes Sociales */}
                    <div className="w-full sm:w-1/4 mb-8 text-center">
                        <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="https://facebook.com" className="hover:text-gray-300 transition duration-300" aria-label="Facebook">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.12 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.5 1.5-3.87 3.74-3.87 1.07 0 2.19.19 2.19.19v2.42h-1.23c-1.21 0-1.59.76-1.59 1.53v1.94h2.71l-.43 2.9h-2.28v6.98c4.78-.76 8.44-4.89 8.44-9.88z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" className="hover:text-gray-300 transition duration-300" aria-label="Instagram">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.5c-3.03 0-3.4.01-4.58.07-1.18.06-1.98.26-2.66.56-.68.3-1.25.7-1.8 1.25-.55.55-.95 1.12-1.25 1.8-.3.68-.5 1.48-.56 2.66-.06 1.18-.07 1.55-.07 4.58s.01 3.4.07 4.58c.06 1.18.26 1.98.56 2.66.3.68.7 1.25 1.25 1.8.55.55 1.12.95 1.8 1.25.68.3 1.48.5 2.66.56 1.18.06 1.55.07 4.58.07s3.4-.01 4.58-.07c1.18-.06 1.98-.26 2.66-.56.68-.3 1.25-.7 1.8-1.25.55-.55.95-1.12 1.25-1.8.3-.68.5-1.48.56-2.66.06-1.18.07-1.55.07-4.58s-.01-3.4-.07-4.58c-.06-1.18-.26-1.98-.56-2.66-.3-.68-.7-1.25-1.25-1.8-.55-.55-1.12-.95-1.8-1.25-.68-.3-1.48-.5-2.66-.56-1.18-.06-1.55-.07-4.58-.07zm0 15.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8.75c-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75 2.75-1.25 2.75-2.75-1.25-2.75-2.75-2.75zm6.25-3.25c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" className="hover:text-gray-300 transition duration-300" aria-label="LinkedIn">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.586v-5.573c0-1.33-.025-3.045-1.853-3.045-1.853 0-2.136 1.446-2.136 2.936v5.682h-3.586v-11.5h3.446v1.568h.049c.482-.91 1.658-1.874 3.417-1.874 3.648 0 4.325 2.4 4.325 5.516v6.29zm-15.447-11.5h-3.446v11.5h3.446v-11.5zm-1.723-8.452c-1.1 0-2.008.91-2.008 2.008 0 1.1.908 2.008 2.008 2.008 1.1 0 2.008-.908 2.008-2.008 0-1.1-.908-2.008-2.008-2.008zm1.723 11.5h-3.446v-11.5h3.446v11.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Información de Contacto */}
                    <div className="w-full sm:w-1/4 mb-8 text-center">
                        <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
                        <p className="mb-2">Teléfono: +57 3227859837</p>
                        <p className="mb-2">Correo Electrónico: <a href="mailto:contacto@textileuniforms.com" className="underline">contacto@textileuniforms.com</a></p>
                        <p className="mb-2">Correo Electrónico: <a href="mailto:contacto@textileuniforms.com" className="underline">textilesY@gmail.com</a></p>
                        <p className="mb-2">Dirección: calle 73# 18h-86 sur</p>
                    </div>
                </div>

                {/* Derechos de autor */}
                <div className="mt-8 border-t border-gray-700 pt-4 flex justify-center items-center">
                    <p className="text-sm">&copy; 2024 TextileUniforms. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
