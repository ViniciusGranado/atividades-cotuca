class ListMap{
  int id;
  String name;

  ListMap(
    this.id,
    this.name,
  );

  Map toJson() => {'id': id, 'nome': name};

  factory ListMap.fromJson(dynamic json) {

    if (json['id'] == null) json['id'] = '';
    if (json['nome'] == null) json['nome'] = '';

    return ListMap(json['id'], json['nome']);
  }

  @override
  String toString() {
    return '{$id,$name}';
  }
}