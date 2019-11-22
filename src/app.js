import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './../.env' });

const app = express();

app.get('/', (req, res) => {
    res.send('Hallo MF');
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})