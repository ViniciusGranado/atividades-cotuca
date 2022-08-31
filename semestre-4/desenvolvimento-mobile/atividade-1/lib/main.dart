import 'package:flutter/material.dart';
import 'teste.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: true,
    home: Home(),
  ));
}

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  int _selectedIndex = 0;

  static const TextStyle _styleOption = TextStyle(fontSize: 30);

  static const TextStyle _styleTitle =
      TextStyle(fontSize: 40, fontWeight: FontWeight.bold);

  static List<Widget> _wgOptions = <Widget>[
    Text(
      'Vinicius Granado',
      style: _styleOption,
    ),
    Center(child: Image.asset('lib/assets/images/vinicius.jpeg')),
    Padding(
        padding: const EdgeInsets.only(top: 42),
        child: Column(
          children: [
            Text("Sobre", style: _styleTitle),
            Padding(
              padding: const EdgeInsets.only(top: 42),
              child: Column(children: [
                Text("Idade: 27", style: _styleOption),
                Text("Aniversário: 12/12", style: _styleOption),
                Text("Profissão: Músico", style: _styleOption),
              ]),
            )
          ],
        )),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("DS 403")),
      body: Center(
        child: _wgOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          Listas.items.elementAt(0),
          Listas.items.elementAt(1),
          Listas.items.elementAt(2),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.amber[900],
        onTap: _onItemTapped,
      ),
    );
  }
}
