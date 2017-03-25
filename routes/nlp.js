// importa librerias necesarias
const express = require('express');
const router = express.Router();
// libreria de procesamiento de lenguaje natural
const nlp = require('compromise');
// textos de prueba
const corpus = require('nlp-corpus');
const fs = require('fs')


/* GET home page. */
router.get('/', function(req, res) {
  // obtiene un texto aleatorio de discursos presidenciales
  var txt = fs.readFileSync(__dirname+'/Hirschman&Currie.txt', 'utf8');


  // entrega el texto al motor de NLP
  var r = nlp(txt);
  // extrae las personas del texto
  var people = r.people();
  // limpia un poco el texto
  people.normalize();
  // ordena el resultado por frecuencia
  people.sort('frequency').unique();

var r = nlp(txt);
  //grab the mentioned locations
  var places = r.places()

  //sort them alphabetically
  places.sort('alpha')


  // hace el render de la vista entregando el texto, la lista de personas
  // y sustantivos
  res.render('nlp', {
    txt: txt,
    people: {
      list: people.out('array'),
      length: people.list.length
    },
    places: {
      list: places.out('array'),
      length: places.list.length
    }
    });
});

module.exports = router;
