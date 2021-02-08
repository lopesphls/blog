const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./src/database/database');

const app = express();

//View engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

//bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso');
    }).catch((error) => {
        console.log(error);
    })

//Routes
app.get('/',(req, res) => {
    res.render('index');
})


app.listen(3000, () => {
    console.log('servidor iniciado');
    console.log('http://localhost:3000');
})