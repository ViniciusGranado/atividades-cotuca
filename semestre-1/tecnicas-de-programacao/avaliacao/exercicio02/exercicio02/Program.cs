using System;

namespace exercicio02
{
  class Program
  {
    static void Main(string[] args)
    {
      int valor1;
      int valor2;

      Console.Write("Escreva o primeiro valor: ");
      valor1 = Convert.ToInt32(Console.ReadLine());

      Console.Write("Escreva o segundo valor: ");
      valor2 = Convert.ToInt32(Console.ReadLine());

      if (valor1 > valor2)
      {
        Console.WriteLine("\nO maior valor digitado foi " + valor1);
      }
      else if (valor1 < valor2)
      {
        Console.WriteLine("\nO maior valor digitado foi " + valor2);
      }
      else
      {
        Console.WriteLine("\nOs valores digitados são iguais.");
      }
    }
  }
}
