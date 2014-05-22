$(function() {

    $("#handlebiz").live("click",function() {
        console.log(' handlebiz clicked');
        handlebiz();
    });

    $("#takeoff").live("click",function() {
        console.log(' takeoff clicked');
        launchDrone();
    });

    $("#land").live("click",function() {
        console.log(' land clicked');
        landDrone();
    });

    $("#leftButton").live("vmousedown",function() {
        console.log(' Left Button has been clicked');

        $.ajax({
            'url' : '/motorLeftOn',
            'type' : 'PUT'
        });
    })

    $("#leftButton").live("vmouseup",function() {
        console.log(' Left Button has been unclicked');

        $.ajax({
            'url' : '/motorLeftOff',
            'type' : 'PUT'
        });
    })

    $("#rightButton").live("vmousedown",function() {
        console.log(' Right Button has been unclicked');

        $.ajax({
            'url' : '/motorRightOn',
            'type' : 'PUT'
        });
    })

    $("#rightButton").live("vmouseup",function() {
        console.log(' Right Button has been unclicked');

        $.ajax({
            'url' : '/motorRightOff',
            'type' : 'PUT'
        });
    })

    $("#upButton").live("vmousedown",function() {
        console.log(' Up Button has been unclicked');

        $.ajax({
            'url' : '/motorUpOn',
            'type' : 'PUT'
        });
    })

    $("#upButton").live("vmouseup",function() {
        console.log(' Up Button has been unclicked');

        $.ajax({
            'url' : '/motorUpOff',
            'type' : 'PUT'
        });
    })

    $("#downButton").live("vmousedown",function() {
        console.log(' Down Button has been unclicked');

        $.ajax({
            'url' : '/motorDownOn',
            'type' : 'PUT'
        });
    })

    $("#downButton").live("vmouseup",function() {
        console.log(' Down Button has been unclicked');

        $.ajax({
            'url' : '/motorDownOff',
            'type' : 'PUT'
        });
    })

    $("#fireButton").live("vmousedown",function() {
        console.log(' Fire Button has been unclicked');

        $.ajax({
            'url' : '/fireOn',
            'type' : 'PUT'
        });
    })

    $("#fireButton").live("vmouseup",function() {
        console.log(' Fire Button has been unclicked');

        $.ajax({
            'url' : '/fireOff',
            'type' : 'PUT'
        });
    })

    launchDrone = function() {
        $.ajax({
            'url' : '/takeoff',
            'type' : 'POST'
        });
    };
    landDrone = function() {
        $.ajax({
            'url' : '/land',
            'type' : 'POST'
        });
    }
    handlebiz = function() {
        $.ajax({
            'url' : '/handlebiz',
            'type' : 'POST'
        });
    };
    $("#button").bind('touchstart mousedown', function(){
        $(this).addClass('active');
        handlebiz();
    });
    $("#button").bind('touchend mouseup', function(){
        $(this).removeClass('active');
        landDrone();
    });
});