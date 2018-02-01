define(function() {

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
});