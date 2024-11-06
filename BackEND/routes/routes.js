import express from 'express';


import {
    createProductos, deleteProductos, getAllProductos, getProductos, updateProductos
} from '../controllers/productos.js';
import {
    createPedidos, deletePedidos, getAllPedidos, getPedidos, updatePedidos
} from '../controllers/pedidos.js';
import {
    createEmpleado, deleteEmpleado, getAllEmpleado, getEmpleado, loginEmpleado, updateEmpleado
} from '../controllers/empleado.js';
import {
    createAdministrador, deleteAdministrador, getAdministrador, getAllAdministrador, updateAdministrador,loginAdministrador, resetPassword
} from '../controllers/administrador.js';
import {
    stock
} from '../controllers/stock.js'

const router = express.Router();

// Rutas para Productos
router.get('/productos', getAllProductos);
router.get('/productos/:id_producto', getProductos);
router.post('/productos', createProductos);
router.put('/productos/:id', updateProductos);
router.delete('/productos/:id', deleteProductos);

// Rutas para Pedidos
router.get('/pedidos', getAllPedidos);
router.get('/pedidos/:id_pedido', getPedidos);
router.post('/pedidos', createPedidos);
router.put('/pedidos/:id_Pedido', updatePedidos);
router.delete('/pedidos/:id', deletePedidos); 


// Rutas para Empleados
router.get('/empleado', getAllEmpleado);
router.get('/empleado/:id_Empleado', getEmpleado);
router.post('/empleado', createEmpleado);
router.post('/empleado/login', loginEmpleado)
router.put('/empleado/:id_Empleado', updateEmpleado);
router.delete('/empleado/:id_Empleado', deleteEmpleado);  

// Rutas para Administradores
router.get('/administrador', getAllAdministrador);
router.get('/administrador/:id_administrador', getAdministrador);
router.post('/administrador', createAdministrador);
router.post('/administrador/login', loginAdministrador);
router.post('/administrador/reset-password', resetPassword);
router.put('/administrador/:id_administrador', updateAdministrador);
router.delete('/administrador/:id_administrador', deleteAdministrador);
  // Corregido: id_administrador

//ruta para stock
router.get('/stock', stock);

export default router;