using System;

namespace exercise04
{
  class Program
  {
    static void Main(string[] args)
    {
      float salario;

      Console.Write("Digite o seu salário: R$");
      salario = float.Parse(Console.ReadLine());

      Console.Write("\nAlíquota: ");
      if (salario <= 22847.76)
      {
        Console.WriteLine("ISENTO");
      }
      else if (salario <= 33919.80)
      {
        Console.WriteLine("7,5%");
      }
      else if (salario <= 45012.60)
      {
        Console.WriteLine("15%");
      }
      else if (salario <= 55976.16)
      {
        Console.WriteLine("22,5%");
      }
      else
      {
        Console.WriteLine("27,5%");
      }
    }
  }
}
