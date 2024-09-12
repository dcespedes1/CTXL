import Productos from "../models/productos.js";

export const getAllProductos = async (req, res) => {
    try {
        const productos = await Productos.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getProductos = async (req, res) => {
    try {
        const { id_producto } = req.params;
        if (!id_producto) {
            return res.status(400).json({ error: 'El parámetro id_producto es requerido' });
        }
        const producto = await Productos.findByPk(id_producto);
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.error('Error al obtener el producto:', error); // Log detallado del error
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};
// Crear un nuevo producto
export const createProductos = async (req, res) => {
    try {
        await Productos.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// Actualizar un producto existente
export const updateProductos = async (req, res) => {
    try {
        await Productos.update(req.body, {
            where: { id_producto: req.params.id }
        });
        res.json({
            message: "¡Actualización correcta!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// Eliminar un producto
export const deleteProductos = async (req, res) => {
    try {
        console.log('Parametros recibidos:', req.params);  // Verifica los parámetros recibidos
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID no proporcionado" });
        }
        const producto = await Productos.findOne({
            where: { id_producto: id }
        });
        if (!producto) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }
        await Productos.destroy({
            where: { id_producto: id }
        });
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: error.message });
    }
};
