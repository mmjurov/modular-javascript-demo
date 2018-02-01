var throbblerShowed = false;
function showThrobbler() {
    var throbbler = initThrobbler();
    throbbler.show();
    throbblerShowed = true;
}

function hideThrobbler() {
    var throbbler = initThrobbler();
    throbbler.hide();
    throbblerShowed = false;
}

function initThrobbler() {
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
}

var $startButton = $('#js-start-app');
var $stopButton = $('#js-stop-app');

var switchButtonsState = function() {
    if (throbblerShowed) {
        $startButton.attr('disabled', true);
        $stopButton.attr('disabled', false);
    } else {
        $startButton.attr('disabled', false);
        $stopButton.attr('disabled', true);
    }
};
switchButtonsState();

$startButton.on('click', function() {
    showThrobbler();
    switchButtonsState();
});

$stopButton.on('click', function () {
    hideThrobbler();
    switchButtonsState();
});
