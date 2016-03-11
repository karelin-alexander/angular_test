var a = require('./route/route');
var b = require('./mongo/ConnectDB');

var port = 3000;

a.app.use(a.router);
a.app.listen(port, function () {
  console.log('Сервер запущен - 127.0.0.1:' + port);
});