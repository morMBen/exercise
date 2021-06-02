import 'package:flutter/material.dart';

class Images extends StatelessWidget {
  final img = [
    'https://flxt.tmsimg.com/assets/p22639_p_v10_ab.jpg',
    'https://upload.wikimedia.org/wikipedia/en/a/a3/Rambo3poster.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNt-wCAkB2Xq5aDf-AijGvSLxWFtUi7eMUT-l2dqQfpW4JBPbWEHGHWtwqljpvnetxxQ&usqp=CAU',
    'https://www.uphe.com/sites/default/files/styles/scale__344w_/public/FastAndTheFurious_PosterArt.jpg',
  ];
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 240,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          ...img.map((e) {
            return Container(
              padding: EdgeInsets.all(10),
              child: ClipRRect(
                borderRadius: const BorderRadius.all(Radius.circular(10)),
                child: Image(
                  fit: BoxFit.cover,
                  image: NetworkImage(e),
                ),
              ),
            );
          }),
        ],
      ),
    );
  }
}
