import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function IPedidos() {
  const [data, setData] = useState([
    {
      id: 1,
      cliente: 'Juan',
      empleado: 'Pérez',
      prenda: 'Camisa',
      tela: 'Algodón',
      estampado: 'Sí',
      cantidad: 10,
      talla: 'L',
      bordado: 'No',
      precioInicial: 100,
      precioFinal: 150,
    },
    {
      id: 2,
      cliente: 'Carlos',
      empleado: 'Jose',
      prenda: 'Pantalon',
      tela: 'Lino',
      estampado: 'No',
      cantidad: 20,
      talla: 'L',
      bordado: 'Sí',
      precioInicial: 200,
      precioFinal: 250,
    },
    {
      id: 3,
      cliente: 'Pedro',
      empleado: 'Pablo',
      prenda: 'Pantaloneta',
      tela: 'Seda',
      estampado: 'Sí',
      cantidad: 15,
      talla: 'L',
      bordado: 'Sí',
      precioInicial: 150,
      precioFinal: 200,
    },
    // Nuevas filas agregadas
    {
      id: 4,
      cliente: 'Lucía',
      empleado: 'Ana',
      prenda: 'Vestido',
      tela: 'Seda',
      estampado: 'No',
      cantidad: 5,
      talla: 'M',
      bordado: 'Sí',
      precioInicial: 300,
      precioFinal: 350,
    },
    {
      id: 5,
      cliente: 'Mario',
      empleado: 'Laura',
      prenda: 'Falda',
      tela: 'Lana',
      estampado: 'Sí',
      cantidad: 12,
      talla: 'S',
      bordado: 'No',
      precioInicial: 250,
      precioFinal: 300,
    },
    {
      id: 6,
      cliente: 'Elena',
      empleado: 'Sofía',
      prenda: 'Blusa',
      tela: 'Algodón',
      estampado: 'No',
      cantidad: 8,
      talla: 'L',
      bordado: 'Sí',
      precioInicial: 150,
      precioFinal: 200,
    },
    {
      id: 7,
      cliente: 'Sergio',
      empleado: 'Andrés',
      prenda: 'Traje',
      tela: 'Lana',
      estampado: 'No',
      cantidad: 3,
      talla: 'XL',
      bordado: 'Sí',
      precioInicial: 500,
      precioFinal: 600,
    },
    {
      id: 8,
      cliente: 'Isabel',
      empleado: 'Paula',
      prenda: 'Abrigo',
      tela: 'Cachemira',
      estampado: 'No',
      cantidad: 4,
      talla: 'M',
      bordado: 'Sí',
      precioInicial: 600,
      precioFinal: 700,
    },
  ]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}

      <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
        {/* Content */}
        <div className="w-3/4 mt-20">
          <div className="w-1/4 flex">
            <h1 className="text-4xl font-bold whitespace-nowrap text-purple-600">
              Inventario Pedidos
            </h1>
          </div>
        </div>

        <div>
          <div>
            <div className="text-3xl text-left relative top-16 text-gray-200">
              Listado:
            </div>
          </div>
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
          <table className="w-full bg-black overflow-hidden ">
            <thead className="bg-purple-600 text-white border-b border-white">
              <tr>
                <th className="p-3 text-center">Id</th>
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
              {data.map((item) => (
                <tr key={item.id} className="border-r border-b border-white">
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.cliente}</td>
                  <td className="p-3">{item.empleado}</td>
                  <td className="p-3">{item.prenda}</td>
                  <td className="p-3">{item.tela}</td>
                  <td className="p-3">{item.estampado}</td>
                  <td className="p-3">{item.cantidad}</td>
                  <td className="p-3">{item.talla}</td>
                  <td className="p-3">{item.bordado}</td>
                  <td className="p-3">{item.precioInicial}</td>
                  <td className="p-3">{item.precioFinal}</td>
                  <td className="p-3">
                    <Link to="/app/apedido">
                      <button className="bg-purple-600 text-white px-3 py-1 rounded-lg mr-2">
                        Editar
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
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
