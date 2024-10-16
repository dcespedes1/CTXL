import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/api/pedidos/';

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
    const [PFinal, setPFinal] = useState(0);
    const [id_Empleado, setid_Empleado] = useState('');
    const [id_administrador, setid_administrador] = useState('');
    const [empleados, setEmpleados] = useState([{ id: 1, nombre: 'Juan' }, { id: 2, nombre: 'María' }, { id: 3, nombre: 'Pedro' }]); // Lista de empleados
    const navigate = useNavigate();

    // Función para actualizar el precio automáticamente según la cantidad
    useEffect(() => {
        const nuevoPrecio = Cantidad * 100; // Precio base multiplicado por la cantidad
        setPFinal(nuevoPrecio);
    }, [Cantidad]);

    // Función para formatear el precio en pesos colombianos (COP) con comas
    const formatCOP = (valor) => {
        return valor.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    };

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
                EspecificacionesEstampado,
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
                    <div className="w-[900px] bg-black p-10 rounded-lg shadow-2xl shadow-purple-600/100">
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
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                                className="w-full max-w-[120px] px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white mb-2" htmlFor="Prenda">Prenda</label>
                                            <select
                                                id="Prenda"
                                                value={Prenda}
                                                onChange={(e) => setPrenda(e.target.value)}
                                                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                                className="w-full max-w-[120px] px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                required
                                            >
                                                <option value="Sí">Sí</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Especificaciones del estampado, solo se muestra si el estampado es "Sí" */}
                                    {Estampado === 'Sí' && (
                                        <div>
                                            <label className="block text-white mb-2" htmlFor="EspecificacionesEstampado">Especificaciones del Estampado</label>
                                            <input
                                                type="text"
                                                id="EspecificacionesEstampado"
                                                value={EspecificacionesEstampado}
                                                onChange={(e) => setEspecificacionesEstampado(e.target.value)}
                                                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                                className="w-full max-w-[120px] px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                                className="w-full max-w-[120px] px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                                className="w-full max-w-[120px] px-2 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white mb-2" htmlFor="PFinal">Precio Final</label>
                                            <input
                                                type="text"
                                                id="PFinal"
                                                value={formatCOP(PFinal)} // Aquí se formatea el precio final
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
                                            type="number"
                                            id="id_administrador"
                                            value={id_administrador}
                                            onChange={(e) => setid_administrador(Math.max(0, e.target.value))}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
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

export default RPedidos
