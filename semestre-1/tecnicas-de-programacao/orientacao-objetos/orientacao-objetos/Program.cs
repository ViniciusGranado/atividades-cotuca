using System;

namespace orientacao_objetos
{
  class Program
  {
    static void Main(string[] args)
    {
      Aluno meuAluno = new Aluno();

      meuAluno.ra = "21731";
      meuAluno.nome = "Vinicius";
      meuAluno.curso = "Desenvolvimento de Sistemas";

      Carro meuCarro = new Carro();

      meuCarro.marca = "Fiat";
      meuCarro.marca = "Uno";
      meuCarro.anoFabricacao = 2000;
      meuCarro.desligar();

      Console.WriteLine("Hello " + meuAluno.nome + "!\n");
      Console.WriteLine(meuAluno);

      Console.WriteLine("-----------------------------");

      Console.WriteLine(meuCarro);

    }
  }
}
