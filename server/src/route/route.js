var n = require('./../mongo/info/CarsInfo');

var express = require('express');
var app = express();

var router = express.Router();

router.get('/carData', function (req, res) {
    n.Cars.find(function (err, cars) {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(cars);
        res.end();
    });
});

module.exports.app = app;
module.exports.router = router;