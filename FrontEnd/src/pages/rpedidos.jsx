import React, { useState} from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/api/pedidos/';

function RPedidos() {
    const [Cliente, setCliente] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Prenda, setPrenda] = useState('');
    const [Tela, setTela] = useState('');
    const [Estampado, setEstampado] = useState('');
    const [Talla, setTalla] = useState('');
    const [Bordado, setBordado] = useState('');
    const [PInicial, setPInicial] = useState('');
    const [PFinal, setPFinal] = useState('');  
    const [id_Empleado, setid_Empleado] = useState('');
    const [id_administrador, setid_administrador] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        try {
            const response = await axios.post(URI, {
                Cliente,
                Cantidad,
                Prenda,
                Tela,
                Estampado,
                Talla,
                Bordado,
                PInicial,
                PFinal,
                id_administrador,
                id_Empleado,
            });
            console.log("Respuesta de la API:", response.data);
            navigate('/app/ipedidos');
        } catch (error) {
            console.error('Error al registrar el pedido:', error);
        }
    };

    return (
        <div className="flex h-screen">
            <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-[800px] bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro Pedido</h2>
                        <form onSubmit={store}>
                            <div className="space-y-6">
                                {/* Primera fila */}
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Cliente">Cliente</label>
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
                                        <label className="block text-white mb-2" htmlFor="Cantidad">Cantidad</label>
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
                                        <label className="block text-white mb-2" htmlFor="id_Empleado">Empleado</label>
                                        <input
                                        type="number"
                                            id="id_Empleado"
                                            value={id_Empleado}
                                            onChange={(e) => setid_Empleado(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        >
                                        </input>
                                    </div>

                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="id_administrador">id Administrador</label>
                                        <input
                                            type="number"
                                            id="id_administrador"
                                            value={id_administrador}
                                            onChange={(e) => setid_administrador(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Resto del formulario */}
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Prenda">Prenda</label>
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
                                        <label className="block text-white mb-2" htmlFor="Tela">Tela</label>
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
                                        <label className="block text-white mb-2" htmlFor="Estampado">Estampado</label>
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

                                {/* Talla, Bordado y precios */}
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Talla">Talla</label>
                                        <input
                                            type="text"
                                            id="Talla"
                                            value={Talla}
                                            onChange={(e) => setTalla(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Bordado">Bordado</label>
                                        <input
                                            type="text"
                                            id="Bordado"
                                            value={Bordado}
                                            onChange={(e) => setBordado(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="PInicial">Precio Inicial</label>
                                        <input
                                            type="number"
                                            id="PInicial"
                                            value={PInicial}
                                            onChange={(e) => setPInicial(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Precio Final */}
                                <div className="w-1/3">
                                    <label className="block text-white mb-2" htmlFor="PFinal">Precio Final</label>
                                    <input
                                        type="number"
                                        id="PFinal"
                                        value={PFinal}
                                        onChange={(e) => setPFinal(e.target.value)}
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-6 w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700"
                            >
                                Registrar Pedido
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RPedidos;
