import 'package:flutter/material.dart';

class Reviews extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: TextButton(
          child: Text('Return'),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}
