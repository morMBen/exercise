import 'package:flutter/material.dart';

class TopNav extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      toolbarHeight: 50,
      centerTitle: true,
      backgroundColor: Colors.transparent,
      bottom: TabBar(
        indicator: BoxDecoration(
          borderRadius: BorderRadius.circular(50), // Creates
          // labelColor: Colors.white,
          // indicatorColor: Colors.red,
          color: Colors.transparent,
        ),
        labelColor: Colors.red,
        unselectedLabelColor: Colors.white,
        tabs: [
          Tab(
            text: 'Series',
          ),
          Tab(
            text: 'Film',
          ),
          Tab(
            text: 'Mylist',
          ),
        ],
      ),
    );
  }
}
