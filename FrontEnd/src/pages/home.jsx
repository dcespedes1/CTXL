import React from 'react';
import '../index.css';

const Home = () => {
  // Estadísticas de ventas
  const salesData = [
    { label: 'Enero', value: 1500000, percentage: 0.8 },
    { label: 'Febrero', value: 1800000, percentage: 0.9 },
    { label: 'Marzo', value: 2200000, percentage: 1.1 },
    { label: 'Abril', value: 2000000, percentage: 1.0 },
    { label: 'Mayo', value: 2500000, percentage: 1.25 },
    { label: 'Junio', value: 2800000, percentage: 1.4 },
  ];

  // Otras estadísticas
  const otherStats = [
    { label: 'Ventas Totales', value: 12000000 },
    { label: 'Pedidos Completados', value: 850 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-10 bg-gray-900 text-white">
        <div className="w-full max-w-6xl mx-auto">
          {/* Bienvenida al administrador */}
          <h1 className="text-4xl font-bold mb-6">¡Bienvenido Administrador!</h1>
          <p className="text-xl mb-8">
            Aquí podrás ver un resumen de las estadísticas de ventas y otros datos importantes para tu negocio.
          </p>

          {/* Estadísticas de ventas */}
          <h2 className="text-3xl font-bold mb-4">Estadísticas de Ventas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {salesData.map((sale, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{sale.label}</h3>
                <p className="text-4xl font-bold">$COP {sale.value.toLocaleString()}</p>
                <p className={`text-lg ${sale.percentage > 1 ? 'text-green-500' : 'text-red-500'}`}>
                  {sale.percentage > 1 ? `+${(sale.percentage * 100 - 100).toFixed(2)}%` : `${(sale.percentage * 100 - 100).toFixed(2)}%`}
                </p>
              </div>
            ))}
          </div>

          {/* Otras estadísticas */}
          <h2 className="text-3xl font-bold mb-4">Otras Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherStats.map((stat, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{stat.label}</h3>
                <p className="text-4xl font-bold">{stat.label === 'Ventas Totales' ? `$COP ${stat.value.toLocaleString()}` : stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;