import 'package:flutter/material.dart';
import 'package:flutter_barcode_scanner/flutter_barcode_scanner.dart';
import 'package:projeto_flutter/Pages/list_page.dart';
import '../controller/url_helper.dart';

// Instancia UrlHelper para ser utilizando na home page
UrlHelper urlHelper = UrlHelper();

// Intancia HomePage
class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePage();
}

class _HomePage extends State<HomePage> {
  final _formKey = GlobalKey<FormState>(); //key do Formulario
  final _formData = <String, Object>{}; //Obj que guardo os valores do input

  // Função que redireciona o usuário para página de lista
  redirectToList() {
    Navigator.push(
        context, MaterialPageRoute(builder: (context) => const ListPage()));
  }

  // Função que lê o QRCode e salva utilizando o urlHelper
  readQRCode() async {
    String url = await FlutterBarcodeScanner.scanBarcode(
        "#000000", "Cancelar", false, ScanMode.QR);
    setState(() {
      urlHelper.setUrl(url);
    });
    redirectToList();
  }

  // Salva a URL que foi inserida pelo usuário pelo input
  readUrlInput() {
    String url = _formData['url'] as String;
    setState(() {
      urlHelper.setUrl(url);
    });
    redirectToList();
  }

  // Build do componente HomePage
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Leitor QRCode')),
      body: Padding(
        padding: const EdgeInsets.fromLTRB(50, 50, 50, 50),
        child: Column(
          children: [
            const SizedBox(
                height: 50,
                child: Text(
                    'Leia a URL de um QRCode ou digite o endereço manualmente:')),
            SizedBox(
              width: 250,
              child: ElevatedButton(
                onPressed: readQRCode,
                child: const Text('LER QRCODE'),
              ),
            ),
            Form(
              key: _formKey,
              child: Column(
                children: [
                  SizedBox(
                    width: 250,
                    height: 65,
                    child: TextFormField(
                      textInputAction: TextInputAction.send,
                      onChanged: (url) => _formData['url'] = url,
                      decoration: const InputDecoration(label: Text('URL:')),
                    ),
                  ),
                  SizedBox(
                    width: 250,
                    child: ElevatedButton(
                      onPressed: readUrlInput,
                      child: const Text('Salvar'),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
