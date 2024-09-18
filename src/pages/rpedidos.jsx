import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/pedidos/';

function RPedidos() {
    const [Cliente, setCliente] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Empleado, setEmpleado] = useState('');
    const [Prenda, setPrenda] = useState('');
    const [Tela, setTela] = useState('');
    const [Estampado, setEstampado] = useState('');
    const [Talla, setTalla] = useState('');
    const [Bordado, setBordado] = useState('');
    const [PInicial, setPInicial] = useState('');
    const [PFinal, setPFinal] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [prendas, setPrendas] = useState([]);
    const [telas, setTelas] = useState([]);

    const navigate = useNavigate();

    // Cargar empleados, prendas y telas
    useEffect(() => {
        const empleadosCargados = [
            { id: 1, nombre: 'Juan Perez' },
            { id: 2, nombre: 'Maria Rodriguez' },
            { id: 3, nombre: 'Carlos Sanchez' },
        ];
        const prendasCargadas = [
            { id: 1, tipo: 'Camiseta' },
            { id: 2, tipo: 'Pantalón' },
            { id: 3, tipo: 'Chaqueta' },
        ];
        const telasCargadas = [
            { id: 1, tipo: 'Algodón' },
            { id: 2, tipo: 'Poliéster' },
            { id: 3, tipo: 'Lana' },
        ];

        setEmpleados(empleadosCargados);
        setPrendas(prendasCargadas);
        setTelas(telasCargadas);
    }, []);

    const store = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URI, {
                Cliente,
                Cantidad,
                Empleado,
                Prenda,
                Tela,
                Estampado,
                Talla,
                Bordado,
                PInicial,
                PFinal,
            });
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
                                        <label className="block text-white mb-2" htmlFor="Cliente">
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
                                        <label className="block text-white mb-2" htmlFor="Empleado">
                                            Empleado
                                        </label>
                                        <select
                                            id="Empleado"
                                            value={Empleado}
                                            onChange={(e) => setEmpleado(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        >
                                            <option value="">Selecciona un empleado</option>
                                            {empleados.map((empleado) => (
                                                <option key={empleado.id} value={empleado.nombre}>
                                                    {empleado.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Segunda fila */}
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Prenda">
                                            Prenda
                                        </label>
                                        <select
                                            id="Prenda"
                                            value={Prenda}
                                            onChange={(e) => setPrenda(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        >
                                            <option value="">Selecciona una prenda</option>
                                            {prendas.map((prenda) => (
                                                <option key={prenda.id} value={prenda.tipo}>
                                                    {prenda.tipo}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Tela">
                                            Tela
                                        </label>
                                        <select
                                            id="Tela"
                                            value={Tela}
                                            onChange={(e) => setTela(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        >
                                            <option value="">Selecciona una tela</option>
                                            {telas.map((tela) => (
                                                <option key={tela.id} value={tela.tipo}>
                                                    {tela.tipo}
                                                </option>
                                            ))}
                                        </select>
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

                                {/* Tercera fila */}
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
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
                                    <div className="w-1/3">
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
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="PInicial">
                                            Precio Inicial
                                        </label>
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

                                {/* Cuarta fila */}
                                <div className="w-1/3">
                                    <label className="block text-white mb-2" htmlFor="PFinal">
                                        Precio Final
                                    </label>
                                    <input
                                        type="number"
                                        id="PFinal"
                                        value={PFinal}
                                        onChange={(e) => setPFinal(e.target.value)}
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>

                                <div className="text-center">
                                    <Link to="/app/ipedidos">
                                        <button
                                            type="button"
                                            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-900 transition duration-200 mr-2"
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
