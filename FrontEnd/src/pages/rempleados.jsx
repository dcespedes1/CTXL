import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/Empleado/';

function REmpleados({ setModalVisible }) { 
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [TipoD, setTipoD] = useState('');
    const [NumeroD, setNumeroD] = useState('');
    const [FechaN, setFechaN] = useState('');
    const [Correo, setCorreo] = useState('');
    const [celular, setcelular] = useState('');
    const [id_administrador] = useState('Juan Perez');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10,}$/;
        const selectedDate = new Date(FechaN);
        const maxDate = new Date('2025-01-01');

        if (!Nombre || !nameRegex.test(Nombre)) {
            newErrors.Nombre = 'El nombre solo puede contener letras.';
        }
        if (!Apellido || !nameRegex.test(Apellido)) {
            newErrors.Apellido = 'El apellido solo puede contener letras.';
        }
        if (!Correo || !emailRegex.test(Correo) || !Correo.endsWith('.com')) {
            newErrors.Correo = 'Por favor ingresa un correo válido que termine en ".com".';
        }
        if (!celular || !phoneRegex.test(celular)) {
            newErrors.celular = 'El número de celular debe tener al menos 10 dígitos y contener solo números.';
        }
        if (!FechaN || selectedDate >= maxDate) {
            newErrors.FechaN = 'La fecha de nacimiento no puede ser posterior a 2025.';
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
                Nombre,
                Apellido,
                TipoD,
                NumeroD,
                FechaN,
                Correo,
                celular,
                id_administrador,
            });
            console.log('Respuesta del servidor:', response.data);
            navigate('/app/iempleado'); 
        } catch (error) {
            console.error('Error al registrar el empleado:', error);
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
                className="bg-black p-6 sm:p-10 rounded-lg shadow-lg max-w-full sm:max-w-2xl w-full mx-4 sm:mx-0 max-h-screen overflow-y-auto"
                onClick={(e) => e.stopPropagation()} 
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-white">
                    Registro de Empleado
                </h2>
                <form onSubmit={store}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label className="block text-white mb-2" htmlFor="Nombre">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="Nombre"
                                value={Nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className={`w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.Nombre ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.Nombre && <p className="text-red-500 text-sm mt-1">{errors.Nombre}</p>}
                        </div>

                        <div>
                            <label className="block text-white mb-2" htmlFor="Apellido">
                                Apellido
                            </label>
                            <input
                                type="text"
                                id="Apellido"
                                value={Apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                className={`w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.Apellido ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.Apellido && <p className="text-red-500 text-sm mt-1">{errors.Apellido}</p>}
                        </div>

                        <div>
                            <label className="block text-white mb-2" htmlFor="TipoD">
                                Tipo Documento
                            </label>
                            <select
                                id="TipoD"
                                value={TipoD}
                                onChange={(e) => setTipoD(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            >
                                <option value="">Selecciona un tipo</option>
                                <option value="CC">Cédula de Ciudadanía (CC)</option>
                                <option value="TI">Tarjeta de Identidad (TI)</option>
                                <option value="NIT">Número de Identificación Tributaria (NIT)</option>
                                <option value="CE">Cédula de Extranjería (CE)</option>
                                <option value="PA">Pasaporte (PA)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-white mb-2" htmlFor="NumeroD">
                                Número Documento
                            </label>
                            <input
                                type="text"
                                id="NumeroD"
                                value={NumeroD}
                                onChange={(e) => setNumeroD(e.target.value)}
                                className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-2" htmlFor="FechaN">
                                Fecha Nacimiento
                            </label>
                            <input
                                type="date"
                                id="FechaN"
                                value={FechaN}
                                onChange={(e) => setFechaN(e.target.value)}
                                className={`w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.FechaN ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.FechaN && <p className="text-red-500 text-sm mt-1">{errors.FechaN}</p>}
                        </div>

                        <div>
                            <label className="block text-white mb-2" htmlFor="Correo">
                                Correo
                            </label>
                            <input
                                type="email"
                                id="Correo"
                                value={Correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                className={`w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.Correo ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.Correo && <p className="text-red-500 text-sm mt-1">{errors.Correo}</p>}
                        </div>

                        {/* Celular y Administrador juntos */}
                        <div className="col-span-2 grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2" htmlFor="celular">
                                    Celular
                                </label>
                                <input
                                    type="text"
                                    id="celular"
                                    value={celular}
                                    onChange={(e) => setcelular(e.target.value)}
                                    className={`w-full px-3 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.celular ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.celular && <p className="text-red-500 text-sm mt-1">{errors.celular}</p>}
                            </div>

                            <div>
                                <label className="block text-white mb-2" htmlFor="id_administrador">
                                    Administrador
                                </label>
                                <input
                                    type="text"
                                    id="id_administrador"
                                    value={id_administrador}
                                    className="w-full px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>

                    {/* Botones */}
                    <div className="flex justify-center space-x-4 mt-6">
                        <button
                            onClick={closeModal}
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
                        >
                            Registrar Empleado
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default REmpleados;
