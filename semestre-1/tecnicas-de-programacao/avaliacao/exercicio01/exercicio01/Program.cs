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

      if (idade % 2 == 0)
      {
        Console.WriteLine(nome + ", Aceito para o exame.");
      }
      else
      {
        Console.WriteLine(nome + ", Espere a próxima oportunidade.");
      }
    }
  }
}
