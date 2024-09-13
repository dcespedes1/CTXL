import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/api/Empleado/';

function IEmpleados() {
  const [Empleados, setEmpleados] = useState([]);
  useEffect(() => {
    getEmpleados();
  }, []);

  const getEmpleados = async () => {
    const res = await axios.get(URI);
    setEmpleados(res.data);
  };
  const deleteEmpleado = async (id_Empleado) => {
    await axios.delete(`${URI}${id_Empleado}`);
    getEmpleados();
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex h-screen bg-gray-800">
      <main className="flex-1 flex flex-col p-10 text-white">
        <div className="w-3/4 mt-20">
          <div className="w-full flex justify-between">
            <h1 className="text-4xl font-bold text-white">
              Inventario Proveedores
            </h1>
          </div>
        </div>
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
            <Link to="/app/rempleado" className="text-2xl p-2 hover:text-purple-400">
              Registrar Nuevo
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto border border-purple-200 shadow-2xl shadow-purple-800 mt-6">
          <table className="w-full bg-black">
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
              {Empleados.map((Empleado) => (
                <tr key={Empleado.id_Empleado} className="border-b border-white">
                  <td className="p-3">{Empleado.Nombre}</td>
                  <td className="p-3">{Empleado.TipoD}</td>
                  <td className="p-3">{Empleado.FechaN}</td>
                  <td className="p-3">{Empleado.Correo}</td>
                  <td className="p-3">{Empleado.celular}</td>
                  <td className="p-3">
                    <Link to={`/app/aempleados/${Empleado.id_Empleado}`}>
                      <button className="bg-purple-600 text-white px-3 py-1 rounded-lg mr-2">
                        Editar
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteEmpleado(Empleado.id_Empleado)}
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
