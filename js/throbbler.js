let currentFile,
    showed = false,
    throbbler = $('#js-throbbler');

export const show = function() {
    init().show();
    showed = true;
};

export const hide = function() {
    init().hide();
    showed = false;
};

const getRandomDigit = function() {
    return ~~(Math.random() * 10);
};

const getFilePath = function(digit) {
    if (!parseInt(digit)) {
        digit = getRandomDigit();
    }

    return './img/loaders/' + digit + '.svg';
};

const regenerateFile = function() {
    currentFile = getFilePath();
    return currentFile;
};
regenerateFile();

const getCssBackground = function() {
    return 'url(' + currentFile + ') no-repeat center center';
};

export const getCurrentFile = function() {
    return currentFile;
};

export const isShowed = function() {
    return showed === true;
};

const init = function() {

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