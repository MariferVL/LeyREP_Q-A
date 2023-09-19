const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv'); 

dotenv.config(); 

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html')); 
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});