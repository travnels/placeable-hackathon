var express = require('express'),
    util = require('util'),
   five = require("johnny-five"),
   // board = new five.Board(),
    app = express(),
    arDrone = require('ar-drone'),
    droneClient = arDrone.createClient(),
    staticPath = __dirname + "/";

var motorRight, motorLeft, motorUp, motorDown, fire;

// board.on("ready", function() {
//     motorRight = new five.Motor(9);
//     motorLeft = new five.Motor(8);
//     motorUp = new five.Motor(10);
//     motorDown = new five.Motor(11);
//     fire = new five.Motor(12);
//     util.debug('init complete');
// });

app.get('/button', function(req, res) {
    res.sendfile('button.html');
});

app.post('/handlebiz', function(req,res) {
    console.log("handlebiz")
    droneClient.takeoff();
    droneClient
      .after(1000, function() {
        this.clockwise(0.5);
      })
      .after(5000, function() {
        this.animate('flipLeft', 15);
      })
      .after(1000, function() {
        this.stop();
        this.land();
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

app.put('/motorRightOn', function(req,res) {
    motorRight.start();
    console.log("right on")
    res.send(200);
});

app.put('/motorRightOff', function(req,res) {
    motorRight.stop();
    console.log("right off")
    res.send(200);
});

app.put('/motorLeftOn', function(req,res) {
    motorLeft.start();
    console.log("right on")
    res.send(200);
});

app.put('/motorLeftOff', function(req,res) {
    motorLeft.stop();
    console.log("right off")
    res.send(200);
});


app.put('/motorUpOn', function(req,res) {
    motorUp.start();
    console.log("right on")
    res.send(200);
});

app.put('/motorUpOff', function(req,res) {
    motorUp.stop();
    console.log("right off")
    res.send(200);
});


app.put('/motorDownOn', function(req,res) {
    motorDown.start();
    console.log("right on")
    res.send(200);
});

app.put('/motorDownOff', function(req,res) {
    motorDown.stop();
    console.log("right off")
    res.send(200);
});

app.put('/fireOn', function(req,res) {
    fire.start();
    console.log("fire on")
    res.send(200);

});

app.put('/fireOff', function(req,res) {
    fire.stop();
    console.log("fire Off")
    res.send(200);

});
app.use(express.static(staticPath));

app.listen(3000);

util.debug('Server running');