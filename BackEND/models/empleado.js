// Importa la conexión a la base de datos
import db from "../database/db.js";
// Importa Sequelize
import { DataTypes } from "sequelize";

const Empleado = db.define('empleado', {
    id_Empleado: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Nombre: { type: DataTypes.STRING, allowNull: false },
    TipoD: { type: DataTypes.STRING, allowNull: false },
    NumeroD: { type: DataTypes.STRING, allowNull: false },
    FechaN: {  type: DataTypes.DATE, allowNull: false },
    Correo: { type: DataTypes.STRING, allowNull: false },
    celular: { type: DataTypes.STRING, allowNull: true },
    contraseña:{type: DataTypes.STRING, allowNull: false},
    id_administrador: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'empleado',
    timestamps: false
});

export default Empleado;
