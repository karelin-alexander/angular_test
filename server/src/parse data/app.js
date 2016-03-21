var request = require("request"),
    cheerio = require("cheerio"),
    $, cars = [];

for(var i = 1; i <= 1; i++) {
  var url = "http://public.aw.by/search.php?page=" + i;

  request(url, function (error, response, body) {
    if (!error) {
      $ = cheerio.load(body.toString('windows-1251'));
      $('.content2').toArray().forEach(parseCar);

      console.log(cars);
    } else {
      console.log(error);
    }
  });
}

function parseCar(car) {
  var name = $(car).find('a').first().text();
  var img = $(car).find('img').attr('src');
  //var desc = $(car).find('td.link').first();
  var price = parseInt($(car).find('.price').first().text());

  cars.push({
    name: name,
    //desc: desc,
    img: img,
    price: price
  });
}