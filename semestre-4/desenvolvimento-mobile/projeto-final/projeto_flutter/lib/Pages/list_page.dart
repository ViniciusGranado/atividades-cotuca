import 'package:flutter/material.dart';
import 'package:projeto_flutter/Pages/register_page.dart';
import '../models/user_details.dart';
import '../models/list_map.dart';
import 'home_page.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

String url = "";

// Realiza requisição GET para pegar lista
Future<List<ListMap>> getList() async {
  final response = await http.get(Uri.parse('$url/getLista.php'),
      headers: {"Accept": "application/json"});
  if (response.statusCode == 200) {
    List list = json.decode(response.body);
    return list.map((data) => ListMap.fromJson(data)).toList();
  } else {
    throw Exception('Erro na requisição HTTP');
  }
}

// formata datas para o formato BR
formatDate(String date) {
  date = date.split(' ')[0];
  List<String> dateArr = date.split('-');

  return '${dateArr[2]}/${dateArr[1]}/${dateArr[0]}';
}

// retorna o tempo que usuário está na fila
String timeOnList(String data) {
  DateTime now = DateTime.now();
  DateTime onLine = DateTime.parse(data);

  int year = now.year - onLine.year;
  int month = now.month - onLine.month;
  int day = now.day - onLine.day;
  int hour = now.hour - onLine.hour;
  int minute = now.minute - onLine.minute;
  int second = now.second - onLine.second;

  return ('\n$year anos\n$month meses\n$day dias\n$hour horas, \n$minute minutos, \n$second segundos')
      .replaceAll('-', '');
}

// mostra detalhes do usuário
showUserDetails(BuildContext context, int id) async {
  http.get(Uri.parse('$url/getDetalhe.php?id=$id'),
      headers: {"Accept": "application/json"}).then(
    (data) {
      List<dynamic> jsonData = json.decode(data.body);
      List<UserDetails> dados =
          jsonData.map((data) => UserDetails.fromJson(data)).toList();
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text('Id: ${dados.map((e) => e.id.toString()).first}'),
          content: SizedBox(
            width: 100,
            height: 200,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Nome: ${dados.map((e) => e.nome).first}'),
                Text('Data: ${formatDate(dados.map((e) => e.data).first)}'),
                Text(
                    'Tempo na fila: ${timeOnList(dados.map((e) => e.data).first)}'),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Ok'),
            ),
          ],
        ),
      );
    },
  );
}

// realiza chamada HTTP que deleta o usuário
Future<void> deleteUser(BuildContext context, int id) {
  return http.delete(Uri.parse('$url/delete.php?id=$id'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8'
      }).then((response) {
    return showDialog(
        context: context,
        builder: (context) => AlertDialog(
              title: const Text('Usuário deletado com sucesso'),
              actions: [
                TextButton(
                    onPressed: (() => Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => const ListPage(),
                          ),
                        )),
                    child: const Text('Ok'))
              ],
            ));
  }).catchError((error) {
    return showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Não foi possível deletar o usuário'),
        content: Text(error.toString()),
        actions: [
          TextButton(
              onPressed: (() => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const ListPage(),
                    ),
                  )),
              child: const Text('Ok'))
        ],
      ),
    );
  });
}

class ListPage extends StatefulWidget {
  const ListPage({super.key});

  @override
  State<ListPage> createState() => _ListPageState();
}

class _ListPageState extends State<ListPage> {
  late Future<List<ListMap>> list;

  @override
  void initState() {
    super.initState();

    // utiliza urlHelper para obter url guardada
    setState(() {
      url = urlHelper.getUrl();
    });

    // realiza chamada para obter lista
    setState(() {
      list = getList();
    });
  }

  // build do componente
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Lista')), // título página
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(0, 20, 0, 20),
            child: SizedBox(
                height: 50,
                child: ElevatedButton(
                  child: const Text('Cadastrar novo usuário'),
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => const Register()));
                  },
                )),
          ),
          SizedBox(
            width: 500,
            height: 676,
            child: FutureBuilder<List<ListMap>>(
              future: list,
              builder: ((context, snapshot) {
                if (snapshot.hasData) {
                  List<ListMap> data = snapshot.data!;
                  return ListView.builder(
                      itemCount: data.length,
                      itemBuilder: (BuildContext context, int index) {
                        return Card(
                            child: Row(
                          children: [
                            GestureDetector(
                                // quando clicado chamo a funcao de detalhes.
                                onTap: () {
                                  showUserDetails(context, data[index].id);
                                },
                                child: SizedBox(
                                  width: 300,
                                  child: ListTile(
                                    title: Text("Nome: ${data[index].name}"),
                                    subtitle: Text(
                                        "ID: ${data[index].id.toString()}"),
                                  ),
                                )),
                            Expanded(
                              child: ElevatedButton(
                                  child: const Icon(Icons.delete),
                                  onPressed: () {
                                    deleteUser(context, data[index].id);
                                  }),
                            ),
                          ],
                        ));
                      });
                } else if (snapshot.hasError) {
                  return Text("${snapshot.error}");
                }
                return const CircularProgressIndicator();
              }),
            ),
          ),
        ],
      ),
    );
  }
}
