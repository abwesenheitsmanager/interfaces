const Sequelize = require('sequelize');

const database = process.env.DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DB_DIALECT;

export const sequelize = new Sequelize(database,username,password, {
    host: host,
    dialect: dialect
})