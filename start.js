var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = require('./router');

var port = process.env.PORT || 1337;

app.set('view engine', 'pug');
app.set('views', './public');

app.use('/static', express.static(__dirname + '/public'));
router(app);

app.listen(port);
