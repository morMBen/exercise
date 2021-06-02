import 'package:flutter/material.dart';

import 'package:youtube_player_flutter/youtube_player_flutter.dart';

class MyYoutubePlayer extends StatefulWidget {
  @override
  _MyYoutubePlayerState createState() => _MyYoutubePlayerState();
}

class _MyYoutubePlayerState extends State<MyYoutubePlayer> {
  YoutubePlayerController _controller3 = YoutubePlayerController(
    initialVideoId: 'iKUzhzustok',
    flags: YoutubePlayerFlags(
      enableCaption: false,
      autoPlay: false,
      mute: false,
    ),
  );

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(25),
      child: YoutubePlayer(
        controller: _controller3,
        // showVideoProgressIndicator: true,
        // progressIndicatorColor: Colors.blueAccent,
      ),
    );
  }
}
