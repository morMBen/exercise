import 'package:flutter/material.dart';

class BottomNav extends StatefulWidget {
  @override
  _BottomNavState createState() => _BottomNavState();
}

class _BottomNavState extends State<BottomNav> {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.red,
      height: 70,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          buildNavBarItem(Icons.home, true),
          buildNavBarItem(Icons.search, false),
          buildNavBarItem(Icons.download, false),
          buildNavBarItem(Icons.person, false),
        ],
      ),
    );
  }

  Container buildNavBarItem(icon, isActive) {
    return Container(
        padding: const EdgeInsets.all(5),
        decoration: BoxDecoration(
            color: isActive ? Colors.white : Colors.red,
            borderRadius: BorderRadius.all(Radius.circular(30))),
        child: Icon(
          icon,
          color: isActive ? Colors.red : Colors.white,
        ));
  }
}
