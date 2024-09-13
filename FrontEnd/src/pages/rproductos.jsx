import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/productos/';

function Rproductos() {
    const [CantidadR, setCantidad] = useState('');
    const [Material, setMaterial] = useState('');
    const [Colores, setColor] = useState('');
    const [id_administrador,setid_administrador] = useState('');
    const [id_Empleado, setid_Empleado] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URI, {
                CantidadR: CantidadR,
                Material: Material,
                Colores: Colores,
                id_administrador: id_administrador,
                id_Empleado: id_Empleado,
            });
            console.log('Respuesta del servidor:', response.data);
            navigate('/app/iproducto'); // Redirige a la página de productos
        } catch (error) {
            console.error('Error al registrar el producto:', error);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            {/* Main Content */}
            <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
                <div className="w-3/4 mt-20">
                    <div className="w-1/4 flex">
                        <h1 className="whitespace-nowrap text-4xl font-bold">Registro productos</h1>
                        <div className="pl-[120vh]"></div>
                    </div>
                </div>
                {/* Registro */}
                <div className="flex justify-center items-center h-screen">
                    <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registrar producto</h2>
                        <form onSubmit={store}>
                            <div className="space-y-6">
                                <div className="flex flex-col space-y-4">
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="Cantidad">Cantidad</label>
                                        <input
                                            type="number"
                                            id="Cantidad"
                                            value={CantidadR}
                                            onChange={(e) => setCantidad(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="Material">Material</label>
                                        <input
                                            type="text"
                                            id="Material"
                                            value={Material}
                                            onChange={(e) => setMaterial(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="Color">Color</label>
                                        <input
                                            type="text"
                                            id="Color"
                                            value={Colores}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="id_administrador">administrador</label>
                                        <input
                                            type="number"
                                            id="id_administrador"
                                            value={id_administrador}
                                            onChange={(e) => setid_administrador(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="id_Empleado">empleado</label>
                                        <input
                                            type="number"
                                            id="id_Empleado"
                                            value={id_Empleado}
                                            onChange={(e) => setid_Empleado(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <Link to="/app/iproducto">
                                        <button
                                            type="button"
                                            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                                        >
                                            Cancelar
                                        </button>
                                    </Link>
                                    <button
                                        type="submit"
                                        className="w-1/2 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                                    >
                                        Registrar
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

export default Rproductos;
