import Empleado from "../models/empleado.js";

export const getAllEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findAll();
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getEmpleado = async (req, res) => {
    try {
        const { id_Empleado } = req.params;
        if (!id_Empleado) {
            return res.status(400).json({ error: 'El parámetro id_Empleado es requerido' });
        }
        const empleado = await Empleado.findByPk(id_Empleado);

        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.json(empleado);
    } catch (error) {
        console.error('Error al obtener el empleado:', error);
        res.status(500).json({ error: 'Error al obtener el empleado' });
    }
};
//Crear Empleado
export const createEmpleado = async (req, res) => {
    try {
        await Empleado.create(req.body);
        res.json({
            message: "¡Registro creado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// Actualizar un Empleado existente
export const updateEmpleado = async (req, res) => {
    try {
        await Empleado.update(req.body, {
            where: { id_Empleado: req.params.id }
        });
        res.json({
            message: "¡Actualización correcta!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
// Eliminar un Empleado
export const deleteEmpleado = async (req, res) => {
    try {
        console.log('Parametros recibidos:', req.params);  // Verifica los parámetros recibidos
        const { id_Empleado } = req.params;
        if (!id_Empleado) {
            return res.status(400).json({ message: "ID no proporcionado" });
        }
        const Empleados = await Empleado.findOne({
            where: { id_Empleado: id_Empleado }
        });
        if (!Empleados) {
            return res.status(404).json({
                message: "Empleado no encontrado"
            });
        }
        await Empleado.destroy({
            where: { id_Empleado: id_Empleado }
        });
        res.json({
            message: "¡Eliminación correcta!"
        });
    } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: error.message });
    }
};