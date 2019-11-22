import Sequelize from "sequelize";

const database = process.env.DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.HOST;
const dialect = process.env.HOST;
/* To do
export const sequelize = new Sequelize(database,username,password, {
    host: 'localhost',
    dialect: 'mysql'
});*/