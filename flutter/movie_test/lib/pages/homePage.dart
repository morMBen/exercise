import 'package:flutter/material.dart';

import '../widgets/bottomNav.dart';
import '../widgets/myYoutubePlayer.dart';
import '../widgets/category.dart';
import '../widgets/images.dart';
import '../widgets/rating.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        appBar: AppBar(
          toolbarHeight: 50,
          centerTitle: true,
          backgroundColor: Colors.black,
          bottom: TabBar(
            indicator: BoxDecoration(
              borderRadius: BorderRadius.circular(50), // Creates
              color: Colors.transparent,
            ),
            labelColor: Colors.red,
            unselectedLabelColor: Colors.white,
            tabs: <Widget>[
              Tab(
                text: 'Series',
              ),
              Tab(
                text: 'Film',
              ),
              Tab(
                text: 'Mylist',
              ),
              TextButton(
                onPressed: () {
                  Navigator.pushNamed(
                    context,
                    '/details',
                  );
                },
                child: const Text(
                  'Review',
                  style: TextStyle(
                    color: Colors.white,
                  ),
                ),
              ),
            ],
          ),
        ),
        body: Container(
          height: size.height,
          decoration: BoxDecoration(
            color: Colors.black,
          ),
          child: Column(
            children: <Widget>[
              MyYoutubePlayer(),
              Category(),
              Container(
                alignment: Alignment.centerLeft,
                margin: const EdgeInsets.all(15),
                child: const Text(
                  'Trending Now',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 22,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
              Images(),
              Rating(),
              Text(
                'Sherlok Holms',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 16,
                ),
              )
            ],
          ),
        ),
        bottomNavigationBar: BottomNav(),
      ),
    );
  }
}
