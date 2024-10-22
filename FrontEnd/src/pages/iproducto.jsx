import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgAdd } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";
import Rproductos from '../pages/rproductos'; 

const URI = 'http://localhost:8000/api/productos/';

function IProductos() {
  const [productos, setProductos] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false); 

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
    <div className="flex h-screen bg-purple-800">
      <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white">
        <div className="w-3/4 mt-20">
          <h1 className="text-4xl font-bold text-white">Inventario de Productos</h1>
        </div>
        <div className="my-8 flex justify-between items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full max-w-xs p-2 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="relative ml-4">
            <button
              onClick={() => setModalVisible(true)} // Abrir el modal al hacer clic en el icono
              onMouseEnter={() => setShowTooltip('add')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <CgAdd className='text-5xl text-purple-600' />
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
                <th className="px-6 py-3">Cantidad</th>
                <th className="px-6 py-3">Material</th>
                <th className="px-6 py-3">Color</th>
                <th className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredProductos.length > 0 ? (
                filteredProductos.map((producto) => (
                  <tr key={producto.id_producto} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700">
                    <td className="px-6 py-4">{producto.CantidadR}</td>
                    <td className="px-6 py-4">{producto.Material}</td>
                    <td className="px-6 py-4">{producto.Colores}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/app/aproducto/${producto.id_producto}`}
                        onMouseEnter={() => setShowTooltip(producto.id_producto)}
                        onMouseLeave={() => setShowTooltip(null)}
                      >
                        <VscEdit className='text-3xl text-purple-600' />
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

          {filteredProductos.length === 0 && (
            <div className="text-center py-4 text-white-300">
              Mostrando filas 0 a 0 de 0
            </div>
          )}
        </div>

        {/* Modal para registrar producto */}
        {modalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <Rproductos setModalVisible={setModalVisible} /> {/* Pasamos la función para cerrar el modal */}
          </div>
        )}
      </main>
    </div>
  );
}

export default IProductos;
