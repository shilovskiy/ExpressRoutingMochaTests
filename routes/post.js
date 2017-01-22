var express = require('express');
var router = express.Router();

/* POST request */

router.post('*', function(req, res, next) {

    if ((req.headers['content-type']=='application/json')&&(req.headers['content-length']!=="0")){

        if (req.body['Header']==='key'){
            res.writeHead(200,'OK',{'Content-Type':'application/json'});
            res.write(JSON.stringify(req.body));

        }else{

            res.writeHead(401,'WWW-Authenticate',{'Content-Type':'text/plain; charset=utf-8'});
            res.write(JSON.stringify(req.body));
        }

        res.end();

    }else{
        res.writeHead(404,'not found',{'Content-Type':'text/plain; charset=utf-8'});
        res.write('404 Not Found');
        let err = new Error("404 Not Found");
        next(err);
    }


    //res.send(200);
});




module.exports = router;
