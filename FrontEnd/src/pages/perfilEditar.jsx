import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Perfil = ({ setModalVisible }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const closeModal = () => {
    setModalVisible(false);
  };

  const validate = () => {
    const newErrors = {};

    // Validaciones de los campos
    if (!nombre) {
      newErrors.nombre = 'El nombre es requerido.';
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      newErrors.nombre = 'El nombre solo debe contener letras.';
    }

    if (!apellido) {
      newErrors.apellido = 'El apellido es requerido.';
    } else if (!/^[a-zA-Z\s]+$/.test(apellido)) {
      newErrors.apellido = 'El apellido solo debe contener letras.';
    }

    if (!correo) {
      newErrors.correo = 'El correo es requerido.';
    }
    if (!contrasena) {
      newErrors.contrasena = 'La contraseña es requerida.';
    }
    if (!telefono || telefono < 0) {
      newErrors.telefono = 'El teléfono debe ser un número válido y positivo.';
    }
    if (!direccion) {
      newErrors.direccion = 'La dirección es requerida.';
    }
    if (!fechaNacimiento) {
      newErrors.fechaNacimiento = 'La fecha de nacimiento es requerida.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Lógica para actualizar el perfil
    console.log({ nombre, apellido, correo, contrasena, telefono, direccion, fechaNacimiento });
    // Aquí puedes agregar la lógica para enviar datos al servidor
    closeModal();
    navigate('/app/perfilDetalle');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-black p-8 rounded-lg shadow-lg max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Perfil Usuario</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleUpdate}>
          <div className="space-y-2">
            <label htmlFor="nombre" className="text-white">Nombre</label>
            <input
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="apellido" className="text-white">Apellido</label>
            <input
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Apellido"
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.apellido && <p className="text-red-500">{errors.apellido}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="correo" className="text-white">Correo</label>
            <input
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Correo"
              type="email"
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.correo && <p className="text-red-500">{errors.correo}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="contrasena" className="text-white">Contraseña</label>
            <input
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Contraseña"
              type="password"
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.contrasena && <p className="text-red-500">{errors.contrasena}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="telefono" className="text-white">Teléfono</label>
            <input
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Teléfono"
              type="tel"
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.telefono && <p className="text-red-500">{errors.telefono}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="direccion" className="text-white">Dirección</label>
            <input
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              placeholder="Dirección"
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.direccion && <p className="text-red-500">{errors.direccion}</p>}
          </div>
          <div className="space-y-2 col-span-2">
            <label htmlFor="fecha-nacimiento" className="text-white">Fecha de Nacimiento</label>
            <input
              id="fecha-nacimiento"
              type="date"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              className="w-full px-4 py-3 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {errors.fechaNacimiento && <p className="text-red-500">{errors.fechaNacimiento}</p>}
          </div>
          <div className="flex justify-end space-x-2 col-span-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 bg-gray-500 text-white rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
