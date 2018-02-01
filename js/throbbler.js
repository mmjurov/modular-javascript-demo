loader.provide('application.throbbler');

application.throbblerShowed = false;
application.showThrobbler = function() {
    var throbbler = application.initThrobbler();
    throbbler.show();
    application.throbblerShowed = true;
};

application.hideThrobbler = function() {
    var throbbler = application.initThrobbler();
    throbbler.hide();
    application.throbblerShowed = false;
};

application.initThrobbler = function() {
    var throbbler = $('#js-throbbler');
    if (throbbler.length === 0) {
        throbbler = $('<div id="js-throbbler" class="throbbler"></div>');
        $('.throbbler-container').append(throbbler);
    }

    throbbler.css('background', function() {
        var num = ~~(Math.random() * 10);
        var picture = './img/loaders/' + num + '.svg';
        return 'url(' + picture + ') no-repeat center center';
    });

    return throbbler;
};