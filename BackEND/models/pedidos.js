// Importa la conexión a la base de datos
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Pedidos = db.define ('pedidos', {
    id_Pedido: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Cliente: { type: DataTypes.STRING, allowNull: false},
    Cantidad:{type: DataTypes.INTEGER, allowNull: false},
    Prenda:  {type: DataTypes.STRING, allowNull: false},
    Tela: { type: DataTypes.STRING, allowNull: false},
    Estampado: { type: DataTypes.STRING,allowNull: true},
    Talla: { type: DataTypes.STRING, allowNull: false},
    Bordado: {type: DataTypes.STRING, allowNull: true},
    PInicial: {type: DataTypes.INTEGER, allowNull: false},
    PFinal: {type: DataTypes.INTEGER, allowNull: false},
    id_administrador: {type: DataTypes.INTEGER, allowNull: false},
    id_Empleado: {type: DataTypes.INTEGER, allowNull: false}
}, 
{ tableName: 'pedidos',
    timestamps: false
});
export default Pedidos;
