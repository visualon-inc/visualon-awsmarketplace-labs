# VisualOn HTML5+ Player Project Setup and Demos


## Prerequisite
Please refer to Tools/setuphttpserver/Win32/README.txt or Tools/setuphttpserver/MacOS/README.md to check how to setup a HTTP
server and run the player demo. 

If your server tops on MacOS or Linux, you need change the permission of code files by command "sudo chmod +x files".

## Quick start for developers
Create a div element in your HTML first. Please make sure the controls attribute is present.
```html
<div id="container"></div>
```
Add player and ui sdk to the end of the body.
```html
<head>
  ...
  <!-- Player SDK -->
  <script src="yourPathOfLibs/voplayer.min.js"></script>
  <!-- UI SDK -->
  <link href="yourPathOfLibs/voplayer-ui.min.css" rel="stylesheet"/>
  <script src="yourPathOfLibs/voplayer-ui.min.js"></script>
</head>
```
Now comes to good stuff, we need to create a voplayer and UI to initialize your player..
```js
   var divVideoPlayer = document.getElementById("container");
   // build player
   var player = new voPlayer.Player(divVideoPlayer);
   player.init(config);
   // attach ui engine
   playerUI_ = new voPlayer.UIEngine(player_);
   playerUI_.buildUI();
   // load stream
   player.open(source);
   player.play();
```
When it is all done, it should look like the following code.
```html
<!DOCTYPE html>
<html>
  <body>
    <div>
      <div id="container"></div>
    </div>
    <script src="libs/voplayer.min.js"></script>
    <script>
      var container = document.getElementById("container");
      
      // build player
      var player = new voPlayer.Player(container);
      var config = {
          // Please ask AE for an valid client key.
          key: '',
          playback: {
            autoPlay: true
          }
      };
      player.init(config);
      
      // attach ui engine
      playerUI_ = new voPlayer.UIEngine(player_);
      playerUI_.buildUI();
      
      var source = {
        links: [{
            uri: "http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd",
            type: "dash"
        }]
      };
      player.open(source);
    </script>
  </body>
</html>
```
## Guide for configuring player and source
Users can initialize the player with a configuration and open the media source with sourceConfig. 

For the sample code, player configuration and sourceConfig are in "common/assets/assets.js".

"common_config" is player configuration, you must set a valid license key for it.

"DRM_stream_wv" "Webvtt_Thumbnail_stream" "Low_latency_stream" ... are sourceConfig



## Developer guide and demos

- **HLS-and-DASH**: Playback hls and dash streaming with VisualOn HTML5+ Player. 
- [HLS-and-DASH Developer Guide](/hls-and-dash)

- **Chromecast**: Cast video directly to your screen using Chromecast and the VisualOn HTML5+ Player. 
- [Chromecast Developer Guide](/chromecast)

- **DRM**: The VisualOn HTML5+ Player makes it easier to target the necessary DRM for a multi-DRM content object. 
- [DRM Developer Guide](/drm) 

-  **External Subtitle**： The VisualOn HTML5+ Player supports multiple types of external subtitles including SRT, TTML and WebVTT. 
- [External Subtitles Developer Guide](/external-subtitle)


- **Thumbnail**: Hover over the timeline to see the Thumbnail feature of the VisualOn HTML5+ Player in action in the following demo page. 
- [Thumbnail Developer guide](/webvtt-thumbnails)

- **Analytics Overlay** :VisualOn Analytics Overlay captures and demonstrates the real-time player KPIs with an onscreen overlay for the VisualOn HTML5+ player. 
- [Analytics Overlay Reference Code](/analytics-overlay)


- **AirPlay and Picture in Picture**: AirPlay allows wireless streaming and related metadata between devices of audio, video, and photos, as well as the sharing of screens. With a simple configuration of your app, you can deliver AirPlay functionality to your users. Picture-in-picture is the feature of the VisualOn HTML5+ Player to display one program/channel on the full TV screen while one or more other programs/channels are displayed in inset window(s).
- [AirPlay and Picture in Picture Reference Code ](/airplay-and-picture-in-picture)


- **AWS Marketplace**: Showing Video On Demand Ad Insertion with AWS Elemental MediaTailor.
- [AWS Marketplace Reference Code](/awsmediatailor)




## License
[MIT License](/LICENSE)
