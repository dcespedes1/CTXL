import React from 'react';
import Footer from '../components/Footer';

const Index = () => {
    const uniforms = [
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 1",
            description: "Uniforme Escolar - Tela 100% Algodón\nElaborado por empleados altamente capacitados, este uniforme ofrece comodidad y durabilidad para los estudiantes."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 2",
            description: "Uniforme Escolar - Tela Poliéster\nDiseñado para resistir el desgaste diario, este uniforme mantiene su apariencia impecable incluso después de múltiples lavados."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 3",
            description: "Uniforme Escolar - Tela Mezclilla\nUn clásico que nunca pasa de moda, este uniforme combina estilo y durabilidad para un look casual pero elegante."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 4",
            description: "Uniforme Escolar - Tela Resistente al Agua\nPerfecto para climas húmedos, este uniforme repele el agua y mantiene a los estudiantes secos y cómodos durante todo el día."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 5",
            description: "Uniforme Escolar - Tela Transpirable\nDiseñado para mantener a los estudiantes frescos y secos, este uniforme utiliza telas transpirables que permiten una circulación de aire adecuada."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 6",
            description: "Uniforme Escolar - Tela de Alta Durabilidad\nFabricado con materiales de alta calidad, este uniforme está diseñado para durar y resistir el desgaste diario de los estudiantes."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 7",
            description: "Uniforme Escolar - Tela Antiarrugas\nMantenerse impecable nunca ha sido tan fácil. Este uniforme está diseñado para resistir las arrugas y mantener su apariencia fresca durante todo el día."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 8",
            description: "Uniforme Escolar - Tela Hipoalergénica\nIdeal para estudiantes con piel sensible, este uniforme está fabricado con telas hipoalergénicas que reducen la irritación y las alergias."
        },
        {
            src: "https://via.placeholder.com/300x400/808080",
            alt: "Uniforme Escolar 9",
            description: "Uniforme Escolar - Tela Reflectante\nPara una mayor seguridad, este uniforme incorpora elementos reflectantes que aumentan la visibilidad de los estudiantes en condiciones de poca luz o en la oscuridad."
        }
    ];

    return (
        <div className="bg-black text-gray-300">
          

            <section className="text-center py-8">
                <h2 className="text-4xl font-bold mb-4 transition-transform transform hover:translate-y-1 hover:shadow-lg">
                    ¿Qué Hacemos?
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    En TextileUniforms, nos especializamos en la confección de uniformes de alta calidad para diversas industrias. 
                    Utilizamos materiales premium que ofrecen comodidad, durabilidad y estilo, asegurando que cada uniforme esté diseñado 
                    para satisfacer las necesidades específicas de nuestros clientes.
                </p>
                <button className="bg-[#9b59b6] text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                    Ver Nuestros Productos
                </button>
            </section>

            {/* Sección de Uniformes Escolares */}
            <section className="my-8 px-8">
                <h2 className="text-3xl font-bold text-center mb-6">Uniformes Escolares</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {uniforms.map((uniform, index) => (
                        <div key={index} className="flex items-center">
                            <img 
                                src={uniform.src} 
                                alt={uniform.alt} 
                                className="w-48 h-48 object-cover rounded-lg" 
                            />
                            <div className="ml-4 p-2 rounded-lg border-2 border-[#9b59b6]">
                                <p className="text-white font-bold whitespace-pre-line">{uniform.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Servicios */}
            <section className="py-8">
                <h2 className="text-3xl font-bold text-center mb-6 transition-transform transform hover:translate-y-1 hover:shadow-lg">
                    Nuestros Servicios
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Confección Personalizada</h3>
                        <p className="text-gray-300">Diseñamos y confeccionamos uniformes según tus especificaciones y necesidades.</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Entrega Rápida</h3>
                        <p className="text-gray-300">Ofrecemos tiempos de entrega rápidos para que recibas tus uniformes cuando los necesites.</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Atención al Cliente</h3>
                        <p className="text-gray-300">Nuestro equipo de soporte está siempre disponible para ayudarte con cualquier consulta o necesidad.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Index;