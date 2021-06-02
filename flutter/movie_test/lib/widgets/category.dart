import 'package:flutter/material.dart';

class Category extends StatefulWidget {
  @override
  _CategoryState createState() => _CategoryState();
}

class _CategoryState extends State<Category> {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
        padding: const EdgeInsets.all(10),
        scrollDirection: Axis.horizontal,
        child: Row(
          children: <Widget>[
            buildCategoryItem('All', true),
            buildCategoryItem('Action', false),
            buildCategoryItem('Comedy', false),
            buildCategoryItem('Romance', false),
            buildCategoryItem('Docomentry', false),
            buildCategoryItem('Horor', false),
          ],
        ));
  }

  Container buildCategoryItem(text, isActive) {
    return Container(
        margin: const EdgeInsets.all(5),
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(
            color: isActive ? Colors.red : Colors.grey[900],
            borderRadius: BorderRadius.all(Radius.circular(5))),
        child: Text(
          text,
          style: TextStyle(
            color: Colors.white,
            fontSize: 16,
          ),
        ));
  }
}
