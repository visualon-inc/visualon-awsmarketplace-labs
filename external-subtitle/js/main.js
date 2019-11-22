var playerContainer_;
var player_ = null;
var playerUI_ = null;

window.onload = function () {
  playerContainer_ = document.getElementById('player-container');
  // build player
  player_ = new voPlayer.Player(playerContainer_);
  player_.init(common_config);

  // attach ui engine
  playerUI_ = new voPlayer.UIEngine(player_);
  playerUI_.buildUI();

  player_.open(External_Subtitle_stream);
  player_.setExternalSubtitle(External_Subtitle_info);
};
