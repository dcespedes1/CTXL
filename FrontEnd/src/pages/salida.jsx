import React from 'react';
import { Link } from 'react-router-dom';

const Salida = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-b from-[#1d1f36] to-[#383c58]">
      <div className="bg-[#181a2e] shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Salida Exitosa</h1>
        <p className="text-gray-400">Muchas gracias por entrar a la página</p>
        <Link to="/index">
          <button className="mt-4 bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Index
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Salida;
