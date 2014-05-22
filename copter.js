var express = require('express'),
    util = require('util'),
    app = express(),
    arDrone = require('ar-drone'),
    staticPath = __dirname + "/";

var motorRight, motorLeft, motorUp, motorDown, fire;

var droneClient = arDrone.createClient();

app.get('/button', function(req, res) {
    res.sendfile('button.html');
});

app.post('/handlebiz', function(req,res) {
    console.log("handlebiz")
    droneClient.takeoff();
    droneClient
      .after(1000, function() {
        this.clockwise(0.5);
      });
    res.send(200);
});

app.post('/takeoff', function(req,res) {
    droneClient.takeoff();
    console.log("takeoff")
    res.send(200);
});

app.post('/land', function(req,res) {
    droneClient.land();
    console.log("land")
    res.send(200);
});

app.use(express.static(staticPath));

app.listen(3000);

util.debug('Server running');