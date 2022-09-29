export interface aluno {
  [id: string]: string, 
  ra: string, 
  nome: string, 
  codCurso: string;
}

export interface curso {
  [id: string]: string,
  codCurso: string,
  nomeCurso: string,
  periodo: string,
}