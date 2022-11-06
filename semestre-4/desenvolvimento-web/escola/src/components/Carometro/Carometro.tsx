import axios from "axios";
import { useEffect, useState } from "react";
import { aluno, curso } from "../../models/models";
import { Main } from "../template/Main/Main";
import { UserCard } from "../UserCard/UserCard";

import './Carometro.css';

const urlAPIAlunos = "https://localhost:7221/api/aluno";
const urlAPICursos = "https://localhost:7221/api/curso";

export const Carometro = () => {
  const [alunos, setAlunos] = useState<aluno[]>([]);
  const [cursos, setCursos] = useState<curso[]>([]);
  const [cursoSelecionado, setCursoSelecionado] = useState<curso | undefined>(undefined);

  useEffect(() => {
    axios(urlAPIAlunos).then(resp => {
      setAlunos(
        resp.data.map((aluno: aluno) => ({
          id: aluno.id,
          ra: aluno.ra,
          nome: aluno.nome,
          codCurso: aluno.codCurso,
        }))
      );
    })
  }, [])

  useEffect(() => {
    axios(urlAPICursos).then(resp => {
      setCursos(
        resp.data.map((curso: curso) => ({
          id: curso.id,
          codCurso: curso.codCurso,
          nomeCurso: curso.nomeCurso,
          periodo: curso.periodo,
        }))
      );
    })
  }, [])

  const selecioncaCurso = (codCurso: string) => {
    const curso = cursos.find((curso) => String(curso.codCurso) === codCurso);

    setCursoSelecionado(curso);
  }

  const filterAlunos = (alunos: aluno[]) => {
    if (cursoSelecionado) {
      return alunos.filter((aluno) => aluno.codCurso === cursoSelecionado.codCurso);
    };

    return alunos;
  }

  return (
    <Main title="Carômetro">
      <div className='Carometro'>
        <label> Filtre o curso: </label>
        <select
          onChange={(event) => selecioncaCurso(event.target.value)}
          value={cursoSelecionado ? cursos.find((curso) => curso.nomeCurso === cursoSelecionado.nomeCurso)?.codCurso : ''}
        >
          <option value="" disabled selected hidden>Selecione o curso</option>
          {cursos.map((curso) => <option value={curso.codCurso} key={curso.codCurso}>{curso.nomeCurso}</option>)}
        </select>

        <div className="container-alunos">
          {filterAlunos(alunos).map((aluno, index) => (
            <UserCard codCurso={aluno.codCurso} nome={aluno.nome} ra={aluno.ra} key={aluno.ra} urlImg={`https://randomuser.me/api/portraits/lego/${index}.jpg`} />
          ))}
        </div>
      </div>
    </Main>
  );
}
