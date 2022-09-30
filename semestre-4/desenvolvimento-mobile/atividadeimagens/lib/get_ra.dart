import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

import 'dados.dart';

const String url = "https://www.slmm.com.br/CTC/ctcApi.php";

Future<List<Dados>> fetchData() async {
  var response = await http.get(
    Uri.parse(url),
    headers: {"Accept": "application/json"},
  );
  if (response.statusCode == 200) {
    List jsonResponse = json.decode(response.body);
    return jsonResponse.map((data) => Dados.fromJson(data)).toList();
  } else {
    throw Exception('Erro inesperado...');
  }
}

class GetRa extends StatefulWidget {
  const GetRa({Key? key}) : super(key: key);

  @override
  _GetRaState createState() => _GetRaState();
}

class _GetRaState extends State<GetRa> {
  late Future<List<Dados>> futureData;

  @override
  void initState() {
    super.initState();
    futureData = fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "ATIVIDADE IMAGENS",
          style: TextStyle(fontSize: 25),
        ),
        centerTitle: true,
        elevation: 0,
        backgroundColor: Colors.blueAccent,
      ),
      body: Container(
        color: Colors.blueAccent,
        padding: const EdgeInsets.all(10),
        child: FutureBuilder<List<Dados>>(
          future: futureData,
          builder: ((context, snapshot) {
            if (snapshot.hasData) {
              List<Dados> data = snapshot.data!;
              return ListView.builder(
                  itemCount: data.length,
                  itemBuilder: (BuildContext context, int index) {
                    return  Padding(
                      padding: const EdgeInsets.fromLTRB(20, 10, 20, 10),
                      child: Card(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(25)
                        ),
                        color: Colors.white,
                        child: Padding(
                          padding: const EdgeInsets.fromLTRB(0, 20, 0, 20),
                          child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Container(
                              color: Colors.white,
                              child: Column(
                                children: [
                                  Image.network('https://cdn.traction.one/pokedex/pokemon/${index + 1}.png', height: 200, width: 200),
                                  Text(
                                    'Ra: ${data[index].ra}',
                                    style: const TextStyle(fontSize: 25)
                                  ),
                                  Text(
                                    'Latitude: ${data[index].lat}',
                                    style: const TextStyle(fontSize: 25)
                                  ),
                                  Text(
                                    'Longitude: ${data[index].log}',
                                    style: const TextStyle(fontSize: 25)
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ), ),
                      ),
                    );
                  });
            } else if (snapshot.hasError) {
              return Text("${snapshot.error}");
            }
            return const CircularProgressIndicator();
          }),
        ),
      ),
    );
  }
}
