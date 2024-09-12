import { Sequelize } from 'sequelize';

const db = new Sequelize('ctxl', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
});

export default db