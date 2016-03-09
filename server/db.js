var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var format = require('util').format;

var url = 'mongodb://localhost:27017/car';

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    var collection = db.collection('car');

    collection.count(function(err, count){
        console.log(format("count = %s", count));
    });

    collection.find().toArray(function(err, result){
        console.dir(result);
        db.close();
    });

});