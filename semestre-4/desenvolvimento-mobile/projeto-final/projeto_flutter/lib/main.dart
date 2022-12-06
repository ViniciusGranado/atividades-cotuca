import 'package:flutter/material.dart';

import 'Pages/home_page.dart';

void main() {
  runApp(
    MaterialApp(
      home: const HomePage(),
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
    )
  );
}
