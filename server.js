// imports

var express = require ('express');
var app = express();
var port= 3100;
var bodyParser= require('body-parser');

// Importing sqlite3 module in our Node.Js Project

var sqlite = require ('sqlite3');
// connecting to Database

var db = new sqlite3.Database('myDatabase.db');

//mounts BodyParser as middleware - every request passes through it

app.use(bodyParser.urlencoded({extended:true}));


// Routes



//By Year
app.get('/quotes',function(req,res){
if (req.quer.year){
db.all ('SELECT * FROM Quotes WHERE year = ?', [req.query.year], function(err,rows){
if (err){
res.send(err.message);
}

}
else{
res.json(quotes);
}
});

//By Id

app.get('/quotes/:id', function(req,res){

console.log("Return Quote With ID:" + req.params.id);
res.send("Return Quote With ID:" + req.params.id);
});

app.post('/quotes', function(req,res){
console.log("Insert A New Quote:"+ req.body.quote);
res.send(req.body);
});


app.listen(port,function(){
console.log("You Are Listening On Port:" +port);
});
















