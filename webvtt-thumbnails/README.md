# Thumbnail
You can set the WebVTT thumbnail via the tracks in sourceConfig object

# Example:
      tracks: [{
          uri: 'https://path/to/thumbnail/vtt/url.vtt',
          type: 'thumbnails'
      }]
You can use findNearestThumbnail(position, callback) to get a thumbniailInfo object of a specific media position, and handle thumbniailInfo by callback function.

