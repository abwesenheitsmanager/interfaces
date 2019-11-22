import express from 'express';
import dotenv from 'dotenv';
import {sequelize} from "../cfg/conn";

dotenv.config({path: './../.env'});

const app = express();

app.get('/', (req, res) => {
    res.send('Hallo MF');
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

})