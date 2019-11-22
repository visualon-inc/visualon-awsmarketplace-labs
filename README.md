# VisualOn HTML5+ Player Project Setup and Demos


## Prerequisite
Please refer to Tools/setuphttpserver/Win32/README.txt or Tools/setuphttpserver/MacOS/README.md to check how to setup an HTTP
server and run the player demo.


## Quick start for developers
Create a div element in your HTML first. Please make sure the controls attribute is present.
```html
<div id="container"></div>
```
Add voplayer.min.js to the end of the body.
```html
<body>
  ...
  <script src="yourPathOfLibs/voplayer.min.js"></script>
</body>
```
Now comes to good stuff, we need to create a MediaPlayer & initialize it.
```js
   var divVideoPlayer = document.getElementById("container");
   var player = new voPlayer.Player(divVideoPlayer);
   player.init(config);
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
      var player = new voPlayer.Player(container);
      var config = {
          // Please ask AE for an valid client key.
          key: '',
          playback: {
            autoPlay: true
          }
      };
      player.init(config);
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

For the sample code, users can modify "voDefaultConfig" and "voDefaultStream" in "SamplePlayer/sampleplayer/app/assets.js"
to set their own configuration and default stream. Also, users can add streams to "voAvailableStreams" in
"SamplePlayer/sampleplayer/app/assets.js".

If the media source does not have a complex configuration, users can input the URL and related DRM information 
by selecting "Enter Asset" from the drop-down menu of "stream" in the Demo.



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
