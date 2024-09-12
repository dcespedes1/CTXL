import express from 'express';
import { createProductos, deleteProductos, getAllProductos, getProductos, updateProductos } from '../controllers/productos.js';
import { createPedidos, deletePedidos, getAllPedidos, getPedidos, updatePedidos } from '../controllers/pedidos.js';
import { createEmpleado, deleteEmpleado, getAllEmpleado, getEmpleado, updateEmpleado } from '../controllers/empleado.js';
import { createAdministrador, deleteAdministrador, getAdministrador, getAllAdministrador, updateAdministrador } from '../controllers/administrador.js';

const router = express.Router();
// Rutas para Productos
router.get('/productos', getAllProductos);
router.get('/productos/:id_producto', getProductos);
router.post('/productos', createProductos);
router.put('/productos/:id_producto', updateProductos);
router.delete('/productos/:id', deleteProductos);

// Rutas para Pedidos
router.get('/pedidos', getAllPedidos);
router.get('/pedidos/:id_pedido', getPedidos);
router.post('/pedidos', createPedidos);
router.put('/pedidos/:id_pedido', updatePedidos);
router.delete('/pedidos/:id', deletePedidos);
//rutas para empleados
router.get('/empleado', getAllEmpleado);
router.get('/empleado/:id_Empleado', getEmpleado);
router.post('/empleado', createEmpleado);
router.put('/empleado/:id_Empleado', updateEmpleado);
router.delete('/empleado/:id', deleteEmpleado);
//rutas para administrador
router.get('/administrador', getAllAdministrador);
router.get('/administrador/:id_administrador', getAdministrador);
router.post('/administrador', createAdministrador);
router.put('/administrador/:id_administrador', updateAdministrador);
router.delete('/administrador/:id', deleteAdministrador);
router.get('/', (req, res) => {
    res.send('Bienvenido a la API en /api');
});
export default router;
