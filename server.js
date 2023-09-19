import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {createPrediction} from './controllers/flowise.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static( 'public'));

app.use('/src', express.static('src'));


// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post("/api/flowise", createPrediction);


app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});





