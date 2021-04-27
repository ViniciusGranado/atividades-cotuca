using System;
using System.Collections.Generic;
using System.Text;

namespace orientacao_objetos
{
  class Carro
  {
    public String marca;
    public String modelo;
    public int anoFabricacao;
    private bool _estaLigado;

    public void ligar ()
    {
      this._estaLigado = true;
    }

    public void desligar ()
    {
      this._estaLigado = false;
    }

    public override string ToString ()
    {
      return "\nMarca: " + this.marca +
             "\nModelo: " + this.modelo +
             "\nAno de Fabricação: " + this.anoFabricacao +
             "\nO carro está " + (this._estaLigado ? "ligado" : "desligado");

    }
  }
}
