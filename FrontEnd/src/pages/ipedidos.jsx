import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URI ='http://localhost:8000/api/pedidos/';

function IPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    getPedidos();
  }, []);

  const getPedidos = async () => {
    const res = await axios.get(URI);
    setPedidos(res.data);
  };

  const deletepedido = async (id_Pedido) => {
    if (!id_Pedido) {
      console.error('ID de pedido no proporcionado');
      return;
    }
    
    try {
      await axios.delete(`${URI}${id_Pedido}`);
      getPedidos();  // Actualiza la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar el pedido:', error);
    }
  };
  

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex h-screen bg-gray-800">
      <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
        <div className="w-3/4 mt-20">
          <div className="w-1/4 flex">
            <h1 className="text-4xl font-bold whitespace-nowrap text-purple-600">
              Inventario Pedidos
            </h1>
          </div>
        </div>
        <div className="my-8">
          <input
            type="text"
            placeholder="Buscar por material..."
            className="w-full max-w-xs p-2 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <div>
            <Link
              to="/app/rpedidos"
              className="block text-right text-3xl p-8 hover:text-purple-400"
            >
              Registrar Nuevo
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto bg-gray-900 border border-purple-200 shadow-2xl shadow-purple-600/100">
          <table className="w-full bg-black overflow-hidden">
          <thead className="bg-purple-600 text-white border-b border-white">
              <tr>
                <th className="p-3 text-center">Cliente</th>
                <th className="p-3 text-center">Empleado</th>
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
              {pedidos.map((pedido) => (
                <tr key={uuidv4()} className="border-r border-b border-white">
                  <td className="p-4 border-b text-white">{pedido.Cliente}</td>
                  <td className="p-4 border-b text-white">{pedido.Empleado}</td>
                  <td className="p-4 border-b text-white">{pedido.Prenda}</td>
                  <td className="p-4 border-b text-white">{pedido.Tela}</td>
                  <td className="p-4 border-b text-white">{pedido.Estampado}</td>
                  <td className="p-4 border-b text-white">{pedido.Cantidad}</td>
                  <td className="p-4 border-b text-white">{pedido.Talla}</td>
                  <td className="p-4 border-b text-white">{pedido.Bordado}</td>
                  <td className="p-4 border-b text-white">{pedido.PInicial}</td>
                  <td className="p-4 border-b text-white">{pedido.PFinal}</td>
      <td className="p-4 border-b text-white">
        <Link to={`/app/apedido/${pedido.id_Pedido}`}>
          <button className="bg-purple-600 text-white px-3 py-1 rounded-lg mr-2">
            Editar
          </button>
        </Link>
        <button onClick={() => deletepedido(pedido.id_Pedido)}  // Asegúrate de que sea `pedido.id_Pedido`
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

export default IPedidos;