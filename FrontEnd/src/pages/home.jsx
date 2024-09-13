import React from 'react';
import '../index.css';
import Banner from '../img/banner.jpeg'

const Home = () => {
  return (
    <div className="relative flex h-screen bg-gray-100">
    
      

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-10 bg-gray-900 text-white">
        <div className="w-full max-w-6xl mx-auto">
          {/* Bienvenida al administrador */}
          <h1 className="text-4xl font-bold mb-6">¡Bienvenido Administrador!</h1>
          <p className="text-xl mb-8">
            Aquí podrás ver un resumen de las estadísticas de ventas y otros datos importantes para tu negocio.
          </p>

          {/* Ventajas como administrador */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Ventajas de ser Administrador</h2>
            <ul className="list-disc pl-6 mb-8">
              <li>Acceso completo a todos los inventarios y datos en tiempo real.</li>
              <li>Capacidad para generar y consultar reportes detallados.</li>
              <li>Gestión de pedidos y seguimiento de estado de manera eficiente.</li>
              <li>Control total sobre las estadísticas de ventas y otros indicadores clave.</li>
              <li>Configuración personalizada de alertas y notificaciones.</li>
            </ul>

            {/* Íconos relacionados */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                <span className="text-4xl mb-2">📦</span> {/* Icono de inventario */}
                <p className="text-lg font-bold">Inventarios</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                <span className="text-4xl mb-2">📈</span> {/* Icono de reportes */}
                <p className="text-lg font-bold">Reportes</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                <span className="text-4xl mb-2">⚙️</span> {/* Icono de configuración */}
                <p className="text-lg font-bold">Configuración</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg">
                <span className="text-4xl mb-2">🔔</span> {/* Icono de notificaciones */}
                <p className="text-lg font-bold">Notificaciones</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
