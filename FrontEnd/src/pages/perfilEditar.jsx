import React from 'react';
import '../index.css';
import { Button } from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import { Link } from 'react-router-dom';


const Perfil = () => {
  return (
    <div className="main-content">
  {/* Contenido principal de la ruta de Perfil */}
  <div className="flex h-screen flex-1">
      {/* Sidebar */}

      {/* Main Content */}
      <main
        
      >
      <div className=" w-2/4 margin-top-2px">
                    <div className="w-1/4 flex">
                        <h1 className="white-space:nowrap text-4xl font-bold">.</h1>
                        <div className="pl-[150vh] ">
                        </div>
                    </div> 
                </div>
      <div className="flex justify-center items-center h-screen ">
        <Card className="w-full max-w-2xl bg-black border-gray-800 shadow-2xl shadow-purple-600/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">Perfil usuario</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-white">Nombre</Label>
                <Input id="nombre" placeholder="Nombre" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellido" className="text-white">Apellido</Label>
                <Input id="apellido" placeholder="Apellido" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="correo" className="text-white">Correo</Label>
                <Input id="correo" placeholder="Correo" type="email" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contrasena" className="text-white">Contraseña</Label>
                <Input id="contrasena" placeholder="Contraseña" type="password" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-white">Teléfono</Label>
                <Input id="telefono" placeholder="Teléfono" type="tel" className="bg-gray-800 text-white border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="direccion" className="text-white">Dirección</Label>
                <Input id="direccion" placeholder="Dirección" className="bg-gray-800 text-white border-gray-700" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fecha-nacimiento" className="text-white">Fecha de nacimiento</Label>
              <Input id="fecha-nacimiento" type="date" className="bg-gray-800 text-white border-gray-700" />
            </div>
            <div className="flex justify-end space-x-2">
              <Link
              to="/app/perfilDetalle"
              >              
              <Button variant="outline" className="bg-gray-800 text-white border-gray-700 hover:bg-purple-600">Cancelar</Button>
              </Link>
              <Button className="bg-purple-600 text-white hover:bg-purple-700">Actualizar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
   
    </main>
    </div>

    </div>

    
  );
};

export default Perfil;