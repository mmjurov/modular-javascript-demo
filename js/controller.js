loader.provide('application.controller');
loader.require('application.throbbler');

application.$startButton = $('#js-start-app');
application.$stopButton = $('#js-stop-app');

application.switchButtonsState = function() {
    if (application.throbblerShowed) {
        application.$startButton.attr('disabled', true);
        application.$stopButton.attr('disabled', false);
    } else {
        application.$startButton.attr('disabled', false);
        application.$stopButton.attr('disabled', true);
    }
};
application.switchButtonsState();
