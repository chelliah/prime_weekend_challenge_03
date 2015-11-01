/**
 * Created by aronthomas on 10/30/15.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var doMath = require('./modules/doSomeMath');

var app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

//app.post('/data', function(req,res){
//    var data = req.body;
//    var num = doMath(data);
//    res.send({"result" : num});
//    //res.send(num);
//    console.log(num);
//});

app.post('/Add', function(req,res){
    console.log('add');
    var data = req.body;
    var num = doMath(data);
    res.send({"result" : num});
});

app.post('/Subtract', function(req,res){
    console.log('subtract');
    var data = req.body;
    var num = doMath(data);
    res.send({"result" : num});
});

app.post('/Multiply', function(req,res){
    console.log('multiply');
    var data = req.body;
    var num = doMath(data);
    res.send({"result" : num});
});

app.post('/Divide', function(req,res){
    console.log('divide');
    var data = req.body;
    var num = doMath(data);
    res.send({"result" : num});
});

app.get('/*', function(req,res){
    var file = req.params[0] || 'index.html';
    res.sendFile(path.join(__dirname,"./public", file));
});

app.listen(app.get('port'), function(){
    console.log('listening on port: ', app.get('port'));
});