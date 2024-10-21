import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/productos/';

function Rproductos() {
    const [CantidadR, setCantidad] = useState('');
    const [Material, setMaterial] = useState('');
    const [Colores, setColor] = useState('');
    const [id_administrador, setid_administrador] = useState('Juan Perez'); // Administrador bloqueado
    const [id_Empleado, setid_Empleado] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [mostrarColores, setMostrarColores] = useState(false); // Controla si se debe mostrar el campo de colores
    const [errors, setErrors] = useState({}); // Almacenar errores

    const navigate = useNavigate();

    // Cargar empleados y materiales
    useEffect(() => {
        const empleadosCargados = [
            { id: 1, nombre: 'Juan Perez' },
            { id: 2, nombre: 'Maria Rodriguez' },
            { id: 3, nombre: 'Carlos Sanchez' },
        ];

        const materialesCargados = [
            { id: 1, tipo: 'Algodón' },
            { id: 2, tipo: 'Poliéster' },
            { id: 3, tipo: 'Lana' },
        ];

        setEmpleados(empleadosCargados);
        setMateriales(materialesCargados);
    }, []);

    // Manejar cambio de material y mostrar el campo de colores
    const handleMaterialChange = (e) => {
        const selectedMaterial = e.target.value;
        setMaterial(selectedMaterial);

        // Mostrar el campo de colores solo para Lana y Poliéster
        if (selectedMaterial === 'Lana' || selectedMaterial === 'Poliéster') {
            setMostrarColores(true);
        } else {
            setMostrarColores(false);
            setColor(''); // Limpiar el color si no es necesario
        }
    };

    // Evitar valores negativos en el campo de cantidad
    const handleCantidadChange = (e) => {
        const value = e.target.value;
        if (value >= 0) {
            setCantidad(value);
        }
    };

    // Validaciones
    const validate = () => {
        const newErrors = {};

        // Validar cantidad
        if (!CantidadR || CantidadR <= 0) {
            newErrors.CantidadR = 'La cantidad debe ser un número positivo.';
        }

        // Validar selección de material
        if (!Material) {
            newErrors.Material = 'Selecciona un material.';
        }

        // Validar selección de color si es Lana o Poliéster
        if ((Material === 'Lana' || Material === 'Poliéster') && !Colores) {
            newErrors.Colores = 'Selecciona un color.';
        }

        // Validar selección de empleado
        if (!id_Empleado) {
            newErrors.id_Empleado = 'Selecciona un empleado.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Si no hay errores, retorna true
    };

    const store = async (e) => {
        e.preventDefault();
        
        if (!validate()) {
            return; // Detener si hay errores
        }

        try {
            const response = await axios.post(URI, {
                CantidadR,
                Material,
                Colores,
                id_administrador,
                id_Empleado,
            });
            console.log('Respuesta del servidor:', response.data);
            navigate('/app/iproducto'); // Redirige a la página de productos
        } catch (error) {
            console.error('Error al registrar el producto:', error);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Main Content */}
            <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
                {/* Registro */}
                <div className="flex justify-center items-center h-screen">
                    <div className="w-[800px] bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registrar producto</h2>
                        <form onSubmit={store}>
                            <div className="grid grid-cols-2 gap-6"> {/* Cambiado a 2 columnas */}
                                {/* Empleado primero */}
                                <div className="w-full">
                                    <label className="block text-white mb-2" htmlFor="id_Empleado">Empleado</label>
                                    <select
                                        id="id_Empleado"
                                        value={id_Empleado}
                                        onChange={(e) => setid_Empleado(e.target.value)}
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="">Selecciona un empleado</option>
                                        {empleados.map((empleado) => (
                                            <option key={empleado.id} value={empleado.id}>
                                                {empleado.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.id_Empleado && <p className="text-red-500 text-sm mt-1">{errors.id_Empleado}</p>}
                                </div>

                                {/* Cantidad */}
                                <div className="w-full">
                                    <label className="block text-white mb-2" htmlFor="Cantidad">Cantidad</label>
                                    <input
                                        type="number"
                                        id="Cantidad"
                                        value={CantidadR}
                                        onChange={handleCantidadChange}
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                    {errors.CantidadR && <p className="text-red-500 text-sm mt-1">{errors.CantidadR}</p>}
                                </div>

                                {/* Material */}
                                <div className="w-full">
                                    <label className="block text-white mb-2" htmlFor="Material">Material</label>
                                    <select
                                        id="Material"
                                        value={Material}
                                        onChange={handleMaterialChange}
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    >
                                        <option value="">Seleccionar material</option>
                                        {materiales.map((material) => (
                                            <option key={material.id} value={material.tipo}>
                                                {material.tipo}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.Material && <p className="text-red-500 text-sm mt-1">{errors.Material}</p>}
                                </div>

                                {/* Color (solo se muestra si es necesario) */}
                                {mostrarColores && (
                                    <div className="w-full">
                                        <label className="block text-white mb-2" htmlFor="Color">Color</label>
                                        <select
                                            id="Color"
                                            value={Colores}
                                            onChange={(e) => setColor(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        >
                                            <option value="">Selecciona un color</option>
                                            <option value="Rojo">Rojo</option>
                                            <option value="Azul">Azul</option>
                                            <option value="Verde">Verde</option>
                                            <option value="Amarillo">Amarillo</option>
                                            <option value="Negro">Negro</option>
                                        </select>
                                        {errors.Colores && <p className="text-red-500 text-sm mt-1">{errors.Colores}</p>}
                                    </div>
                                )}

                                {/* Administrador (campo bloqueado) */}
                                <div className="w-full">
                                    <label className="block text-white mb-2" htmlFor="id_administrador">Administrador</label>
                                    <input
                                        type="text"
                                        id="id_administrador"
                                        value={id_administrador}
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <Link to="/app/iproducto">
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
                                    Registrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Rproductos;
