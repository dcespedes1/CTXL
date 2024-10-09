import React from 'react';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2dd3afc5-d146-4b4b-8cde-179526cfcfde");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
    
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center p-10">
      <section className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full text-white border border-black">

        <form onSubmit={onSubmit}>
          <h2 className="text-2xl text-center mb-4">Formulario De Contacto</h2>
          <div className="mb-4">
            <label className="block mb-2">Nombre Completo</label>
            <input
              type="text"
              className="w-full p-2 bg-transparent border-b-2 border-purple-600 text-white rounded focus:outline-none focus:ring focus:ring-purple-300 transition duration-200 hover:border-purple-700"
              placeholder="Ingrese Su Nombre" name='name'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Correo Electronico</label>
            <input
              type="email"
              className="w-full p-2 bg-transparent border-b-2 border-purple-600 text-white rounded focus:outline-none focus:ring focus:ring-purple-300 transition duration-200 hover:border-purple-700"
              placeholder="Ingresa tu E-mail" name='email'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Tu mensaje:</label>
            <textarea
              className="w-full p-2 bg-transparent border-b-2 border-purple-600 text-white rounded focus:outline-none focus:ring focus:ring-purple-300 transition duration-200 hover:border-purple-700"
              placeholder="Aquí va Tu Mensaje"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-200"
          >
            Envía el Mensaje
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
