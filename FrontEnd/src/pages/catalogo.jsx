import React, { useState } from 'react';
import { FaThList } from 'react-icons/fa'; // Importa un icono de catálogo
import ImagenN1 from '../img/ImagenN1.jpeg';
import ImagenN9 from '../img/ImagenN9.jpeg';
import ImagenN5 from '../img/ImagenN5.jpeg';
import ImagenN2 from '../img/Camisetas-Cuello-Redondo.png';

function Catalogo() {
    const productos = [
        { id: 1, img: ImagenN1, precio: 40000 },
        { id: 2, img: ImagenN9, precio: 50000 },
        { id: 3, img: ImagenN5, precio: 30000 },
        { id: 4, img: ImagenN2, precio: 30000 },
        // Agrega más productos si es necesario
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [numRecords, setNumRecords] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProductos = productos.filter(producto =>
        String(producto.precio).toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProductos.length / numRecords);
    const startIndex = (currentPage - 1) * numRecords;
    const currentProductos = filteredProductos.slice(startIndex, startIndex + numRecords);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="min-h-screen bg-slate-300 flex flex-col items-center justify-center p-8">
            <h2 className="text-4xl font-bold text-black mb-14 text-center flex items-center">
                <FaThList className="mr-2 text-purple-600" /> {/* Icono de catálogo */}
                Catálogo y precios
            </h2>

            <div className="my-4 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Buscar por precio..."
                    className="p-3 rounded-lg border-2 border-purple-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="bg-gray-700 p-8 rounded-md w-full max-w-3xl shadow-lg shadow-purple-600">
                <div className="flex items-center mb-4">
                    <label htmlFor="numRecords" className="text-white mr-2">Registros por página:</label>
                    <select
                        id="numRecords"
                        value={numRecords}
                        onChange={(e) => {
                            setNumRecords(parseInt(e.target.value));
                            setCurrentPage(1); // Reiniciar a la primera página
                        }}
                        className="p-2 bg-gray-800 text-white rounded-md border border-purple-500"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full bg-gray-900 text-white">
                        <thead>
                            <tr>
                                <th className="p-3 text-center">Imagen</th>
                                <th className="p-3 text-center">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProductos.length > 0 ? (
                                currentProductos.map((producto) => (
                                    <tr key={producto.id}>
                                        <td className="p-3 text-center">
                                            <img src={producto.img} alt={`Producto ${producto.id}`} className="w-16 h-16 mx-auto" />
                                        </td>
                                        <td className="p-3 text-center transition duration-300 hover:bg-purple-600">
                                            ${producto.precio.toLocaleString()}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="p-3 text-center">No hay datos disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Paginación */}
                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-white">
                        Mostrando {Math.min(numRecords, filteredProductos.length)} de {filteredProductos.length} productos
                    </span>
                </div>

                {/* Paginación con números de página */}
                <div className="flex justify-center items-center p-4 bg-gray-900 text-white">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            className={`mx-1 px-3 py-2 rounded-md ${currentPage === pageNumber ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white'} transition duration-300`}
                            onClick={() => handlePageClick(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalogo;
