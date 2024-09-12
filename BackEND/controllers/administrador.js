import Administrador from "../models/administrador.js";

export const getAllAdministrador = async (req, res) => {
    try {
        const administrador = await Administrador.findAll();
        res.json(administrador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getAdministrador = async (req, res) => {
    try {
        const { id_administrador } = req.params;
        if (!id_administrador) {
            return res.status(400).json({ error: 'El parámetro id_administrador es requerido' });
        }
        const administrador = await Administrador.findByPk(id_administrador);
        if (!administrador) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }
        res.json(administrador);
    } catch (error) {
        console.error('Error al obtener el administrador:', error);
        res.status(500).json({ error: 'Error al obtener el administrador' });
    }
};
// Crear un nuevo Administrador
export const createAdministrador = async (req, res) => {
    try {
        await Administrador.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// Actualizar un Administrador existente
export const updateAdministrador = async (req, res) => {
    try {
        await Administrador.update(req.body, {
            where: { id_administrador: req.params.id }
        });
        res.json({
            message: "¡Actualización correcta!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// Eliminar un Administrador
export const deleteAdministrador = async (req, res) => {
    try {
        console.log('Parametros recibidos:', req.params);  // Verifica los parámetros recibidos
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID no proporcionado" });
        }
        const administrador = await Administrador.findOne({
            where: { id_administrador: id }
        });
        if (!administrador) {
            return res.status(404).json({
                message: "administrador no encontrado"
            });
        }
        await Administrador.destroy({
            where: { id_administrador: id }
        });
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: error.message });
    }
};