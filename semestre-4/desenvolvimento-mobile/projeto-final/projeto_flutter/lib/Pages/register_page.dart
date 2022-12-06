import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:intl/intl.dart';
import 'package:projeto_flutter/Pages/home_page.dart';
import 'package:projeto_flutter/Pages/list_page.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  String url = "";
  String date = "";

  final _formKey = GlobalKey<FormState>();
  final _formData = <String, Object>{};
  final formata = DateFormat('yy/MM/dd HH:mm:ss');

  // realiza chamada HTTP que inclui o usuário no banco de dados
  Future<void> _adicionaLista() {
    final String nome = _formData['nome'] as String;
    return http
        .post(
      Uri.parse('$url/insere.php'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(<String, String>{
        'nome': nome,
        'data': date
            .toString(),
      }),
    )
        .then((response) {
      return showDialog(
          context: context,
          builder: (context) => AlertDialog(
                title: const Text('Usuário cadastrado com sucesso'),
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
          title: const Text('Ocorreu um erro ao cadastrar usuário'),
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

  @override
  void initState() {
    super.initState();

    // instancia url
    setState(() {
      url = urlHelper.getUrl();
    });

    // instancia data atual para inserir no banco
    DateTime now = DateTime.now();
    setState(() {
      date = formata.format(now);
    });
  }

  // build do componente RegisterPage
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Registrar'),
      ),
      body: Padding(
        padding: const EdgeInsets.fromLTRB(100, 20, 100, 20),
        child: Column(
          children: [
            SizedBox(
              child: Form(
                key: _formKey,
                child: Column(
                  children: [
                    SizedBox(
                      width: 300,
                      height: 65,
                      child: TextFormField(
                        textInputAction: TextInputAction.send,
                        onChanged: (nome) => _formData['nome'] = nome,
                        decoration:
                            const InputDecoration(label: Text('Nome:')),
                      ),
                    ),
                    SizedBox(
                      width: 300,
                      child: ElevatedButton(
                        onPressed: _adicionaLista,
                        child: const Text('Entrar na fila'),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
