import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/api/pedidos/';
const URI_ADMIN = 'http://localhost:8000/api/administrador';

function RPedidos() {
    const [Cliente, setCliente] = useState('');
    const [Cantidad, setCantidad] = useState(1);
    const [Prenda, setPrenda] = useState('Uniformes');
    const [Tela, setTela] = useState('Algodón');
    const [Estampado, setEstampado] = useState('No');
    const [EspecificacionesEstampado, setEspecificacionesEstampado] = useState('');
    const [Talla, setTalla] = useState('S');
    const [Bordado, setBordado] = useState('No');
    const [PInicial, setPInicial] = useState(0);
    const [PFinal, setPFinal] = useState(8000);
    const [FechaEntrega, setFechaEntrega] = useState('');
    const [DireccionEntrega, setDireccionEntrega] = useState('Local');
    const [TelefonoContacto, setTelefonoContacto] = useState('');
    const [id_Empleado, setid_Empleado] = useState('');
    const [id_administrador, setid_administrador] = useState('');
    const [empleados] = useState([
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'María' },
        { id: 3, nombre: 'Pedro' },
    ]);
    const navigate = useNavigate();
    const [administrador, setAdministrador] = useState([]);
    const fabricOptions = [
        'Algodón', 'Poliéster', 'Lana', 'Mezcla', 'Seda', 'Denim', 'Lino', 'Nylon', 
        'Spandex', 'Rayón', 'Twill', 'Velvet', 'Chiffon', 'Canvas', 'Silk', 'Acrylic'
    ];
    const deliveryOptions = [
        'Local', 'Domicilio 1', 'Domicilio 2', 'Otro'
    ];

    useEffect(() => {
        const fetchAdministrador = async () => {
            try {
                const response = await axios.get(URI_ADMIN);
                setAdministrador(response.data);
            } catch (error) {
                console.error('Error al obtener administradores:', error);
            }
        };
        fetchAdministrador();
    }, []);

    useEffect(() => {
        const precioBase = 8000;
        const nuevoPrecioFinal = Cantidad * precioBase;
        setPFinal(nuevoPrecioFinal);
    }, [Cantidad]);

    const store = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URI, {
                Cliente,
                Cantidad,
                Prenda,
                Tela,
                Estampado,
                EspecificacionesEstampado,
                Talla,
                Bordado,
                PInicial,
                PFinal,
                FechaEntrega,
                DireccionEntrega,
                TelefonoContacto,
                id_administrador,
                id_Empleado,
            });
            console.log('Respuesta de la API:', response.data);
            navigate('/admin/ipedidos');
        } catch (error) {
            console.error('Error al registrar el pedido:', error);
        }
    };

    return (
        <div className=" bg-slate-300 p-4 sm:p-10 flex justify-center items-center min-h-screen">
            <div className="bg-slate-900 p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro de Pedido</h2>
                <form onSubmit={store}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-white mb-2" htmlFor="Cliente">Cliente</label>
                                <input
                                    type="text"
                                    id="Cliente"
                                    value={Cliente}
                                    onChange={(e) => setCliente(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-blue-500"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white mb-2" htmlFor="Cantidad">Cantidad</label>
                                    <input
                                        type="number"
                                        id="Cantidad"
                                        value={Cantidad}
                                        onChange={(e) => setCantidad(Math.max(1, e.target.value))}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-blue-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-white mb-2" htmlFor="Prenda">Prenda</label>
                                    <select
                                        id="Prenda"
                                        value={Prenda}
                                        onChange={(e) => setPrenda(e.target.value)}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-blue-500"
                                        required
                                    >
                                        <option value="Uniformes">Uniformes</option>
                                        <option value="Camisetas">Camisetas</option>
                                        <option value="Chalecos">Chalecos</option>
                                        <option value="Chaquetas">Chaquetas</option>
                                        <option value="Afines">Afines</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="FechaEntrega">Fecha de Entrega</label>
                                <input
                                    type="date"
                                    id="FechaEntrega"
                                    value={FechaEntrega}
                                    onChange={(e) => setFechaEntrega(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="DireccionEntrega">Dirección de Entrega</label>
                                <select
                                    id="DireccionEntrega"
                                    value={DireccionEntrega}
                                    onChange={(e) => setDireccionEntrega(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-blue-500"
                                    required
                                >
                                    {deliveryOptions.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="TelefonoContacto">Teléfono de Contacto</label>
                                <input
                                    type="tel"
                                    id="TelefonoContacto"
                                    value={TelefonoContacto}
                                    onChange={(e) => setTelefonoContacto(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-white mb-2" htmlFor="Tela">Tela</label>
                                <select
                                    id="Tela"
                                    value={Tela}
                                    onChange={(e) => setTela(e.target.value)}
                                    className="w-full px-2 py-2 border rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-blue-500"
                                    required
                                >
                                    {fabricOptions.map((fabric) => (
                                        <option key={fabric} value={fabric}>{fabric}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex justify-center space-x-4 mt-6">
                                <button
                                    onClick={() => navigate('/admin/ipedidos')}
                                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300"
                                >
                                    Guardar Pedido
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RPedidos;
