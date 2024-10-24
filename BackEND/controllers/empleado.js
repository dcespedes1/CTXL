import Empleado from "../models/empleado.js";

//traer todos los empleados
export const getAllEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.findAll();
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// traer un empleado
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
// Ruta en tu backend para el login de empleado
export const loginEmpleado = async (req, res) => {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña) {
        return res.status(400).json({ message: 'Correo y contraseña son requeridos.' });
    }

    try {
        const empleado = await Empleado.findOne({ where: { correo } });
        if (!empleado) {
            return res.status(404).json({ message: 'empleado no encontrado.' });
        }

        // Comparación directa de contraseñas en texto plano
        if (contraseña !== empleado.contraseña) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        // Aquí puedes generar el token o hacer lo que necesites al iniciar sesión
        res.json({ message: 'Login exitoso', empleado: { id: empleado.id_Empleado, correo: empleado.correo } });
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ message: 'Error del servidor.' });
    }
};
//Actualizar empleado
export const updateEmpleado = async (req, res) => {
    const { id_Empleado } = req.params; 

    // Verificación de ID
    if (!id_Empleado) {
        return res.status(400).json({ message: "ID no proporcionado" });
    }

    const { Nombre, TipoD, NumeroD, FechaN, Correo, celular, contraseña, id_administrador } = req.body;
    
    // Validaciones de los campos requeridos
    if (!Nombre || !TipoD || !NumeroD || !FechaN || !Correo || !celular ||!contraseña || !id_administrador) {
        return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    try {
        // Intenta actualizar el registro en la base de datos
        const [updated] = await Empleado.update(req.body, {
            where: { id_Empleado }  // El campo debe coincidir con la columna en la base de datos
        });

        // Verifica si se actualizó algún registro
        if (updated) {
            return res.json({ message: "¡Actualización correcta!" });
        } else {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar empleado:", error);
        // Devolver error interno del servidor sin exponer detalles sensibles
        return res.status(500).json({ message: "Error interno del servidor" });
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