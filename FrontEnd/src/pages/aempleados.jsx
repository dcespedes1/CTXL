import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const URI = 'http://localhost:8000/api/Empleado/';

function AEmpleados() {
    const [Nombre, setNombre] = useState('');
    const [TipoD, setTipoD] = useState('');
    const [NumeroD, setNumeroD] = useState('');
    const [FechaN, setFechaN] = useState('');
    const [Correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [id_administrador, setIdAdministrador] = useState('');
    const navigate = useNavigate();
    const {id_Empleado} = useParams();

    useEffect(() => {
        const fetchEmployeeById = async () => {
            try {
                const res = await axios.get(`${URI}${id_Empleado}`);
                console.log(res.data); // Verifica que el campo celular existe
                setNombre(res.data.Nombre);
                setTipoD(res.data.TipoD);
                setNumeroD(res.data.NumeroD);
                setFechaN(res.data.FechaN.split(' ')[0]);
                setCorreo(res.data.Correo);
                setCelular(res.data.celular); 
                setIdAdministrador(res.data.id_administrador);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };

        fetchEmployeeById();
    }, [id_Empleado]);

    const updateEmpleado = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${URI}${id_Empleado}`, {
                Nombre:Nombre,
                TipoD:TipoD,
                NumeroD:NumeroD,
                FechaN:FechaN,
                Correo:Correo,
                celular:celular, 
                id_administrador:id_administrador,
            });
            navigate("/app/iempleado");
        } catch (error) {
            console.error("Error updating employee data:", error);
        }
    };

    return (
        <div className="flex h-screen">
            <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
                <div className="flex justify-center items-center h-screen">
                    <div className="w-[800px] bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
                        <h2 className="text-3xl font-bold mb-8 text-center text-white">Actualizar Empleado</h2>
                        <form onSubmit={updateEmpleado}>
                            <div className="space-y-6">
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="Nombre">Nombre</label>
                                        <input
                                            type="text"
                                            id="Nombre"
                                            value={Nombre}
                                            onChange={(e) => setNombre(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="TipoD">Tipo Documento</label>
                                        <select
                                            id="TipoD"
                                            value={TipoD}
                                            onChange={(e) => setTipoD(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        >
                                            <option value="">Selecciona un tipo</option>
                                            <option value="CC">Cédula de Ciudadanía (CC)</option>
                                            <option value="CE">Cédula de Extranjería (CE)</option>
                                            <option value="PA">Pasaporte (PA)</option>
                                        </select>
                                    </div>
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="NumeroD">Número Documento</label>
                                        <input
                                            type="text"
                                            id="NumeroD"
                                            value={NumeroD}
                                            onChange={(e) => setNumeroD(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex space-x-4">
                                    <div className="w-1/3">
                                        <label className="block text-white mb-2" htmlFor="FechaN">Fecha Nacimiento</label>
                                        <input
                                            type="date"
                                            id="FechaN"
                                            value={FechaN}
                                            onChange={(e) => setFechaN(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-white mb-2" htmlFor="Correo">Correo</label>
                                        <input
                                            type="email"
                                            id="Correo"
                                            value={Correo}
                                            onChange={(e) => setCorreo(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-white mb-2" htmlFor="celular">Celular</label>
                                        <input
                                            type="text"
                                            id="celular"
                                            value={celular}
                                            onChange={(e) => setCelular(e.target.value)}
                                            className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-1/6">
                                    <label className="block text-white mb-2" htmlFor="id_administrador">Administrador</label>
                                    <input
                                        type="number"
                                        id="id_administrador"
                                        value={id_administrador}
                                        onChange={(e) => setIdAdministrador(e.target.value)}
                                        className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <Link to="/app/iempleado">
                                        <button
                                            type="button"
                                            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-900 transition duration-200"
                                        >
                                            Cancelar
                                        </button>
                                    </Link>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
                                    >
                                        Actualizar Empleado
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
export default AEmpleados;
