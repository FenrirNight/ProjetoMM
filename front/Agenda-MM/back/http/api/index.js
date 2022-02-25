const http = require("http");
const URL = require("url");
const fs = require('fs')
const express = require('express');

const app = express(),
        bodyParser = require("body-parser");
        port = 3000;

const agendas = [];

var nedb = require('nedb');
var db = new nedb({filename: 'pessoas.db', autoload: true});

app.use(bodyParser.json());

app.get('/api/pessoas', (req, res) => {
  res.json(agendas);
});

app.post('/api/pessoas', (req, res) => {
    console.log(req.body);
  const pessoas = req.body.pessoa;
  agendas.push(pessoas);
  

  db.insert(pessoas, function(err){
    if(err)return console.log(err); //caso ocorrer algum erro
    res.send("Cadastro Realizado");
  });
});

app.get('/', (req,res) => {
   db.find({}, function(err, pessoas){
    if(err)return console.log(err);
       res.json (pessoas);
    });

});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});