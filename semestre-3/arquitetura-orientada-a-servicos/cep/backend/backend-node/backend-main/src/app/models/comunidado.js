class Comunicado {
  codigo;
  mensagem;
  descricao;

  constructor(codigo, mensagem, descricao) {
    this.codigo = codigo;
    this.mensagem = mensagem;
    this.descricao = descricao;
  }

  getCodigo() {
    return this.codigo;
  }

  getMensagem() {
    return this.mensagem;
  }

  getDescricao() {
    return this.descricao;
  }

  setCodigo(codigo) {
    if (codigo === undefined || typeof codigo !== 'string') {
      throw new Error('Código inválido');
    }

    this.codigo = codigo;
  }

  setMensagem(mensagem) {
    if (mensagem === undefined || typeof mensagem !== 'string' || mensagem === '') {
      throw new Error('Mensagem inválida');
    }

    this.mensagem = mensagem;
  }

  setDescricao(descricao) {
    if (descricao === undefined || typeof descricao !== 'string' || descricao === '') {
      throw new Error('Descrição inválida');
    }

    this.descricao = descricao;
  }

  getObject() {
    return { codigo: this.codigo, mensagem: this.mensagem, descricao: this.descricao };
  }
}

module.exports = Comunicado;