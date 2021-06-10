using System;

namespace exercicio03
{
  class Program
  {
    static void Main(string[] args)
    {
      int numero;

      Console.Write("Digite um valor inteiro: ");
      numero = Convert.ToInt32(Console.ReadLine());

      if (numero > 0)
      {
        Console.WriteLine("\nO número " + numero + " é positivo.");
      } else if (numero < 0)
      {
        Console.WriteLine("\nO número " + numero + " é negativo.");
      }
      else
      {
        Console.WriteLine("\nO número " + numero + " é neutro.");
      }
    }
  }
}
