import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgAdd } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";
import { FaBoxes, FaCogs, FaPalette } from "react-icons/fa"; // Íconos agregados
import Rproductos from './rproductos'; 

const URI = 'http://localhost:8000/api/productos/';

function IProductosE() {
  const [productos, setProductos] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false); 
  const [numRecords, setNumRecords] = useState(5); // Default para mostrar 5 registros

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    try {
      const res = await axios.get(URI);
      setProductos(res.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  const filteredProductos = productos.filter(producto =>
    Object.values(producto).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex h-screen bg-slate-500 ">
      <main className="flex-1 flex flex-col p-10 bg-slate-500 text-white">
        <div className="w-3/4 mt-20">
          <h1 className="text-4xl font-bold text-white">Inventario de Material</h1>
        </div>
        
        <div className="my-8 flex justify-between items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full max-w-xs p-3 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Botón para registrar un nuevo producto con un icono más pequeño */}
          <div className="relative">
            <button
              onClick={() => setModalVisible(true)} 
              onMouseEnter={() => setShowTooltip('add')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <CgAdd className='text-4xl text-purple-600 hover:text-purple-700 transition duration-300' />
            </button>
            {showTooltip === 'add' && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-purple-600 text-white text-lg rounded shadow-lg z-10">
                Registrar Nuevo
              </div>
            )}
          </div>
        </div>

        {/* Tabla de productos */}
        <div className="overflow-x-auto bg-gray-900 border border-purple-200 shadow-2xl shadow-purple-600/100 rounded-lg">
          <table className="min-w-full text-sm text-left text-white-400">
            <thead className="bg-purple-700 text-white-300 uppercase">
              <tr>
                <th className="px-6 py-3"><FaBoxes className="inline-block text-orange-400" /> Cantidad</th>
                <th className="px-6 py-3"><FaCogs className="inline-block text-teal-400" /> Material</th>
                <th className="px-6 py-3"><FaPalette className="inline-block text-yellow-400" /> Color</th>
                <th className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProductos.length > 0 ? (
                filteredProductos.slice(0, numRecords).map((producto) => (
                  <tr 
                    key={producto.id_producto} 
                    className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td className="px-6 py-4"><FaBoxes className="inline-block mr-2 text-orange-400" />{producto.CantidadR}</td>
                    <td className="px-6 py-4"><FaCogs className="inline-block mr-2 text-teal-400" />{producto.Material}</td>
                    <td className="px-6 py-4"><FaPalette className="inline-block mr-2 text-yellow-400" />{producto.Colores}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/app/aproducto/${producto.id_producto}`}
                        className="text-2xl text-purple-600 hover:text-purple-400 transition duration-300"
                        onMouseEnter={() => setShowTooltip(producto.id_producto)}
                        onMouseLeave={() => setShowTooltip(null)}
                      >
                        <VscEdit />
                      </Link>
                      {showTooltip === producto.id_producto && (
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-purple-600 text-white text-sm rounded">
                          Editar
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center">
                    No hay datos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Mostrar selector de registros en la parte inferior de la tabla */}
          <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <span className="text-sm">Mostrando {Math.min(numRecords, filteredProductos.length)} de {filteredProductos.length} productos</span>
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

        {/* Modal para registrar un nuevo producto */}
        {modalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <Rproductos setModalVisible={setModalVisible} /> {/* Modal de registro de productos */}
          </div>
        )}
      </main>
    </div>
  );
}

export default IProductosE;
