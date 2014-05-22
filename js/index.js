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
        leftButton();
        
    });

    $("#leftButton").live("vmouseup",function() {
        console.log(' Left Button has been unclicked');
        leftButtonStop();
        
    });
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

    $("#rightButton").live("vmousedown",function() {
        console.log(' Right Button has been unclicked');

        rightButton();
    });

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

    $("#rightButton").live("vmouseup",function() {
        console.log(' Right Button has been unclicked');
        rightButtonStop();
    });

    $("#upButton").live("vmousedown",function() {
        console.log(' Up Button has been unclicked');
        upButton();
        
    });
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

    $("#upButton").live("vmouseup",function() {
        console.log(' Up Button has been unclicked');
        upButtonStop();

    });

    $("#downButton").live("vmousedown",function() {
        console.log(' Down Button has been unclicked');

        downButton();
    });

    $("#downButton").live("vmouseup",function() {
        console.log(' Down Button has been unclicked');
        downButtonStop();
        
    })
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

    $("#fireButton").live("vmousedown",function() {
        console.log(' Fire Button has been unclicked');
        fireButton();
        
    });
    fireButton = function() {
        $.ajax({
            'url' : '/fireOn',
            'type' : 'PUT'
        });
    };

    $("#fireButton").live("vmouseup",function() {
        console.log(' Fire Button has been unclicked');
        fireButtonStop();

    })
    fireButtonStop = function() {
        $.ajax({
            'url' : '/fireOff',
            'type' : 'PUT'
        });
    };

    $('body').keydown(function(e) {
        console.log(e);
        if (e.keyCode == 97 || e.charCode == 97) {
            leftButton();
        }
        if (e.keyCode == 119 || e.charCode == 119) {
            upButton();
        }
        if (e.keyCode == 100 || e.charCode == 100) {
            rightButton();
        }
        if (e.keyCode == 13 || e.charCode == 0) {
            fireButton();
        }
    });
    $('body').keyup(function(e) {
        console.log(e);
        if (e.keyCode == 97 || e.charCode == 97) {
            leftButtonStop();
        }
        if (e.keyCode == 119 || e.charCode == 119) {
            upButtonStop();
        }
        if (e.keyCode == 100 || e.charCode == 100) {
            rightButtonStop();
        }
        if (e.keyCode == 115 || e.charCode == 115) {
            downButtonStop();
        }
        if (e.keyCode == 13 || e.charCode == 0) {
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