import 'package:flutter/material.dart';

import './pages/homePage.dart';
import './pages/reviews.dart';

void main() {
  return runApp(Nav2App());
}

class Nav2App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,

      routes: {
        '/': (context) => HomePage(),
        Reviews.routeName: (context) => Reviews(),
      },
      // onUnknownRoute: (){

      // },
    );
  }
}
