import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const URI = "http://localhost:8000/api/productos/";

function AProductos() {
  const [CantidadR, setCantidadR] = useState("");
  const [Material, setMaterial] = useState("");
  const [Colores, setColores] = useState("");
  const [id_administrador, setIdAdministrador] = useState("");
  const [id_Empleado, setIdEmpleado] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
        const res = await axios.get(`${URI}${id}`);
        setCantidadR(res.data.CantidadR);
        setMaterial(res.data.Material);
        setColores(res.data.Colores);
        setIdAdministrador(res.data.id_administrador);
        setIdEmpleado(res.data.id_Empleado);
    };

    fetchProductById();
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();
      await axios.put(`${URI}${id}`, {
        CantidadR: CantidadR,
        Material: Material,
        Colores: Colores,
        id_administrador: id_administrador,
        id_Empleado: id_Empleado,
      });
      navigate("/app/iproducto");
    }
  return (
    <div className="flex h-screen">
      {/* Main Content */}
      <main className="flex-1 flex flex-col p-10 bg-gray-800 text-white bg-cover bg-no-repeat">
        <div className="w-3/4 mt-20">
          <div className="w-1/4 flex">
            <h1 className="whitespace-nowrap text-4xl font-bold">Actualizar producto</h1>
          </div>
        </div>
        {/* Formulario */}
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Actualizar producto</h2>

            <form onSubmit={updateProduct}>
              <div className="space-y-6">
                <div className="flex flex-col space-y-4">
                  <div className="w-full">
                    <label className="block text-white mb-2" htmlFor="CantidadR">Cantidad</label>
                    <input
                      type="number"
                      id="CantidadR"
                      value={CantidadR}
                      onChange={(e) => setCantidadR(e.target.value)}
                      className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-white mb-2" htmlFor="Material">Material</label>
                    <input
                      type="text"
                      id="Material"
                      value={Material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-white mb-2" htmlFor="Colores">Color</label>
                    <input
                      type="text"
                      id="Colores"
                      value={Colores}
                      onChange={(e) => setColores(e.target.value)}
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
                  <Link to="/app/iproducto">
                    <button
                      type="button"
                      className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                    >
                      Cancelar
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="w-1/2 bg-purple-600 text-white py-3 rounded-md hover:bg-purple-900 transition duration-200"
                  >
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AProductos;
