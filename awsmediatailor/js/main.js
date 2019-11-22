var playerContainer_;
var context_ = {
    flag: 'main'
};
var player_ = null;
var playerUI_ = null;


var AWS_MediaTailor_Stream = {
  links: [{
    // Please enter your own aws mediatailor link
    uri: '',
    type: 'awsmediatailor'
  }]
};

/////////////////////////////////////////////////////////////////////////////////////////////
// MediaTailor Events
function onMediaTailorAdInfo(e) {
    console.log('+onMediaTailorAdInfo', e);
}

function onMediaTailorAdBreakStart(e) {
    console.log('+onMediaTailorAdBreakStart', e);
}

function onMediaTailorAdBreadEnd(e) {
    console.log('+onMediaTailorAdBreakEnd', e);
}

function onMediaTailorAdStart(e) {
    console.log('+onMediaTailorAdStart', e);
}

function onMediaTailorAdEnd(e) {
    console.log('+onMediaTailorAdEnd', e);
}


function playMediaTailorLink() {
    playerContainer_ = document.getElementById('player-container');
    // build player
    player_ = new voPlayer.Player(playerContainer_);
    player_.init(common_config);
    player_.addPlugin(voPlayer.voMediaTailorPlugin);

    player_.addEventListener(voPlayer.events.VO_OSMP_AD_BREAK_STARTED, onMediaTailorAdBreakStart);
    player_.addEventListener(voPlayer.events.VO_OSMP_AD_BREAK_COMPLETE, onMediaTailorAdBreadEnd);
    player_.addEventListener(voPlayer.events.VO_OSMP_AD_STARTED, onMediaTailorAdStart);
    player_.addEventListener(voPlayer.events.VO_OSMP_AD_COMPLETE, onMediaTailorAdEnd);

    // attach ui engine
    playerUI_ = new voPlayer.UIEngine(player_);
    playerUI_.buildUI();

    player_.open(AWS_MediaTailor_Stream);
}

/////////////////////////////////////////////////////////////////////////////////////////////
window.onload = function() {
    var uri = prompt("Please enter your aws mediatailor link", AWS_MediaTailor_Stream.links[0].uri);
    if (uri) {
        AWS_MediaTailor_Stream.links[0].uri = uri;
        playMediaTailorLink();
    }
};