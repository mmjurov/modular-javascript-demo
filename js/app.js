var application = {};

loader.provide('application');
loader.require('application.controller');

application.start = function() {
    application.$startButton.on('click', function() {
        application.showThrobbler();
        application.switchButtonsState();
    });

    application.$stopButton.on('click', function () {
        application.hideThrobbler();
        application.switchButtonsState();
    });
};

application.start();