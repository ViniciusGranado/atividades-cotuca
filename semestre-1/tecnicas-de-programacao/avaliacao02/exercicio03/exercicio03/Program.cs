using System;

namespace exercicio03
{
  class Program
  {
    static void Main(string[] args)
    {
      int valorUsuario;

      Console.Write("Digite um valor inteiro: ");
      valorUsuario = int.Parse(Console.ReadLine());

      Console.WriteLine(); // Pula linha

      for (int i = 1; i < valorAbsoluto(valorUsuario); i++)
      {
        Console.WriteLine(i);
      };

      int valorAbsoluto (int valor)
      {
        if (valor >= 0)
        {
          return valor;
        }

        return valor - valor - valor;
      }
    }
  }
}

