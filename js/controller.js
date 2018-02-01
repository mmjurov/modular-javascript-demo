import * as throbbler from './throbbler.js';

const $start = $('#js-start-app');
const $stop = $('#js-stop-app');

const redraw = function() {
    if (throbbler.isShowed()) {
        $start.attr('disabled', true);
        $stop.attr('disabled', false);
    } else {
        $start.attr('disabled', false);
        $stop.attr('disabled', true);
    }
};

redraw();

export const init = function () {
    $start.on('click', function() {
        throbbler.show();
        redraw();
    });
    $stop.on('click', function() {
        throbbler.hide();
        redraw();
    });
};