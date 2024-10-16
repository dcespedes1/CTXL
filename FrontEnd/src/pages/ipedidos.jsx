import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CgAdd } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";

const URI = 'http://localhost:8000/api/pedidos/';

function IPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPedidos();
  }, []);

  const getPedidos = async () => {
    try {
      const res = await axios.get(URI);
      setPedidos(res.data);
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
    }
  };

  // Filtra por cualquier coincidencia de números, texto, fechas, etc.
  const filteredPedidos = pedidos.filter(pedido =>
    Object.values(pedido).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="flex h-screen bg-gray-800">
      <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white">
        <div className="w-3/4 mt-20">
          <h1 className="text-4xl font-bold text-white">Inventario Pedidos</h1>
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
            <Link
              to="/app/rpedidos"
              onMouseEnter={() => setShowTooltip('add')}
              onMouseLeave={() => setShowTooltip(null)}
            >
              <CgAdd className='text-5xl text-purple-600' />
            </Link>
            {showTooltip === 'add' && (
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-purple-600 text-white text-lg rounded shadow-lg z-10">
                Registrar Nuevo
              </div>
            )}
          </div>
        </div>

        <div className="overflow-x-auto bg-gray-900 border border-purple-200 shadow-2xl shadow-purple-600/100 rounded-lg">
          <table className="min-w-full text-sm text-left text-white-400">
            <thead className="bg-purple-700 text-white-300 uppercase">
              <tr>
                <th className="px-6 py-3">Cliente</th>
                <th className="px-6 py-3">Prenda</th>
                <th className="px-6 py-3">Tela</th>
                <th className="px-6 py-3">Estampado</th>
                <th className="px-6 py-3">Cantidad</th>
                <th className="px-6 py-3">Talla</th>
                <th className="px-6 py-3">Bordado</th>
                <th className="px-6 py-3">Precio Inicial</th>
                <th className="px-6 py-3">Precio Final</th>
                <th className="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredPedidos.length > 0 ? (
                filteredPedidos.map((pedido) => (
                  <tr key={pedido.id_Pedido} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700">
                    <td className="px-6 py-4">{pedido.Cliente}</td>
                    <td className="px-6 py-4">{pedido.Prenda}</td>
                    <td className="px-6 py-4">{pedido.Tela}</td>
                    <td className="px-6 py-4">{pedido.Estampado}</td>
                    <td className="px-6 py-4">{pedido.Cantidad}</td>
                    <td className="px-6 py-4">{pedido.Talla}</td>
                    <td className="px-6 py-4">{pedido.Bordado}</td>
                    <td className="px-6 py-4">{pedido.PInicial}</td>
                    <td className="px-6 py-4">{pedido.PFinal}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/app/apedido/${pedido.id_Pedido}`}
                        onMouseEnter={() => setShowTooltip(pedido.id_Pedido)}
                        onMouseLeave={() => setShowTooltip(null)}
                      >
                        <VscEdit className='text-3xl text-purple-600' />
                      </Link>
                      {showTooltip === pedido.id_Pedido && (
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-purple-600 text-white text-sm rounded">
                          Editar
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="px-6 py-4 text-center">
                    No hay datos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {filteredPedidos.length === 0 && (
            <div className="text-center py-4 text-gray-300">
              Mostrando filas 0 a 0 de 0
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default IPedidos;
