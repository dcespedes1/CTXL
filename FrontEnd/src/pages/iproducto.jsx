import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgAdd } from "react-icons/cg";

const URI = 'http://localhost:8000/api/productos/';

function Iproducto() {
  const [productos, setproductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const res = await axios.get(URI);
    setproductos(res.data);
  };

  const deleteproducto = async (id) => {
    await axios.delete(`${URI}${id}`);
    getProductos();
  };

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex h-screen bg-gray-900">
      <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white">
        <div className="w-3/4 mt-20">
          <div className="w-1/4 flex">
            <h1 className="text-4xl font-bold whitespace-nowrap text-white-600">
              Inventario Material
            </h1>
          </div>
        </div>

        {/* Campo de búsqueda y botón "Registrar Nuevo" */}
        <div className="my-8 flex justify-between items-center">
          <input
            type="text"
            placeholder="Buscar por material..."
            className="w-full max-w-xs p-2 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link
            to="/app/rproductos"
            className="flex items-center whitespace-nowrap"
          >
            <button className="flex items-center bg-purple-600 text-white p-4 rounded-lg shadow-lg focus:outline-none">
              <CgAdd size={30} />
            </button>
          </Link>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto bg-white border border-purple-200 shadow-lg shadow-purple-600/50">
          <table className=" w-full bg-black overflow-hidden">
            <thead className="bg-purple-600 text-white border-b border-white">
              <tr>
                <th className="p-4">Cantidad</th>
                <th className="p-4">Material</th>
                <th className="p-4">Color</th>
                <th className="p-4">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {productos.map((producto) => (
                <tr key={producto.id_producto} className="border-r border-b border-white">
                  <td className="p-4 border-b text-white">{producto.CantidadR}</td>
                  <td className="p-4 border-b text-white">{producto.Material}</td>
                  <td className="p-4 border-b text-white">{producto.Colores}</td>
                  <td className="p-4 border-b">
                    <Link to={`/app/aproducto/${producto.id_producto}`}>
                      <button className="bg-purple-600 text-white px-3 py-1 rounded-lg mr-2">
                        Editar
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteproducto(producto.id_producto)}
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

export default Iproducto;
