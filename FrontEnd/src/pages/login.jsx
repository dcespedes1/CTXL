import React, { useState } from 'react';
import '../index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/api/administrador/';

function Registro() {
  const [Nombre, setNombre] = useState('');
  const [FechaNacimiento, setFechaNacimiento] = useState('');
  const [TipoDoc, setTipoDoc] = useState('');
  const [NumeroDoc, setNumeroDoc] = useState('');
  const [Correo, setCorreo] = useState('');
  const [celular, setcelular] = useState('');
  const [contraseña, setcontraseña] = useState('');
  const navigate =useNavigate();

  const store = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(URI,{
           Nombre:  Nombre,
           FechaNacimiento: FechaNacimiento,
           TipoDoc:  TipoDoc,
           NumeroDoc:  NumeroDoc,
           Correo:  Correo,
           celular:  celular,
           contraseña: contraseña,
           
        });
        console.log('Respuesta del servidor:', response.data);
        navigate('/app/index'); // Redirige a la página de index
    } catch (error) {
        console.error('Error al registrar el administrador:', error);
    }
}


  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-2xl bg-black p-8 rounded-lg shadow-2xl shadow-purple-600/100">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Registro</h2>

        <form onSubmit={store}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-white mb-2" htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                value={Nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-white mb-2" htmlFor="FechaNacimiento">
                Fecha Nacimiento
              </label>
              <input
                type="date"
                id="FechaNacimiento"
                value={FechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-white mb-2" htmlFor="TipoDoc">
              Tipo Documento
              </label>
              <input
                type="text"
                id="TipoDoc"
                value={TipoDoc}
                onChange={(e) => setTipoDoc(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-white mb-2" htmlFor="NumeroDoc">
                Numero Documento
              </label>
              <input
                type="text"
                id="NumeroDoc"
                value={NumeroDoc}
                onChange={(e) => setNumeroDoc(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="">
              Correo
            </label>
            <input
              type="email"
              id="Correo"
              value={Correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-6 flex items-center">
          <label className="block text-white mb-2" htmlFor="celular">
              Celular
            </label>
            <input
              type="checkbox"
              id="celular"
              checked={celular}
              onChange={(e) => setcelular(e.target.checked)}
              className="mr-2"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
          <label className="block text-white mb-2" htmlFor="contraseña">
          contraseña
            </label>
            <input
              type="checkbox"
              id="contraseña"
              checked={contraseña}
              onChange={(e) => setcontraseña(e.target.checked)}
              className="mr-2"
              required
            />
          </div>

           

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
