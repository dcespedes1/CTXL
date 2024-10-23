import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/api/pedidos/';

function RPedidos({ setModalVisible }) { 
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
    const [id_Empleado, setid_Empleado] = useState('');
    const [id_administrador] = useState('Juan Perez');
    const [empleados] = useState([
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'María' },
        { id: 3, nombre: 'Pedro' },
    ]);
    const navigate = useNavigate();

    useEffect(() => {
        const precioBase = 8000;
        const nuevoPrecioFinal = Cantidad * precioBase;
        setPFinal(nuevoPrecioFinal);
    }, [Cantidad]);

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
                PInicial,
                PFinal,
                id_administrador,
                id_Empleado,
            });
            console.log('Respuesta de la API:', response.data);
            navigate('/app/ipedidos');
        } catch (error) {
            console.error('Error al registrar el pedido:', error);
        }
    };

    const closeModal = () => {
        setModalVisible(false); 
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
            onClick={closeModal} 
        >
            <div
                className="bg-black p-10 rounded-lg shadow-lg max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()} 
            >
                <h2 className="text-3xl font-bold mb-10 text-center text-white">Registro de Pedido</h2>
                <form onSubmit={store}>
                    <div className="grid grid-cols-2 gap-8">
                        {/* Primera columna */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-white mb-2" htmlFor="Cliente">Cliente</label>
                                <input
                                    type="text"
                                    id="Cliente"
                                    value={Cliente}
                                    onChange={(e) => setCliente(e.target.value)}
                                    className="w-full max-w-[250px] px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
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
                                        <option value="Afines">Afines</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
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
                            <div className="grid grid-cols-2 gap-4">
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

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-white mb-2" htmlFor="PInicial">Precio Inicial</label>
                                    <input
                                        type="number"
                                        id="PInicial"
                                        value={PInicial}
                                        onChange={(e) => setPInicial(Math.max(0, e.target.value))}
                                        className="w-full px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-white mb-2" htmlFor="PFinal">Precio Final</label>
                                    <input
                                        type="text"
                                        id="PFinal"
                                        value={formatCOP(PFinal)}
                                        readOnly
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="id_Empleado">Empleado</label>
                                <select
                                    id="id_Empleado"
                                    value={id_Empleado}
                                    onChange={(e) => setid_Empleado(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                >
                                    {empleados.map((empleado) => (
                                        <option key={empleado.id} value={empleado.id}>
                                            {empleado.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="id_administrador">Administrador</label>
                                <input
                                    type="text"
                                    id="id_administrador"
                                    value={id_administrador}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                    <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-500 text-white font-semibold  rounded-md mr-2 hover:bg-gray-700 transition duration-300"
                    >
                    Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
                    >
                        Registrar Pedido
                    </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default RPedidos;
