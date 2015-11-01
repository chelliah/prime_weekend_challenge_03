/**
 * Created by aronthomas on 11/1/15.
 */
var express = require('express');
var path = require('path');
var doMath = require('../modules/doSomeMath');
var router = express.Router();

router.post('/Add', function(req,res){
    console.log('you requested addition');
    var num = doMath(req.body);
    res.send({"result" : num});
});

router.post('/Subtract', function(req,res){
    console.log('you requested subtraction');
    var num = doMath(req.body);
    res.send({"result" : num});
});

router.post('/Multiply', function(req,res){
    console.log('you requested multiplication');
    var num = doMath(req.body);
    res.send({"result" : num});
});

router.post('/Divide', function(req,res){
    console.log('you requested division');
    var num = doMath(req.body);
    res.send({"result" : num});
});

router.get('/*', function(req,res){
    var file = req.params[0] || 'index.html';
    res.sendFile(path.join(__dirname,"../public", file));
});

module.exports = router;