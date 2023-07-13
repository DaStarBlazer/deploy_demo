var express = require('express');
var app = express();
var ejs = require('ejs');
var porta = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render('home');
})
app.use(express.static(__dirname + "/public"));

app.get("/about", function(req, res){
    res.render('about');
})

app.listen(porta, function() {
    console.log("YelpCamp is running on port: " + porta);
})