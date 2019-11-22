"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const database = process.env.DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.HOST;
const dialect = process.env.HOST;
const sequelize = new _sequelize.default(database, username, password, {
  host: 'localhost',
  dialect: 'mysql'
});
exports.sequelize = sequelize;