import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CgAdd } from "react-icons/cg";
import { VscEdit } from "react-icons/vsc";
import RPedidos from './rpedidos'; 
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/api/pedidos/';

function IPedidosE() {
  const [pedidos, setPedidos] = useState([]);
  const [showTooltip, setShowTooltip] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [hoveredPedido, setHoveredPedido] = useState(null); // Estado para mostrar detalles del pedido al pasar el cursor

  // Nuevo estado para controlar el número de registros a mostrar
  const [numRecords, setNumRecords] = useState(5); // Default 5 registros a mostrar

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
    <div className=" bg-slate-500 flex h-screen  overflow-hidden">
      <main className="flex-1 flex flex-col p-10 bg-slate-500 text-white">
        <div className="w-3/4 mt-20">
          <h1 className="text-4xl font-bold text-white">Inventario de Pedidos</h1>
        </div>

        <div className="my-8 flex justify-between items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar por cliente, prenda..."
            className="w-full max-w-xs p-3 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Botón para agregar un nuevo pedido, con un icono más pequeño */}
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

        <div className="overflow-x-auto bg-gray-900 border border-purple-200 shadow-lg shadow-purple-600/100 rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-400">
            <thead className="bg-purple-700 text-white uppercase">
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
                filteredPedidos.slice(0, numRecords).map((pedido) => (
                  <tr 
                    key={pedido.id_Pedido} 
                    className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700 relative"
                    onMouseEnter={() => setHoveredPedido(pedido)}  // Mostrar detalles del pedido
                    onMouseLeave={() => setHoveredPedido(null)}
                  >
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
                        className="text-2xl text-purple-600 hover:text-purple-400 transition duration-300"
                      >
                        <VscEdit />
                      </Link>
                    </td>

                    {/* Tooltip con detalles del pedido */}
                    {hoveredPedido && hoveredPedido.id_Pedido === pedido.id_Pedido && (
                      <div className="absolute left-0 top-full mt-2 w-full p-4 bg-gray-700 text-white rounded-lg shadow-lg z-10">
                        <h4 className="font-bold text-lg">Detalles del Pedido</h4>
                        <p><strong>Cliente:</strong> {pedido.Cliente}</p>
                        <p><strong>Prenda:</strong> {pedido.Prenda}</p>
                        <p><strong>Tela:</strong> {pedido.Tela}</p>
                        <p><strong>Estampado:</strong> {pedido.Estampado}</p>
                        <p><strong>Cantidad:</strong> {pedido.Cantidad}</p>
                        <p><strong>Talla:</strong> {pedido.Talla}</p>
                        <p><strong>Precio Final:</strong> {pedido.PFinal}</p>
                      </div>
                    )}
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

          {/* Mostrar selector en la parte inferior de la tabla */}
          <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <span className="text-sm">Mostrando {Math.min(numRecords, filteredPedidos.length)} de {filteredPedidos.length} pedidos</span>
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

        {/* Modal para registrar un nuevo pedido */}
        {modalVisible && (
          <RPedidos setModalVisible={setModalVisible} /> 
        )}
      </main>
    </div>
  );
}

export default IPedidosE;
  