/* Classe que Mapeia o Json de Detalhes */

class UserDetails {
  int id;
  String nome;
  String data;

  UserDetails(
    this.id,
    this.nome,
    this.data,
  );

  Map toJson() => {'id': id, 'nome': nome, 'data': data};

  factory UserDetails.fromJson(dynamic json) {
    if (json['id'] == null) json['id'] = '';
    if (json['nome'] == null) json['nome'] = '';
    if (json['data'] == null) json['data'] = '';

    return UserDetails(json['id'], json['nome'], json['data']);
  }

  @override
  String toString() {
    return '{$id,$nome,$data}';
  }
}
