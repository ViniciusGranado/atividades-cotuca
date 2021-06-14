using System;

namespace exercicio01
{
  class Program
  {
    static void Main(string[] args)
    {
      int valorUsuario;

      do
      {
        Console.Write("Digite um numero inteiro: (digite 0 para sair) ");
        valorUsuario = Convert.ToInt32(Console.ReadLine());

        if (valorUsuario != 0)
        {
          if (valorUsuario % 2 == 0)
          {
            Console.WriteLine("O número " + valorUsuario + " é par.\n");
          }
          else
          {
            Console.WriteLine("O número " + valorUsuario + " é ímpar.\n");
          }
        }
      } while (valorUsuario != 0);

      Console.WriteLine("\nSaindo...");
    }
  }
}
