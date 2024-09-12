import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../src/components/navbar';  
import Sidebar from '../src/components/Sidebar';
import React from 'react';
import Index from '../src/pages/index';
import SingUp from '../src/pages/singUp';
import Login from '../src/pages/login';
import Home from '../src/pages/home';
import sidebarBackground from '../src/img/imagen1.jpg';
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
    <div>
      {/* Renderiza Navbar solo en las rutas del Index */}
      {location.pathname === '/' && <Navbar />}
      
      <Routes>
        {/* Ruta para el Index sin Sidebar */}
        <Route path="/" element={<Index />} />
        
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        
        {/* Rutas con Sidebar */}
        <Route
          path="/app/*"
          element={
            <div className="flex">
              <Sidebar />
              <div
                className="content"
                style={{
                  backgroundImage: `url(${sidebarBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',  
                  minHeight: '100vh', 
                }}
              >
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="perfilDetalle" element={<PerfilDetalle />} />
                  <Route path="perfilEditar" element={<PerfilEditar />} />
                  <Route path="ipedidos" element={<IPedidos />} />
                  <Route path="apedido" element={<EditarPedido />} />
                  <Route path="iproducto" element={<Iproducto />} />
                  <Route path="aproducto/:id" element={<EditarProducto />} />
                  <Route path="iempleado" element={<IEmpleados />} />
                  <Route path="aempleados" element={<EditarEmpleados />} />
                  <Route path="rproductos" element={<Rproductos />} />
                  <Route path="rpedidos" element={<RPedidos />} />
                  <Route path="rempleado" element={<REmpleados />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
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
