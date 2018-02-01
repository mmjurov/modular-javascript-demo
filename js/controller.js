// reqiore
application.controller = (function(throbbler) {
    var $start = $('#js-start-app');
    var $stop = $('#js-stop-app');

    var redraw = function() {
        if (throbbler.isShowed()) {
            $start.attr('disabled', true);
            $stop.attr('disabled', false);
        } else {
            $start.attr('disabled', false);
            $stop.attr('disabled', true);
        }
    };

    redraw();

    $start.on('click', function() {
        throbbler.show();
        redraw();
    });
    $stop.on('click', function() {
        throbbler.hide();
        redraw();
    });
})(application.throbbler);