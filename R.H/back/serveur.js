var express = require('express');

var route = require('./Route/route.js').route

var app1 = express();

route(app1);

app1.listen(8080);

console.log('Server demarer')