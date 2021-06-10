using System;

namespace exercicio01
{
  class Program
  {
    static void Main(string[] args)
    {
      String nome;
      int idade;

      Console.Write("Digite o seu nome: ");
      nome = Console.ReadLine();

      Console.Write("Digite a sua idade: ");
      idade = Convert.ToInt32(Console.ReadLine());

      Console.Write("\n" + nome);
      if (idade % 2 == 0)
      {
        Console.WriteLine(" Aceito para o exame.");
      }
      else
      {
        Console.WriteLine(" Espere a próxima oportunidade.");
      }
    }
  }
}
