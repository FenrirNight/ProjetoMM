var Datastore = require('nedb');
var db = new Datastore ({filename: "banco.db", autoload: true});

var pessoa = {
    nome: "Aldir",
    email:"teste@teste.com",
    telefone: "99 12345-6789"
};

db.insert(pessoa, function(err){
    if(err)return console.log(err);

    console.log("Novo Cadastro realizado!");

});