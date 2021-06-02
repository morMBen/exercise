import 'package:flutter/material.dart';

class Rating extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          buildRatingItem('- 14'),
          buildRatingItem('Action'),
          buildRatingItem('4.0'),
        ],
      ),
    );
  }
}

Container buildRatingItem(text) {
  return Container(
    margin: const EdgeInsets.all(5),
    padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 2),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.all(Radius.circular(2)),
      color: Colors.red[900],
    ),
    child: Text(text,
        style: TextStyle(
          color: Colors.white,
          fontSize: 15,
        )),
  );
}
