var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var b = fs.readFileSync("index.html");
  //response.set('Content-Type', 'text/html');
  response.send(b.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
