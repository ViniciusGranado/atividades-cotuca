using System;

namespace Adivinhacao
{
  class Program
  {
    static void Main(string[] args)
    {
      Random random = new Random();
      Jogo jogoAtual = new Jogo();
      jogoAtual.setNumero(random.Next(11));
      bool jogadorAcertou;

      Console.WriteLine("------------------------------");
      Console.WriteLine("      JOGO DA ADIVINHAÇÃO     ");
      Console.WriteLine("------------------------------");
     
      while (true)
      {
        jogoAtual.cadastrarJogada();

        jogadorAcertou = jogoAtual.verificarJogada();

        jogoAtual.atualizarContagemJogadas();

        if (jogoAtual.getContagemJogadas() >= 3 || jogadorAcertou)
        {
          break;
        }

        Console.WriteLine("\n" + jogoAtual.getDica() + ", tente novamente!\n");
      };

      Console.WriteLine("\n-------------------------------------");
      Console.WriteLine(
        jogadorAcertou ?
         "  Parabéns! Você adivinhou o número." :
         "    Que pena, não foi dessa vez!"
      );
      Console.WriteLine("-------------------------------------");

    }
  }
}
