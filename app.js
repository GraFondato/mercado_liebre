const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const puerto = 3001;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let ruta = path.join(__dirname + '/views/home.html');
    res.sendFile(ruta);
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.post('/pagina-principal', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/pagina-principal', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
})


const port = process.env.PORT || 3001;
app.listen(port,() =>console.log(`servidor corriendo en el puerto ${port}`));

