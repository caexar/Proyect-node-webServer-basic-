const express = require('express')
const hbs = require('hbs');
require("dotenv").config();

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
//
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//sservir contenido estatico
app.use(express.static(__dirname + "/public"));



//info que se vera en la pag segun entre al puerto
//app.get('/', (req, res) => {
//  res.sendFile(__dirname + '/public/index.html')
//});

//si se responde a la pag la palabra especifica en este caso "hola-mundo" respondera el mensaje indicado
//app.get('/hola-mundo', (req, res) => {
//    res.send('Hola mundo en su respuesta')
//});

app.get('/', (req, res) =>{
  res.render('home', { //renderisamos y agregamos propiedades para usarla luego en el index "hbs"
    nombre: "Cesar Ceveriche",
    titulo: "Curso de Node"
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: "Cesar Ceveriche",
    titulo: "Generic"
  })
});

app.get('/elements', (req, res) => {
  res.render('elements.hbs', {
    nombre: "Cesar Ceveriche",
    titulo: "Elements"
  })
});

//creamos una ruta directa en la pag para quitarnos el .html y sea mejor visualmente
//uso normal sin renderizar con ayuda de Handlebars hbs *******
//app.get('/generic', (req, res) => {
//  res.sendFile(__dirname + '/public/generic.html')
//});



//en cuyo caso el usuario responda cualquier cosa q no tengamos especificada con el * es valido
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});



//esta forma tambien es valida pero usaremos mejor una funcion de flecha
//app.get('/*', function (req, res) {
//    res.send('error 404 no inventes crack')
//});

app.listen(port, () => {
    console.log(`Example app listening st htto://localhost:${port}`)
  })