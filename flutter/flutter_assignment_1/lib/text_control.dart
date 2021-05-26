import 'package:flutter/material.dart';
import './text_output.dart';

class TextControl extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _TextControlState();
  }
}

class _TextControlState extends State<TextControl> {
  String _mainText = 'my main text';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        RaisedButton(
            child: Text('change text'),
            onPressed: () {
              setState(() {
                _mainText = 'this has change';
              });
            }),
        TextOutput(_mainText),
      ],
    );
  }
}
