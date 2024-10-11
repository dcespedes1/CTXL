// Importa la conexión a la base de datos
import db from "../database/db.js";
// Importa Sequelize
import { DataTypes } from "sequelize";

const Administrador = db.define('administrador', {
    id_administrador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: { // Usar notación camelCase
        type: DataTypes.STRING,
        allowNull: false
    },    
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipoDoc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroDoc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Asegura que el correo sea único
        validate: {
            isEmail: true // Valida que el formato sea un correo electrónico
        }
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 100] // Asegura que la contraseña tenga entre 6 y 100 caracteres
        }
    },
}, {
    tableName: 'administrador',
    timestamps: false,

});

export default Administrador;
