$("#handlebiz").live("click",function() {
    console.log(' handlebiz clicked');
    $.ajax({
        'url' : 'http://localhost:3000/handlebiz',
        'type' : 'POST'
    });
});

$("#takeoff").live("click",function() {
    console.log(' takeoff clicked');
    $.ajax({
        'url' : 'http://localhost:3000/takeoff',
        'type' : 'POST'
    });
});

$("#land").live("click",function() {
    console.log(' land clicked');
    $.ajax({
        'url' : 'http://localhost:3000/land',
        'type' : 'POST'
    });
});

$("#leftButton").live("vmousedown",function() {
    console.log(' Left Button has been clicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorLeftOn',
        'type' : 'PUT'
    });
})

$("#leftButton").live("vmouseup",function() {
    console.log(' Left Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorLeftOff',
        'type' : 'PUT'
    });
})

$("#rightButton").live("vmousedown",function() {
    console.log(' Right Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorRightOn',
        'type' : 'PUT'
    });
})

$("#rightButton").live("vmouseup",function() {
    console.log(' Right Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorRightOff',
        'type' : 'PUT'
    });
})

$("#upButton").live("vmousedown",function() {
    console.log(' Up Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorUpOn',
        'type' : 'PUT'
    });
})

$("#upButton").live("vmouseup",function() {
    console.log(' Up Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorUpOff',
        'type' : 'PUT'
    });
})

$("#downButton").live("vmousedown",function() {
    console.log(' Down Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorDownOn',
        'type' : 'PUT'
    });
})

$("#downButton").live("vmouseup",function() {
    console.log(' Down Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/motorDownOff',
        'type' : 'PUT'
    });
})

$("#fireButton").live("vmousedown",function() {
    console.log(' Fire Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/fireOn',
        'type' : 'PUT'
    });
})

$("#fireButton").live("vmouseup",function() {
    console.log(' Fire Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:3000/fireOff',
        'type' : 'PUT'
    });
})


