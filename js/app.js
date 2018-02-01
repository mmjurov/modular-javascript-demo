function showThrobbler() {
    var throbbler = initThrobbler();
    throbbler.show();
}

function hideThrobbler() {
    var throbbler = initThrobbler();
    throbbler.hide();
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


$('#js-start-app').on('click', showThrobbler);
$('#js-stop-app').on('click', hideThrobbler);
