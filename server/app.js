/**
 * Created by aronthomas on 10/30/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var index = require('./routes/index.js');

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

app.use('/',index);

app.listen(app.get('port'), function(){
    console.log('listening on port: ', app.get('port'));
});