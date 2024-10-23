import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgAdd } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";
import REmpleados from '../pages/rempleados'; // Asegúrate de importar el componente modal

const URI = 'http://localhost:8000/api/Empleado/';

function IEmpleados() {
  const [Empleados, setEmpleados] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para el modal
  const [numRecords, setNumRecords] = useState(5); // Estado para controlar el número de registros por página

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
      <main className="flex-1 flex flex-col p-10 text-white  bg-slate-400 ">
        <div className="w-3/4 mt-20">
          <div className="w-full flex justify-between">
            <h1 className="text-4xl font-bold text-black">
              Inventario Empleados
            </h1>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 space-x-4">
          <div className="flex items-center w-full">
            {/* Campo de búsqueda más amplio */}
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full max-w-xs p-3 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            {/* Botón más pequeño para registrar un nuevo empleado */}
            <button 
              onClick={() => setModalVisible(true)} // Mostrar el modal al hacer clic
              onMouseEnter={() => setShowTooltip('add')} 
              onMouseLeave={() => setShowTooltip(null)}
            >
              <CgAdd className="text-4xl text-purple-600 hover:text-purple-700 transition duration-300" />
            </button>
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
                filteredEmpleados.slice(0, numRecords).map((Empleado) => (
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
                        className="text-2xl text-purple-600 hover:text-purple-400 transition duration-300"
                      >
                        <VscEdit />
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

          {/* Mostrar selector de registros en la parte inferior de la tabla */}
          <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <span className="text-sm">Mostrando {Math.min(numRecords, filteredEmpleados.length)} de {filteredEmpleados.length} empleados</span>
            <div className="flex items-center space-x-2">
              <label htmlFor="numRecords" className="text-sm">Registros por página:</label>
              <select
                id="numRecords"
                value={numRecords}
                onChange={(e) => setNumRecords(parseInt(e.target.value))}
                className="p-2 bg-gray-800 text-white rounded-md border border-purple-500"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>

        {modalVisible && <REmpleados setModalVisible={setModalVisible} />} {/* Mostrar el modal */}
      </main>
    </div>
  );
}

export default IEmpleados;
