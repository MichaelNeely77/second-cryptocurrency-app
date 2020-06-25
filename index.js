var express = require('express')
var app = express()
var request = require('request')

app.use(express.static(__dirname + '/public'));


app.listen(3000)
