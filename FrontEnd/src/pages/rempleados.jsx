import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function REmpleados() {
    const [Nombre, setNombre] = useState('');
    const [TipoD, setTipoD] = useState('');
    const [NumeroD, setNumeroD] = useState('');
    const [FechaN, setFechaN] = useState('');
    const [Correo, setCorreo] = useState('');
    const [Celular, setCelular] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Registro con:', { Nombre, TipoD, NumeroD, FechaN, Correo, Celular });
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            {/* Main Content */}
            <main
                className="flex-1 flex flex-col p-10 bg-gray-100 text-white bg-cover bg-no-repeat"
            >
                {/* Content */}
                
                {/* Registro */}
                <div className="flex justify-center items-center h-screen">
                    <div className="w-[800px] bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro Empleado</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Nombre">
                                        Nombre
                                        </label>
                                        <input
                                            type="text"
                                            id="Nombre"
                                            value={Nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="TipoD">
                                        Tipo Documento
                                        </label>
                                        <select
                                            
                                            id="TipoD"
                                            value={TipoD}
                                            onChange={(e) => setTipoD(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        >
                                            <option value="">Selecciona un tipo</option>
                                            <option value="CC">Cédula de Ciudadanía (CC)</option>
                                            <option value="CE">Cédula de Extranjería (CE)</option>
                                        <   option value="PA">Pasaporte (PA)</option>
                                        </select>
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="NumeroD">
                                        Número Documento
                                        </label>
                                        <input
                                            type="text"
                                            id="NumeroD"
                                            value={NumeroD}
                                            onChange={(e) => setNumeroD(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="FechaN">
                                        Fecha Nacimiento
                                        </label>
                                        <input
                                            type="date"
                                            id="FechaN"
                                            value={FechaN}
                                            onChange={(e) => setFechaN(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Correo">
                                        Correo
                                        </label>
                                        <input
                                            type="email"
                                            id="Correo"
                                            value={Correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Celular">
                                        Celular
                                        </label>
                                        <input
                                            type="text"
                                            id="Celular"
                                            value={Celular}
                                            onChange={(e) => setCelular(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="text-center">
                                <Link
                                to="/app/iproducto">
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                                    >
                                    Cancelar
                                </button>
                                 </Link>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
                                    >
                                        Registrar Pedido
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default REmpleados;
