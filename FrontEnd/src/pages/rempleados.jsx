import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/Empleado/';

function REmpleados() {
    // Estados para los campos
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [TipoD, setTipoD] = useState('');
    const [NumeroD, setNumeroD] = useState('');
    const [FechaN, setFechaN] = useState('');
    const [Correo, setCorreo] = useState('');
    const [celular, setcelular] = useState('');
    const [id_administrador] = useState('Juan Perez');
    
    // Estados para errores de validación
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    // Validaciones
    const validate = () => {
        const newErrors = {};
        
        // Validar nombre (solo letras)
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!Nombre || !nameRegex.test(Nombre)) {
            newErrors.Nombre = 'El nombre solo puede contener letras.';
        }

        // Validar apellido (solo letras)
        if (!Apellido || !nameRegex.test(Apellido)) {
            newErrors.Apellido = 'El apellido solo puede contener letras.';
        }

        // Validar correo (debe terminar en .com)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!Correo || !emailRegex.test(Correo) || !Correo.endsWith('.com')) {
            newErrors.Correo = 'Por favor ingresa un correo válido que termine en ".com".';
        }

        // Validar celular (solo números, al menos 10 dígitos)
        const phoneRegex = /^[0-9]{10,}$/;
        if (!celular || !phoneRegex.test(celular)) {
            newErrors.celular = 'El número de celular debe tener al menos 10 dígitos y contener solo números.';
        }

        // Validar fecha de nacimiento (no debe ser mayor a 2025)
        const selectedDate = new Date(FechaN);
        const maxDate = new Date('2025-01-01');
        if (!FechaN || selectedDate >= maxDate) {
            newErrors.FechaN = 'La fecha de nacimiento no puede ser posterior a 2025.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Método para registrar al empleado
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
            navigate('/app/iempleado'); // Redirige a la página de empleados
        } catch (error) {
            console.error('Error al registrar el empleado:', error);
        }
    };

    return (
        <div className="flex h-screen">
            {/* Main Content */}
            <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
                {/* Registro */}
                <div className="flex justify-center items-center h-screen">
                    <div className="w-[800px] bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">
                            Registro Empleado
                        </h2>
                        <form onSubmit={store}>
                            <div className="grid grid-cols-2 gap-6">
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

                                {/* Campo de Apellido */}
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

                                <div className="col-span-2">
                                    <label className="block text-white mb-2" htmlFor="id_administrador">
                                        Administrador
                                    </label>
                                    <input
                                        type="text"
                                        id="id_administrador"
                                        value={id_administrador}
                                        className="w-1/2 px-4 py-2 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <Link to="/app/iempleado">
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
                                    Registrar Empleado
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default REmpleados;
