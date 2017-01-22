var express = require('express');
var router = express.Router();
/* GET post profile. */

router.all('*', function(req, res, next) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

    res.writeHead(200,'OK',{'Content-Type':'text/plain; charset=utf-8'});
    res.write(`You requested URI: ${fullUrl}`);
    res.end();

});

// router.get('/', function(req, res, next) {
//     let id = req.params.id;
//     //res.render('profile', { "title":"Профиль контакта"} );
//     next();
// });
//
// router.param('id', function (req, res, next, id) {
//     var collection = db.get().collection('Contacts');
//
//     var user = collection.find({ _id: id });
//     if (user) {
//         req.user = user;
//     } else {
//         next(new Error('User not found'));
//     }
//     next();
// });



module.exports = router;
