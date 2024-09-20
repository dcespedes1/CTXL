import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';  // Navbar1
import Navbar2 from './components/Navbar2';    // Navbar2
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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Ruta para Index con Navbar2 */}
          <Route path="index" element={
            <>
              <Navbar2 />
              <Index />
            </>
          } />
          
          {/* Ruta para Home con Navbar1 */}


          {/* Rutas con Sidebar */}
          <Route path="/app/*" element={
            <div className="flex flex-grow">
              <Sidebar />
              <div
                className="content flex-grow"
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  backgroundColor: 'black'
                }}
              >
                <Routes>
                <Route path="Home" element={<Home />} />
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
          } />
          
          {/* Otras rutas, como SingUp y Login, si es necesario */}
          <Route path="singup" element={<SingUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
        
        {/* Agrega el Footer al final */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;