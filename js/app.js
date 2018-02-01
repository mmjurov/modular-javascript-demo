var application = {};

application.throbbler = (function() {

    var currentFile,
        throbbler = $('#js-throbbler'),
        showed = false;

    var show = function() {
        init().show();
        showed = true;
    };

    var hide = function() {
        init().hide();
        showed = false;
    };

    var getRandomDigit = function() {
        return ~~(Math.random() * 10);
    };

    var getFilePath = function(digit) {
        if (!parseInt(digit)) {
            digit = getRandomDigit();
        }

        return './img/loaders/' + digit + '.svg';
    };

    var regenerateFile = function() {
        currentFile = getFilePath();
        return currentFile;
    };
    regenerateFile();

    var getCssBackground = function() {
        return 'url(' + currentFile + ') no-repeat center center';
    };

    var getCurrentFile = function() {
        return currentFile;
    };

    var isShowed = function() {
        return showed === true;
    };

    var init = function() {

        if (throbbler.length === 0) {
            throbbler = $('<div id="js-throbbler" class="throbbler"></div>')
                .css('background', getCssBackground());
            $('.throbbler-container').append(throbbler);
        } else {
            regenerateFile();
            throbbler.css('background', getCssBackground());
        }

        return throbbler;
    };

    return {
        show: show,
        hide: hide,
        getCurrentFile: getCurrentFile,
        isShowed: isShowed
    }
})();

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

    return {
        init: init
    }
})(application.throbbler);

application.controller.init();