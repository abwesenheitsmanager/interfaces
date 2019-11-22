import express from 'express';
import dotenv from 'dotenv';
import {sequelize} from "./cfg/conn";
import {User} from "./models/User";

dotenv.config({path: './../.env'});

const app = express();

app.get('/', (req, res) => {
    res.send('Hallo MF');
});

const PORT = process.env.PORT;

sequelize
    .authenticate()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        });
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

User.sync({ force: false }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});

// Find all users
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
});