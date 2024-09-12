// Importa la conexión a la base de datos
import db from "../database/db.js";
// Importa Sequelize
import { DataTypes } from "sequelize";

const Administrador = db.define('administrador', {
    id_administrador: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Nombre: {type: DataTypes.STRING, allowNull: false},    
    FechaNacimiento: {type: DataTypes.DATE, allowNull: false},
    TipoDoc: {type: DataTypes.STRING, allowNull: false},
    NumeroDoc: {type: DataTypes.STRING, allowNull: false},
    Correo: {type: DataTypes.STRING, allowNull: false},
    celular: {type: DataTypes.STRING, allowNull: true}
}, {
    tableName: 'administrador',
    timestamps: false
});

export default Administrador;