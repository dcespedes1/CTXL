import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgAdd } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";

const URI = 'http://localhost:8000/api/Empleado/';

function IEmpleados() {
  const [Empleados, setEmpleados] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getEmpleados();
  }, []);

  const getEmpleados = async () => {
    try {
      const res = await axios.get(URI);
      setEmpleados(res.data);
    } catch (error) {
      console.error('Error al obtener empleados:', error);
    }
  };

  const filteredEmpleados = Empleados.filter(Empleado =>
    Object.values(Empleado).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex h-screen bg-gray-800">
      <main className="flex-1 flex flex-col p-10 text-white">
        <div className="w-3/4 mt-20">
          <div className="w-full flex justify-between">
            <h1 className="text-4xl font-bold text-white">
              Inventario Empleado
            </h1>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full max-w-xs p-2 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <Link 
              to="/app/rempleado"
              onMouseEnter={() => setShowTooltip('add')} 
              onMouseLeave={() => setShowTooltip(null)}
            >
              <CgAdd className="text-5xl text-purple-600" />
            </Link>
            {showTooltip === 'add' && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-purple-600 text-white text-lg rounded shadow-lg z-10">
                Registrar Nuevo
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto border border-purple-200 shadow-2xl shadow-purple-800 mt-6 rounded-lg">
          <table className="w-full bg-gray-900">
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
              {filteredEmpleados.length > 0 ? (
                filteredEmpleados.map((Empleado) => (
                  <tr key={Empleado.id_Empleado} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700">
                    <td className="p-3">{Empleado.Nombre}</td>
                    <td className="p-3">{Empleado.TipoD}</td>
                    <td className="p-3">{Empleado.FechaN}</td>
                    <td className="p-3">{Empleado.Correo}</td>
                    <td className="p-3">{Empleado.celular}</td>
                    <td className="p-3">
                      <Link
                        to={`/app/aempleados/${Empleado.id_Empleado}`}
                        onMouseEnter={() => setShowTooltip(Empleado.id_Empleado)}
                        onMouseLeave={() => setShowTooltip(null)}
                      >
                        <VscEdit className="text-3xl text-purple-600" />
                      </Link>
                      {showTooltip === Empleado.id_Empleado && (
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-purple-600 text-white text-sm rounded">
                          Editar
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center bg-gray-900">
                    No hay datos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          
          {filteredEmpleados.length === 0 && (
            <div className="text-center py-4 text-gray-300 bg-gray-900">
            Mostrando filas 0 a 0 de 0
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default IEmpleados;
