import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';  
import Sidebar from '../src/components/Sidebar';
import Footer from '../src/components/Footer'; 
import React from 'react';
import Index from '../src/pages/index';
import SingUp from '../src/pages/singUp';
import Login from '../src/pages/login';
import Home from '../src/pages/home';

import PerfilDetalle from '../src/pages/perfilDetalle';
import PerfilEditar from '../src/pages/perfilEditar';
import Iproducto from './pages/iproducto';
import IEmpleados from './pages/iempleados';
import IPedidos from './pages/ipedidos';
import Rproductos from './pages/rproductos';
import RPedidos from './pages/rpedidos';
import REmpleados from './pages/rempleados';
import EditarPedido from './pages/apedido'; 
import EditarEmpleados from './pages/aempleados'; 
import EditarProducto from './pages/aproducto'; 

function MainLayout() {
  const location = useLocation(); 

  return (
    <div className="flex flex-col min-h-screen"> {/* Cambiado para permitir que el footer esté al final */}
      {/* Renderiza Navbar en todas las rutas */}
      <Navbar />
      
      <Routes>
        {/* Ruta para el Index sin Sidebar */}
        <Route path="/" element={<Index />} />
        
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        
        {/* Rutas con Sidebar */}
        <Route
          path="/app/*"
          element={
            <div className="flex flex-grow">
              <Sidebar />
              <div
                className="content flex-grow"
                style={{
                 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center', // Cambiado a 'center' para mejor alineación
                  width: '100%',  
                  backgroundColor: 'blanck'
            
                }}
              >
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="perfilDetalle" element={<PerfilDetalle />} />
                  <Route path="perfilEditar" element={<PerfilEditar />} />
                  <Route path="ipedidos" element={<IPedidos />} />
                  <Route path="apedido/:id_Pedido" element={<EditarPedido />} />
                  <Route path="iproducto" element={<Iproducto />} />
                  <Route path="aproducto/:id" element={<EditarProducto />} />
                  <Route path="iempleado" element={<IEmpleados />} />
                  <Route path="aempleados/:id_Empleado" element={<EditarEmpleados />} />
                  <Route path="rproductos" element={<Rproductos />} />
                  <Route path="rpedidos" element={<RPedidos />} />
                  <Route path="rempleado" element={<REmpleados />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>

      {/* Agrega el Footer al final */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />  {/* MainLayout está dentro de Router, por lo que useLocation funcionará */}
    </Router>
  );
}

export default App;