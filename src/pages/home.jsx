import React from 'react';
import '../index.css';
import ImagenN1 from '../img/ImagenN1.jpeg';
import ImagenN2 from '../img/ImagenN2.jpeg';
import ImagenN3 from '../img/ImagenN3.jpeg';
import ImagenN4 from '../img/ImagenN4.jpeg';
import ImagenN5 from '../img/ImagenN5.jpeg';
import ImagenN6 from '../img/ImagenN6.jpeg';
import ImagenN7 from '../img/ImagenN7.jpeg';
import ImagenN8 from '../img/ImagenN8.jpeg';
import ImagenN9 from '../img/ImagenN9.jpeg';

const Home = () => {
    const uniforms = [
        {
            src: ImagenN1,
            alt: "Uniforme Escolar 1",
            description: "Uniforme Escolar - Tela 100% Algodón\nElaborado por empleados altamente capacitados, este uniforme ofrece comodidad y durabilidad para los estudiantes."
        },
        {
            src: ImagenN2,
            alt: "Uniforme Escolar 2",
            description: "Uniforme - Impermeable\nDiseñado para resistir el desgaste diario, este uniforme mantiene su apariencia impecable incluso después de múltiples lavados."
        },
        {
            src: ImagenN3,
            alt: "Uniforme Escolar 3",
            description: "Chaqueta de tela en un color azul vibrante tiene un corte estructurado, con solapas marcadas, lo que sugiere un estilo formal o semiformal."
        },
        {
            src: ImagenN4,
            alt: "Uniforme Escolar 4",
            description: "Chalecos, colgados en un organizador de metal. Los colores predominantes de los chalecos son verde, azul y celeste, además de uno con un patrón de cuadros en tonos grises y negros. Las telas son ligeras y lisas."
        },
        {
            src: ImagenN5,
            alt: "Uniforme Escolar 5",
            description: "Chaleco de vestir sin mangas. Tiene un color blanco liso y está hecho con una tela satinada o similar, lo que le da un acabado suave y brillante."
        },
        {
            src: ImagenN6,
            alt: "Uniforme Escolar 6",
            description: "Exhibición de ropa casual y moderna de diferentes colores, como lila, negro y gris, todas de estilo cropped, con detalles de cordones y puños elásticos."
        },
        {
            src: ImagenN7,
            alt: "Uniforme Escolar 7",
            description: "Chaqueta estilo bomber de color azul marino. Está hecha de un material sintético brillante, nylon o poliéster, lo que le da un acabado resistente al agua."
        },
        {
            src: ImagenN8,
            alt: "Uniforme Escolar 8",
            description: "Uniforme - Impermeable\nDiseñado para resistir el desgaste diario, este uniforme mantiene su apariencia impecable incluso después de múltiples lavados."
        },
        {
            src: ImagenN9,
            alt: "Uniforme",
            description: "Uniforme Escolar - Tela de algodón, uniforme completo de color gris completamente."
        }
    ];

    return (
        <div className="bg-black text-gray-300">
            
            <section className="text-center py-8">
                <h2 className="text-4xl mb-4 transform hover:text-purple-500 transition duration-300">
                    ¿Qué Hacemos?
                </h2>
                <p className="text-lg max-w-2xl mx-auto mb-6">
                    En TextileUniforms, nos especializamos en la confección de uniformes de alta calidad para diversas industrias. 
                    Utilizamos materiales premium que ofrecen comodidad, durabilidad y estilo, asegurando que cada uniforme esté diseñado 
                    para satisfacer las necesidades específicas de nuestros clientes.
                </p>
            </section>

            {/* Sección de Uniformes Escolares */}
            <section className="my-8 px-8">
                <h2 className="text-3xl text-center mb-6 hover:text-purple-500 transition duration-300">
                    Uniformes Escolares
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {uniforms.map((uniform, index) => (
                        <div key={index} className="flex items-center">
                            <img 
                                src={uniform.src} 
                                alt={uniform.alt} 
                                className="w-48 h-48 object-cover rounded-lg" 
                            />
                            <div className="ml-4 p-2 rounded-lg border-2 border-[#9b59b6]">
                                <p className="text-white whitespace-pre-line">{uniform.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección de Servicios */}
            <section className="py-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Aquí puedes agregar tus servicios si es necesario */}
                </div>
            </section>

            {/* Footer */}
        </div>
    );
};

export default Home;
