using System;
using System.Collections.Generic;
using System.Text;

namespace orientacao_objetos
{
  class Aluno
  {
    public string ra;
    public string nome;
    public string curso;

    public override String ToString()
    {
      return "RA: " + this.ra +
             "\nNome: " + this.nome +
             "\nCurso: " + this.curso;
    }
  }
}
