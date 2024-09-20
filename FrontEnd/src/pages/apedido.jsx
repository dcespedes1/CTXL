import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const URI = "http://localhost:8000/api/pedidos/";

function APedidos() {
  const [Cliente, setCliente] = useState('');
  const [Cantidad, setCantidad] = useState('');
  const [Prenda, setPrenda] = useState('');
  const [Tela, setTela] = useState('');
  const [Estampado, setEstampado] = useState('');
  const [Talla, setTalla] = useState('');
  const [Bordado, setBordado] = useState('');
  const [PInicial, setPInicial] = useState('');
  const [PFinal, setPFinal] = useState('');
  const [id_administrador, setIdAdministrador] = useState("");
  const [id_Empleado, setIdEmpleado] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id_Pedido } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${URI}${id_Pedido}`);
        setCliente(res.data.Cliente);
        setCantidad(res.data.Cantidad);
        setPrenda(res.data.Prenda);
        setTela(res.data.Tela);
        setEstampado(res.data.Estampado);
        setTalla(res.data.Talla);
        setBordado(res.data.Bordado);
        setPInicial(res.data.PInicial);
        setPFinal(res.data.PFinal);
        setIdAdministrador(res.data.id_administrador);
        setIdEmpleado(res.data.id_Empleado);
      } catch (error) {
        setError('Error fetching the order. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id_Pedido]);

  const updatePedido = async (e) => {
    e.preventDefault();
    if (Cantidad <= 0) {
      setError('La cantidad debe ser mayor que cero.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await axios.put(`${URI}${id_Pedido}`, {
        Cliente,
        Cantidad,
        Prenda,
        Tela,
        Estampado,
        Talla,
        Bordado,
        PInicial,
        PFinal,
        id_administrador,
        id_Empleado,
      });
      navigate("/app/ipedidos");
    } catch (error) {
      setError('Error updating the order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <main className="flex-1 p-6 bg-gray-800 text-white bg-cover bg-no-repeat">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-4xl bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Actualizar Pedido</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={updatePedido} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white mb-2" htmlFor="Cliente">Cliente</label>
                  <input
                    type="text"
                    id="Cliente"
                    value={Cliente}
                    onChange={(e) => setCliente(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2" htmlFor="Cantidad">Cantidad</label>
                  <input
                    type="number"
                    id="Cantidad"
                    value={Cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white mb-2" htmlFor="Prenda">Prenda</label>
                  <input
                    type="text"
                    id="Prenda"
                    value={Prenda}
                    onChange={(e) => setPrenda(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2" htmlFor="Tela">Tela</label>
                  <input
                    type="text"
                    id="Tela"
                    value={Tela}
                    onChange={(e) => setTela(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2" htmlFor="Estampado">Estampado</label>
                  <input
                    type="text"
                    id="Estampado"
                    value={Estampado}
                    onChange={(e) => setEstampado(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2" htmlFor="Talla">Talla</label>
                  <input
                    type="text"
                    id="Talla"
                    value={Talla}
                    onChange={(e) => setTalla(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2" htmlFor="Bordado">Bordado</label>
                  <input
                    type="text"
                    id="Bordado"
                    value={Bordado}
                    onChange={(e) => setBordado(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2" htmlFor="PInicial">Precio Inicial</label>
                  <input
                    type="number"
                    id="PInicial"
                    value={PInicial}
                    onChange={(e) => setPInicial(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2" htmlFor="PFinal">Precio Final</label>
                  <input
                    type="number"
                    id="PFinal"
                    value={PFinal}
                    onChange={(e) => setPFinal(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-white mb-2" htmlFor="id_administrador">Administrador</label>
                  <input
                    type="number"
                    id="id_administrador"
                    value={id_administrador}
                    onChange={(e) => setIdAdministrador(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-white mb-2" htmlFor="id_Empleado">Empleado</label>
                  <input
                    type="number"
                    id="id_Empleado"
                    value={id_Empleado}
                    onChange={(e) => setIdEmpleado(e.target.value)}
                    className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <Link to="/app/ipedidos">
                  <button
                    type="button"
                    className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                  >
                    Cancelar
                  </button>
                </Link>
                <button
                  type="submit"
                  className={`w-1/2 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Actualizando...' : 'Actualizar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
export default APedidos;
