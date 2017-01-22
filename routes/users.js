/**
 * Created by Олег Шиловский on 13.12.2016.
 */
var express = require('express');
var router = express.Router();
var db = require('../model/db');
/* GET post profile. */



router.get('/', function(req, res, next) {
    res.writeHead(200,'OK',{'Content-Type':'text/plain; charset=utf-8'});
    res.write("Hello stranger !");
    res.end();
});



router.get('/:username', function(req, res, next) {
    let uname = req.params.username;
    res.writeHead(200,'OK',{'Content-Type':'text/plain; charset=utf-8'});
    res.write(`Hello ${uname}!`);
    res.end();
});

module.exports = router;
