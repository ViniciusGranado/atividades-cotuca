using System;
using System.Collections.Generic;
using System.Text;

namespace Adivinhacao
{
  class Jogo
  {
    private int _numero;
    private int _numeroUsuarioDigitou;
    private String _dica;
    private int _contagemJogadas;

    public Jogo ()
    {
      this._contagemJogadas = 0;
    }
    public void setNumero (int numero)
    {
      this._numero = numero;
    }

    public int getNumero()
    {
      return this._numero;
    }

    public int getNumeroUsuarioDigitou ()
    {
      return this._numeroUsuarioDigitou;
    }

    public int getContagemJogadas ()
    {
      return this._contagemJogadas;
    }

    public String getDica ()
    {
      return this._dica;
    }


    public void atualizarContagemJogadas ()
    {
      this._contagemJogadas++;
    }

    public void cadastrarJogada ()
    {
      while (true)
      {
        Console.Write("Digite um número de 0 a 10: ");
        String jogada = Console.ReadLine();

        int jogadaConvertida;
        if (
          int.TryParse(jogada, out jogadaConvertida) &&
          (jogadaConvertida >= 0 && jogadaConvertida <= 10)
        )
        {
          this._numeroUsuarioDigitou = jogadaConvertida;
          return;
        }

        Console.WriteLine("\nJogada inválida, tente novamente.\n");
      }
    }

    public bool verificarJogada ()
    {
      int diferenca = this._numero - this._numeroUsuarioDigitou;

      this._dica = (diferenca >= -2 && diferenca <= 2 ?
                    "Está quente!" :
                    "Está frio"
                    );

      return this._numero == this._numeroUsuarioDigitou;
    }
  }
}
