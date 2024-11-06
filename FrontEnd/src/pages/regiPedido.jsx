import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/api/pedidos/';
const URI_ADMIN = 'http://localhost:8000/api/administrador';
const URI_EMPLEADO = 'http://localhost:8000/api/empleado';

function RPedidos() { 
    const [Cliente, setCliente] = useState('');
    const [Cantidad, setCantidad] = useState(1);
    const [Prenda, setPrenda] = useState('Uniformes');
    const [Tela, setTela] = useState('Algodón');
    const [Estampado, setEstampado] = useState('No');
    const [EspecificacionesEstampado, setEspecificacionesEstampado] = useState('');
    const [Talla, setTalla] = useState('S');
    const [Bordado, setBordado] = useState('No');
    const [PFinal, setPFinal] = useState(0);
    const [id_Empleado, setid_Empleado] = useState('');
    const [id_administrador, setid_administrador] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [administrador, setAdministrador] = useState([]);

    const navigate = useNavigate();

    // Precios base según tipo de prenda
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const precioBasePrenda = {
        Uniformes: 30000,
        Camisetas: 15000,
        Chalecos: 25000,
        Chaquetas: 50000,
    };

    useEffect(() => {
        // Actualizar el precio final cuando cambie la cantidad o la prenda
        const nuevoPrecioBase = precioBasePrenda[Prenda] || 0;
        const nuevoPrecioFinal = nuevoPrecioBase * Cantidad;
        setPFinal(nuevoPrecioFinal);
    }, [Cantidad, Prenda, precioBasePrenda]);

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
        const fetchEmpleados = async () => {
            try {
                const response = await axios.get(URI_EMPLEADO);
                setEmpleados(response.data);
            } catch (error) {
                console.error('Error al obtener empleados:', error);
            }
        };
        fetchEmpleados();
    }, []);

    const formatCOP = (valor) => {
        return valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    };

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
                PFinal,
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
        <div className="bg-slate-300 p-4 sm:p-10 flex justify-center items-center min-h-screen">
            <div className="bg-slate-900 p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-2xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro de Pedido</h2>
                <form onSubmit={store}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Primera columna */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-white mb-2" htmlFor="Cliente">Cliente</label>
                                <input
                                    type="text"
                                    id="Cliente"
                                    value={Cliente}
                                    onChange={(e) => setCliente(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                        className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-white mb-2" htmlFor="Prenda">Prenda</label>
                                    <select
                                        id="Prenda"
                                        value={Prenda}
                                        onChange={(e) => setPrenda(e.target.value)}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="Uniformes">Uniformes</option>
                                        <option value="Camisetas">Camisetas</option>
                                        <option value="Chalecos">Chalecos</option>
                                        <option value="Chaquetas">Chaquetas</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white mb-2" htmlFor="Tela">Tela</label>
                                    <select
                                        id="Tela"
                                        value={Tela}
                                        onChange={(e) => setTela(e.target.value)}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="Algodón">Algodón</option>
                                        <option value="Poliéster">Poliéster</option>
                                        <option value="Lana">Lana</option>
                                        <option value="Mezcla">Mezcla</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-white mb-2" htmlFor="Estampado">Estampado</label>
                                    <select
                                        id="Estampado"
                                        value={Estampado}
                                        onChange={(e) => setEstampado(e.target.value)}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="Sí">Sí</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                            {Estampado === 'Sí' && (
                                <div>
                                    <label className="block text-white mb-2" htmlFor="EspecificacionesEstampado">Especificaciones del Estampado</label>
                                    <input
                                        type="text"
                                        id="EspecificacionesEstampado"
                                        value={EspecificacionesEstampado}
                                        onChange={(e) => setEspecificacionesEstampado(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                            )}
                        </div>

                        {/* Segunda columna */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white mb-2" htmlFor="Talla">Talla</label>
                                    <select
                                        id="Talla"
                                        value={Talla}
                                        onChange={(e) => setTalla(e.target.value)}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-white mb-2" htmlFor="Bordado">Bordado</label>
                                    <select
                                        id="Bordado"
                                        value={Bordado}
                                        onChange={(e) => setBordado(e.target.value)}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="Sí">Sí</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="id_Empleado">Empleado</label>
                                <select
                                    id="id_Empleado"
                                    value={id_Empleado}
                                    onChange={(e) => setid_Empleado(e.target.value)}
                                    className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                >
                                    <option value="">Seleccione Empleado</option>
                                    {empleados.map((empleado) => (
                                        <option key={empleado.id_Empleado} value={empleado.id_Empleado}>
                                            {empleado.Nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="id_administrador">Administrador</label>
                                <select
                                    id="id_administrador"
                                    value={id_administrador}
                                    onChange={(e) => setid_administrador(e.target.value)}
                                    className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                >
                                    <option value="">Seleccione Administrador</option>
                                    {administrador.map((admin) => (
                                        <option key={admin.id_administrador} value={admin.id_administrador}>
                                            {admin.Nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="PFinal">Precio Final</label>
                                <input
                                    type="text"
                                    id="PFinal"
                                    value={formatCOP(PFinal)}
                                    readOnly
                                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Registrar Pedido
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RPedidos;
