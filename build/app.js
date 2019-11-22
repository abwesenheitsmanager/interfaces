"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _conn = require("./cfg/conn");

var _User = require("./models/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: './../.env'
});

const app = (0, _express.default)();
app.get('/', (req, res) => {
  res.send('Hallo MF');
});
const PORT = process.env.PORT;

_conn.sequelize.authenticate().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

_User.User.sync({
  force: false
}).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return _User.User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
}); // Find all users


_User.User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});