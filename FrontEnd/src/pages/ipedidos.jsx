import React, { useState, useEffect } from 'react';
import '../index.css';
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

  // Filtrar pedidos por todos los campos relevantes
  const filteredPedidos = pedidos.filter(pedido => {
    return Object.values(pedido).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="flex h-screen bg-gray-800">
      <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
        <div className="w-3/4 mt-20">
          <div className="w-1/4 flex">
            <h1 className="text-4xl font-bold whitespace-nowrap text-white-600">
              Inventario Pedidos
            </h1>
          </div>
        </div>
        <div className="my-8 flex justify-between items-center">
          {/* Input de búsqueda */}
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full max-w-xs p-2 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* Botón Registrar Nuevo */}
          <div className="relative">
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

        <div className="overflow-x-auto bg-gray-900 border border-purple-200 shadow-2xl shadow-purple-600/100">
          <table className="w-full bg-black overflow-hidden">
            <thead className="bg-purple-600 text-white border-b border-white">
              <tr>
                <th className="p-3 text-center">Cliente</th>
                <th className="p-3 text-center">Prenda</th>
                <th className="p-3 text-center">Tela</th>
                <th className="p-3 text-center">Estampado</th>
                <th className="p-3 text-center">Cantidad</th>
                <th className="p-3 text-center">Talla</th>
                <th className="p-3 text-center">Bordado</th>
                <th className="p-3 text-center">Precio Inicial</th>
                <th className="p-3 text-center">Precio Final</th>
                <th className="p-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredPedidos.map((pedido) => (
                <tr key={pedido.id_Pedido} className="border-r border-b border-white">
                  <td className="p-4 border-b text-white">{pedido.Cliente}</td>
                  <td className="p-4 border-b text-white">{pedido.Prenda}</td>
                  <td className="p-4 border-b text-white">{pedido.Tela}</td>
                  <td className="p-4 border-b text-white">{pedido.Estampado}</td>
                  <td className="p-4 border-b text-white">{pedido.Cantidad}</td>
                  <td className="p-4 border-b text-white">{pedido.Talla}</td>
                  <td className="p-4 border-b text-white">{pedido.Bordado}</td>
                  <td className="p-4 border-b text-white">{pedido.PInicial}</td>
                  <td className="p-4 border-b text-white">{pedido.PFinal}</td>
                  <td className="p-4 border-b text-white">
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
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
export default IPedidos;