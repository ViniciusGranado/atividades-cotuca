import { Main } from '../template/Main/Main'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { aluno, curso } from '../../models/models';
import { FormAluno } from '../Form/FormAluno';
import { TableAluno } from '../Table/TableAluno';

import './CrudAluno.css';

const title = "Cadastro de Alunos";

const urlAPIAlunos = "https://localhost:7221/api/aluno";
const urlAPICursos = "https://localhost:7221/api/curso";

const initialFormData = {
  id: '',
  ra: '',
  nome: '',
  codCurso: '',
}

export const CrudAluno = () => {
  const [alunos, setAlunos] = useState<aluno[]>([]);
  const [cursos, setCursos] = useState<curso[]>([]);
  const [formData, setFormData] = useState<aluno>(initialFormData);

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

  const limpar = () => {
    setAlunos([]);
  }

  const salvar = () => {
    const aluno = formData;

    const metodo = aluno.id ? 'put' : 'post';
    const url = aluno.id ? `${urlAPIAlunos}/${aluno.id}` : urlAPIAlunos;

    if (!aluno.id) {
      delete aluno.id;
    }

    axios[metodo](url, aluno)
      .then(resp => {
        const lista = getListaAtualizada(resp.data);
        setAlunos(lista);
      })

    setFormData(initialFormData);
  }

  const getListaAtualizada = (aluno: aluno, add: boolean = true) => {
    const lista = alunos.filter((a) => a.id !== aluno.id);

    if (add) {
      lista.unshift(aluno);
    }

    return lista;
  }

  const atualizaCampo = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  const carregar = (aluno: aluno) => {
    setFormData(aluno);
  }

  const remover = (aluno: aluno) => {
    const url = urlAPIAlunos + "/" + aluno.id;

    if (window.confirm("Confirma remoção do aluno: " + aluno.ra)) {
      console.log("entrou no confirm");
      axios['delete'](url)
        .then(() => {
          const lista = getListaAtualizada(aluno, false);
          setAlunos(lista);
        })
    }
  }

  return (
    <Main title={title}>
      <FormAluno
        formData={formData}
        cursos={cursos}
        onChange={atualizaCampo}
        onCancel={limpar}
        onSave={salvar}
      />
      <TableAluno alunos={alunos} onAlter={carregar} onDelete={remover} />
    </Main>
  );
}