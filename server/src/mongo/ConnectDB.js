var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');

mongoose.connection.on('error', function (err) {
    console.log('Внимание! Ошибка соединения с БД: ' + err);
});

mongoose.connection.on('connected', function () {
    console.log('Соединение с БД осуществленно.');
});

module.exports.mongoose = mongoose;