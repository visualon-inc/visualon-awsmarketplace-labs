var playerContainer_;
var player_ = null;
var playerUI_ = null;

function onBtnOpen() {
  var v = document.getElementById('idUrl');
  var la = document.getElementById('laUrl');
  var cert = document.getElementById('cert');
  var link = {};
  link.uri = v.value;
  link.drm = {};
  link.drm.fairplay = {};
  link.drm.fairplay.laUrl = la.value;
  link.drm.fairplay.certificateUrl = cert.value;
  var DRM_stream_fp = {};
  DRM_stream_fp.links = [];
  DRM_stream_fp.links.push(link);

  player_.open(DRM_stream_fp);
};

window.onload = function() {
  var targetSource;
  // set drm states
  checkMSE();
  var browser = BrowserDetect.OS + BrowserDetect.browser

  // Internet Explorer 6-11
  var isIE = (BrowserDetect.browser === 'MSIE');

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  document.getElementById("widevine").checked = false;
  document.getElementById("playready").checked = false;
  document.getElementById("fairplay").checked = false;
  if (isEdge || isIE) {
    targetSource = DRM_stream_pr;
    document.getElementById("playready").checked = true;
  } else if (SupportMatrix.Widevine.indexOf(browser) > -1) {
    targetSource = DRM_stream_wv;
    document.getElementById("widevine").checked = true;
  } else if (SupportMatrix.FairPlay.indexOf(browser) > -1) {
    document.getElementById("fairplay").checked = true;
    document.getElementById("idBtnController").style.display = 'block';
  } else {
    targetSource = HLS_Clear_stream;
  }

  // build player
  playerContainer_ = document.getElementById('player-container');

  player_ = new voPlayer.Player(playerContainer_);
  player_.init(common_config);

  // attach ui engine
  playerUI_ = new voPlayer.UIEngine(player_);
  playerUI_.buildUI();

  if (targetSource) {
    player_.open(targetSource);
  }
};
