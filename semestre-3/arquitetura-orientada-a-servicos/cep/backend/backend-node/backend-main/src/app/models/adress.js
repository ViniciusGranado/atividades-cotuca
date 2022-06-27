module.exports = class Adress {
  logradouro;
  bairro;
  cidade;
  estado;

  constructor(logradouro, bairro, cidade, estado) {
      this.logradouro = logradouro;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
  }

  get logradouro() {
      return this.logradouro;
  }

  set logradouro(logradouro) {
    if (logradouro === undefined || typeof logradouro !== 'string') {
      throw new Error('Logradouro inválido');

    }

    this.logradouro = logradouro;
  }

  get bairro() {
    return this.bairro;
  }

  set bairro(bairro) {
    if (bairro === undefined || typeof bairro !== 'string') {
      throw new Error('Bairro inválido');
    }

    this.bairro = bairro;
  }

  get cidade() {
    return this.cidade;
  }

  set cidade(cidade) {
    if (cidade === undefined || typeof cidade !== 'string') {
      throw new Error('Cidade inválida');
    }

    this.cidade = cidade;
  }

  get estado() {
    return this.estado;
  }

  set estado(estado) {
    if (estado === undefined || typeof estado !== 'string') {
      throw new Error('Estado inválido');
    }

    this.estado = estado;
  }
}