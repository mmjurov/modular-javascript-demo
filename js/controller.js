var throbbler = require('./throbbler.js');

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

var init = function () {
    $start.on('click', function() {
        throbbler.show();
        redraw();
    });
    $stop.on('click', function() {
        throbbler.hide();
        redraw();
    });
};

module.exports = {
    init: init
};