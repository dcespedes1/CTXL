import Productos from "../models/productos.js"; // Ajusta según tu estructura de modelos
import Pedidos from "../models/pedidos.js";

export const stock = async (req, res) => {
    try {
        const productos = await Productos.findAll();
        const pedidos = await Pedidos.findAll();

        const stockAlerts = {
            pedidos: pedidos.length, // Ejemplo de cálculo
            materiales: productos.reduce((acc, p) => acc + p.CantidadR, 0),
        };

        res.json(stockAlerts);
    } catch (error) {
        console.error('Error al obtener alertas de stock:', error);
        res.status(500).json({ message: 'Error al obtener alertas de stock.' });
    }
};