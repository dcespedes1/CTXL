import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/productos/';

function RproductosE({ setModalVisible }) { // Asegúrate de recibir setModalVisible como prop
    const [CantidadR, setCantidad] = useState('');
    const [Material, setMaterial] = useState('');
    const [Colores, setColor] = useState('');
    const [id_administrador] = useState('Juan Perez');
    const [id_Empleado, setid_Empleado] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [mostrarColores, setMostrarColores] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

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

    const handleMaterialChange = (e) => {
        const selectedMaterial = e.target.value;
        setMaterial(selectedMaterial);

        if (selectedMaterial === 'Lana' || selectedMaterial === 'Poliéster') {
            setMostrarColores(true);
        } else {
            setMostrarColores(false);
            setColor('');
        }
    };

    const handleCantidadChange = (e) => {
        const value = e.target.value;
        if (value >= 0) {
            setCantidad(value);
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!CantidadR || CantidadR <= 0) {
            newErrors.CantidadR = 'La cantidad debe ser un número positivo.';
        }

        if (!Material) {
            newErrors.Material = 'Selecciona un material.';
        }

        if ((Material === 'Lana' || Material === 'Poliéster') && !Colores) {
            newErrors.Colores = 'Selecciona un color.';
        }

        if (!id_Empleado) {
            newErrors.id_Empleado = 'Selecciona un empleado.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const store = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
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
            navigate('/app/iproducto');
        } catch (error) {
            console.error('Error al registrar el producto:', error);
        }
    };

    const closeModal = () => {
        setModalVisible(false); // Cerrar el modal usando la función de props
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
            onClick={closeModal} // Cerrar modal al hacer clic en el fondo
        >
            <div
                className="bg-black p-8 rounded-lg shadow-lg max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()} // Evitar cerrar el modal al hacer clic en su contenido
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-white">Registrar Material</h2>
                <form onSubmit={store}>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-white mb-2" htmlFor="id_Empleado">Empleado</label>
                            <select
                                id="id_Empleado"
                                value={id_Empleado}
                                onChange={(e) => setid_Empleado(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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

                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-white mb-2" htmlFor="Cantidad">Cantidad</label>
                            <input
                                type="number"
                                id="Cantidad"
                                value={CantidadR}
                                onChange={handleCantidadChange}
                                className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            {errors.CantidadR && <p className="text-red-500 text-sm mt-1">{errors.CantidadR}</p>}
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <label className="block text-white mb-2" htmlFor="Material">Material</label>
                            <select
                                id="Material"
                                value={Material}
                                onChange={handleMaterialChange}
                                className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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

                        {mostrarColores && (
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-white mb-2" htmlFor="Color">Color</label>
                                <select
                                    id="Color"
                                    value={Colores}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                    </div>

                    <div className="text-center mt-6">
                        <button
                            onClick={closeModal}
                            type="button"
                            className="px-6 py-3 bg-gray-500 text-white font-semibold  rounded-md mr-2 hover:bg-gray-700 transition duration-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
                        >
                            Registrar Material
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RproductosE;
