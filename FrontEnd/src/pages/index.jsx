import React from 'react';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';

const Index = () => {
    return (
        <div className="bg-black text-gray-300">
            {/* Sección de Misión */}
            <section className="text-center py-8">
                <h2 className="text-4xl font-bold mb-4 transition-transform transform hover:translate-y-1 hover:shadow-lg">
                    Nuestra Misión
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    En TextileUniforms, nuestra misión es proporcionar uniformes de alta calidad que combinen confort, estilo y durabilidad. 
                    Nos comprometemos a cumplir con las expectativas de nuestros clientes, asegurando productos que reflejen profesionalismo 
                    y atención al detalle, todo mientras mantenemos un impacto positivo en nuestra comunidad y el medio ambiente.
                </p>
            </section>

            {/* Sección de Visión */}
            <section className="text-center py-8">
                <h2 className="text-4xl font-bold mb-4 transition-transform transform hover:translate-y-1 hover:shadow-lg">
                    Nuestra Visión
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    Ser líderes en la confección de uniformes personalizados en el mercado global, conocidos por nuestra excelencia en diseño 
                    y servicio al cliente. Buscamos expandir nuestra presencia internacionalmente, manteniendo siempre nuestros valores de 
                    sostenibilidad y responsabilidad social.
                </p>
            </section>

            {/* Sección de Valores (Opcional) */}
            <section className="py-8">
                <h2 className="text-3xl font-bold text-center mb-6 transition-transform transform hover:translate-y-1 hover:shadow-lg">
                    Nuestros Valores
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Calidad</h3>
                        <p className="text-gray-300">Nos esforzamos por ofrecer productos de la más alta calidad, superando siempre las expectativas.</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Innovación</h3>
                        <p className="text-gray-300">Estamos comprometidos con la innovación, buscando constantemente nuevas formas de mejorar nuestros productos y procesos.</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Responsabilidad</h3>
                        <p className="text-gray-300">Adoptamos prácticas sostenibles y responsables, asegurando un impacto positivo en nuestro entorno.</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Index;
