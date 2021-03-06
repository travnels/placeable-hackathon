$(function() {
    leftButton = function() {
        $.ajax({
            'url' : '/motorLeftOn',
            'type' : 'PUT'
        });
    };
    leftButtonStop = function() {
        $.ajax({
            'url' : '/motorLeftOff',
            'type' : 'PUT'
        });
    };
    rightButton = function() {
        $.ajax({
            'url' : '/motorRightOn',
            'type' : 'PUT'
        });
    };

    rightButtonStop = function() {
        $.ajax({
            'url' : '/motorRightOff',
            'type' : 'PUT'
        });
    };
    upButton = function() {
        $.ajax({
            'url' : '/motorUpOn',
            'type' : 'PUT'
        });
    };
    upButtonStop = function() {
        $.ajax({
            'url' : '/motorUpOff',
            'type' : 'PUT'
        });
    };
    downButtonStop = function() {
        $.ajax({
            'url' : '/motorDownOff',
            'type' : 'PUT'
        });
    };

    downButton = function() {
        $.ajax({
            'url' : '/motorDownOn',
            'type' : 'PUT'
        });
    };
    fireButton = function() {
        $.ajax({
            'url' : '/fireOn',
            'type' : 'PUT'
        });
    };
    fireButtonStop = function() {
        $.ajax({
            'url' : '/fireOff',
            'type' : 'PUT'
        });
    };
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

    $("#leftButton").live("vmousedown touchstart",function() {
        console.log(' Left Button has been clicked');
        leftButton();
        
    });
    $("#leftButton").live("vmouseup touchend",function() {
        console.log(' Left Button has been unclicked');
        leftButtonStop();
        
    });
    $("#rightButton").live("vmousedown touchstart",function() {
        console.log(' Right Button has been unclicked');

        rightButton();
    });
    $("#upButton").live("vmouseup touchend",function() {
        console.log(' Up Button has been unclicked');
        upButtonStop();

    });
    $("#downButton").live("vmousedown touchstart",function() {
        console.log(' Down Button has been unclicked');
        downButton();
    });

    $("#downButton").live("vmouseup touchend",function() {
        console.log(' Down Button has been unclicked');
        downButtonStop();
        
    });
    $("#fireButton").live("vmousedown touchstart",function() {
        console.log(' Fire Button has been unclicked');
        fireButton();
        
    });
    $("#fireButton").live("vmouseup touchend",function() {
        console.log(' Fire Button has been unclicked');
        fireButtonStop();

    });
    $("#rightButton").live("vmouseup touchend",function() {
        console.log(' Right Button has been unclicked');
        rightButtonStop();
    });
    $("#upButton").live("vmousedown touchstart",function() {
        console.log(' Up Button has been unclicked');
        upButton();
        
    });

    $('body').keydown(function(e) {
        console.log(e);
        if (e.keyCode == 65 ) {
            leftButton();
        }
        if (e.keyCode == 87) {
            upButton();
        }
        if (e.keyCode == 68) {
            rightButton();
        }
        if (e.keyCode == 83 ) {
            downButton();
        }
        if (e.keyCode == 13) {
            fireButton();
        }

    });
    $('body').keyup(function(e) {
        console.log(e);
        if (e.keyCode == 65 ) {
            leftButtonStop();
        }
        if (e.keyCode == 87) {
            upButtonStop();
        }
        if (e.keyCode == 68) {
            rightButtonStop();
        }
        if (e.keyCode == 83 ) {
            downButtonStop();
        }
        if (e.keyCode == 13) {
            fireButtonStop();
        }
    });

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