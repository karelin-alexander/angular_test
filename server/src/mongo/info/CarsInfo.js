var m = require('./../ConnectDB');

var carsInfo = new m.mongoose.Schema({
    name: String,
    model: String,
    year: Number,
    mileage: Number,
    amount: Number,
    color: String,
    type: String,
    fuel: String,
    transmission: String,
    img: String,
    phoneNumbers: String
});

var Cars = m.mongoose.model('cars', carsInfo);

module.exports.Cars = Cars;