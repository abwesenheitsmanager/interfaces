"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _conn = require("../cfg/conn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const User = _conn.sequelize.define('user', {
  // attributes
  firstName: {
    type: _sequelize.default.STRING,
    allowNull: false
  },
  lastName: {
    type: _sequelize.default.STRING // allowNull defaults to true

  }
}, {// options
});

exports.User = User;