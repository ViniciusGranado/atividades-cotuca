using System;

namespace exercicio02
{
  class Program
  {
    static void Main(string[] args)
    {
      String nomeUsuario;
      double salario;
      double desconto;
      double valorDesconto;
      double salarioComDesconto;

      do
      {
        Console.Write("Digite o seu nome: (deixe em branco para sair) ");
        nomeUsuario = Console.ReadLine();

        if (nomeUsuario != "")
        {
          Console.Write("Digite o seu salário: R$");
          salario = double.Parse(Console.ReadLine());

          if (salario <= 500)
          {
            desconto = 0;
          } 
          else if (salario <= 1000)
          {
            desconto = 5;
          }
          else
          {
            desconto = 10;
          };

          valorDesconto = salario * desconto / 100;
          salarioComDesconto = salario - valorDesconto;


          Console.WriteLine("\nFuncionário: " + nomeUsuario);
          Console.WriteLine(
            desconto == 0 ?
              "Funcionário isento de descontos." :
              "Total de descontos R$" + valorDesconto
          );
          Console.WriteLine("Salário final: R$" + salarioComDesconto + "\n");
        }
      } while (nomeUsuario != "");

      Console.WriteLine("\nSaindo...");
    }
  }
}
