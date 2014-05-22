var express = require('express'),
    util = require('util'),
    five = require("johnny-five"),
    app = express(),
    staticPath = __dirname + "/";

var motorRight, motorLeft, motorUp, motorDown, fire;

var board = new five.Board();

board.on("ready", function() {
    motorRight = new five.Motor(9);
    motorLeft = new five.Motor(8);
    motorUp = new five.Motor(10);
    motorDown = new five.Motor(11);
    fire = new five.Motor(12);
    util.debug('init complete');
});

app.post('/handlebiz', function(req,res) {
    console.log("handle biz")
    motorRight.start();
    setTimeout(function() {
        motorRight.stop();
        motorUp.start();
        setTimeout(function() {
            motorUp.stop();
            motorDown.start();
            setTimeout(function() {
                motorDown.stop();
                motorLeft.start();
                setTimeout(function() {
                    motorLeft.stop();
                    motorRight.start();
                    setTimeout(function() {
                        motorRight.stop();
                        fire.start();
                        setTimeout(function() {
                            fire.stop();
                        }, 15000);
                    }, 400);
                }, 1500);
            }, 600);
        }, 500);
    }, 1000);

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
    console.log("left on")
    res.send(200);
});

app.put('/motorLeftOff', function(req,res) {
    motorLeft.stop();
    console.log("left off")
    res.send(200);
});


app.put('/motorUpOn', function(req,res) {
    motorUp.start();
    console.log("up on")
    res.send(200);
});

app.put('/motorUpOff', function(req,res) {
    motorUp.stop();
    console.log("up off")
    res.send(200);
});


app.put('/motorDownOn', function(req,res) {
    motorDown.start();
    console.log("down on")
    res.send(200);
});

app.put('/motorDownOff', function(req,res) {
    motorDown.stop();
    console.log("down off")
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

app.listen(3001);

util.debug('Server running');