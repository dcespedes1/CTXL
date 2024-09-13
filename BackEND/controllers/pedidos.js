import Pedidos from "../models/pedidos.js";

export const getAllPedidos = async (req, res) => {
    try {
        const pedidos = await Pedidos.findAll();
        res.json(pedidos);
    } catch (error) {
        res.json({ message: error.message });
    }
};
export const getPedidos = async (req, res) => {
    try {
        const { id_pedido } = req.params;
        if (!id_pedido) {
            return res.status(400).json({ error: 'El parámetro id_pedido es requerido' });
        }
        const pedido = await Pedidos.findByPk(id_pedido);
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        console.error('Error al obtener el pedido:', error);
        res.status(500).json({ error: 'Error al obtener el pedido' });
    }
};
//Crear Pedidos
export const createPedidos = async (req, res) => {
    try {
        await Pedidos.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// Actualizar un Pedidos existente
export const updatePedidos = async (req, res) => {
    try {
        await Pedidos.update(req.body, {
            where: { id_Pedido: req.params.id_Pedido }  // Capturamos el id_producto correctamente
        });
        res.json({
            message: "¡Actualización correcta!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};


// Eliminar un Pedidos
export const deletePedidos = async (req, res) => {
    try {
        console.log('Parametros recibidos:', req.params);  // Verifica los parámetros recibidos
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID no proporcionado" });
        }
        const pedido = await Pedidos.findOne({
            where: { id_Pedido: id }
        });
        if (!pedido) {
            return res.status(404).json({
                message: "pedido no encontrado"
            });
        }
        await Pedidos.destroy({
            where: { id_Pedido: id }
        });
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: error.message });
    }
};