import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function RPedidos(){
    
    const [Cliente, setCliente] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Empleado, setEmpleado] = useState('');
    const [Prenda, setPrenda] = useState('');
    const [Tela, setTela] = useState('');
    const [Estampado, setEstampado] = useState('');
    const [Talla, setTalla] = useState('');
    const [Bordado, setBordado] = useState('');
    const [PInicio, setPInicial] = useState('');
    const [PFinal, setPFinal] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('registro con:', { Cliente, Cantidad, Empleado, Prenda, Tela, Estampado, Talla, Bordado, PInicio, PFinal });
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
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro Pedido</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Talla">
                                            Cliente
                                        </label>
                                        <input
                                            type="text"
                                            id="Cliente"
                                            value={Cliente}
                                            onChange={(e) => setCliente(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Cantidad">
                                            Cantidad
                                        </label>
                                        <input
                                            type="number"
                                            id="Cantidad"
                                            value={Cantidad}
                                            onChange={(e) => setCantidad(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Bordado">
                                            Empleado
                                        </label>
                                        <input
                                            type="text"
                                            id="Empleado"
                                            value={Empleado}
                                            onChange={(e) => setEmpleado(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Prenda">
                                            Prenda
                                        </label>
                                        <input
                                            type="text"
                                            id="Prenda"
                                            value={Prenda}
                                            onChange={(e) => setPrenda(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Estampado">
                                            Tela
                                        </label>
                                        <input
                                            type="text"
                                            id="Tela"
                                            value={Tela}
                                            onChange={(e) => setTela(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Estampado">
                                            Estampado
                                        </label>
                                        <input
                                            type="text"
                                            id="Estampado"
                                            value={Estampado}
                                            onChange={(e) => setEstampado(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label className="block text-white mb-2" htmlFor="Talla">
                                            Talla
                                        </label>
                                        <input
                                            type="text"
                                            id="Talla"
                                            value={Talla}
                                            onChange={(e) => setTalla(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-white mb-2" htmlFor="Bordado">
                                            Bordado
                                        </label>
                                        <input
                                            type="text"
                                            id="Bordado"
                                            value={Bordado}
                                            onChange={(e) => setBordado(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label className="block text-white mb-2" htmlFor="PInicio">
                                            Precio Inicio
                                        </label>
                                        <input
                                            type="text"
                                            id="PInicio"
                                            value={PInicio}
                                            onChange={(e) => setPInicial(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-white mb-2" htmlFor="PFinal">
                                            Precio Final
                                        </label>
                                        <input
                                            type="text"
                                            id="PFinal"
                                            value={PFinal}
                                            onChange={(e) => setPFinal(e.target.value)}
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

export default RPedidos;
