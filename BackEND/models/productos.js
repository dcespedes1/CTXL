// Importa la conexión a la base de datos
import db from "../database/db.js";
// Importa Sequelize
import { DataTypes } from "sequelize";

const Productos = db.define ('productos', {
    id_producto: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    CantidadR: { type: DataTypes.INTEGER, allowNull: false },
    Material: { type: DataTypes.STRING, allowNull: false },
    Colores: { type: DataTypes.STRING, allowNull: false },
    id_administrador: { type: DataTypes.INTEGER, allowNull: false },
    id_Empleado: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'productos',
    timestamps: false 
});

export default Productos;
