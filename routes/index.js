var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.writeHead(200,'OK',{'Content-Type':'text/plain; charset=utf-8'});
    res.write("Hello Express.js");
    res.end();



});

module.exports = router;
