$("#leftButton").live("vmousedown",function() {
    console.log(' Left Button has been clicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorLeftOn',
        'type' : 'PUT'
    });
})

$("#leftButton").live("vmouseup",function() {
    console.log(' Left Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorLeftOff',
        'type' : 'PUT'
    });
})

$("#rightButton").live("vmousedown",function() {
    console.log(' Right Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorRightOn',
        'type' : 'PUT'
    });
})

$("#rightButton").live("vmouseup",function() {
    console.log(' Right Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorRightOff',
        'type' : 'PUT'
    });
})

$("#upButton").live("vmousedown",function() {
    console.log(' Up Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorUpOn',
        'type' : 'PUT'
    });
})

$("#upButton").live("vmouseup",function() {
    console.log(' Up Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorUpOff',
        'type' : 'PUT'
    });
})

$("#downButton").live("vmousedown",function() {
    console.log(' Down Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorDownOn',
        'type' : 'PUT'
    });
})

$("#downButton").live("vmouseup",function() {
    console.log(' Down Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/motorDownOff',
        'type' : 'PUT'
    });
})

$("#fireButton").live("vmousedown",function() {
    console.log(' Fire Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/fireOn',
        'type' : 'PUT'
    });
})

$("#fireButton").live("vmouseup",function() {
    console.log(' Fire Button has been unclicked');

    $.ajax({
        'url' : 'http://localhost:8000/fireOff',
        'type' : 'PUT'
    });
})


