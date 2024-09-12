import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const IEmpleados = () => {
    const [data, setData] = useState([
        {
            id: 1,
            nombre: 'Juan Pérez',
            tipoDocumento: 'C.C',
            fechaNacimiento: '1990-05-15',
            correo: 'juan.perez@example.com',
            celular: '123456789',
        },
        {
            id: 2,
            nombre: 'María Gómez',
            tipoDocumento: 'C.E',
            fechaNacimiento: '1985-08-22',
            correo: 'maria.gomez@example.com',
            celular: '987654321',
        },
        {
            id: 3,
            nombre: 'Carlos Rodríguez',
            tipoDocumento: 'PA',
            fechaNacimiento: '1992-12-10',
            correo: 'carlos.rodriguez@example.com',
            celular: '555123456',
        },
        {
            id: 4,
            nombre: 'Ana Torres',
            tipoDocumento: 'C.C',
            fechaNacimiento: '1988-03-14',
            correo: 'ana.torres@example.com',
            celular: '321654987',
        },
        {
            id: 5,
            nombre: 'Luis Fernández',
            tipoDocumento: 'C.E',
            fechaNacimiento: '1995-07-30',
            correo: 'luis.fernandez@example.com',
            celular: '654321789',
        },
        {
            id: 6,
            nombre: 'Sofía Martínez',
            tipoDocumento: 'PA',
            fechaNacimiento: '1993-11-05',
            correo: 'sofia.martinez@example.com',
            celular: '987123456',
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const filteredData = data.filter((item) =>
        item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex h-screen bg-gray-800"> 
            {/* Main Content */}
            <main className="flex-1 flex flex-col p-10 text-white">
                {/* Header */}
                <div className="w-3/4 mt-20">
                    <div className="w-full flex justify-between">
                        <h1 className="text-4xl font-bold text-white"> 
                            Inventario Proveedores
                        </h1>
                    </div>
                </div>
                {/* Search and Filter */}
                <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Buscar por nombre"
                            className="bg-gray-800 text-white p-2 rounded-lg mr-4"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-purple-600 text-white px-3 py-1 rounded-lg">
                            Filtrar
                        </button>
                    </div>
                    <div>
                        <Link to="/app/rempleado" className="text-2xl p-2 hover:text-purple-400"> {/* Texto más pequeño */}
                            Registrar Nuevo
                        </Link>
                    </div>
                </div>
                {/* Tabla de Empleados */}
                <div className="overflow-x-auto border border-purple-200 shadow-2xl shadow-purple-800 mt-6"> {/* Enhanced shadow color */}
                    <table className="w-full bg-black"> {/* Fondo negro para la tabla */}
                        <thead className="bg-purple-600 text-white">
                            <tr>
                                <th className="p-3 text-center">Nombre</th>
                                <th className="p-3 text-center">Tipo de Documento</th>
                                <th className="p-3 text-center">Fecha de Nacimiento</th>
                                <th className="p-3 text-center">Correo</th>
                                <th className="p-3 text-center">Celular</th>
                                <th className="p-3 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-white">
                            {filteredData.map((item) => (
                                <tr key={item.id} className="border-b border-white">
                                    <td className="p-3">{item.nombre}</td>
                                    <td className="p-3">{item.tipoDocumento}</td>
                                    <td className="p-3">{item.fechaNacimiento}</td>
                                    <td className="p-3">{item.correo}</td>
                                    <td className="p-3">{item.celular}</td>
                                    <td className="p-3">
                                        <Link to="/app/aempleados">
                                            <button className="bg-purple-600 text-white px-3 py-1 rounded-lg mr-2">
                                                Editar
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="bg-purple-600 text-white px-3 py-1 rounded-lg"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default IEmpleados;