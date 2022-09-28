import { Main } from '../template/Main/Main'
import axios from 'axios';
import './CrudAluno.css';
import React, { useEffect, useState } from 'react';
import { aluno } from '../../models/models';
import { Form } from '../Form/Form';
import { Table } from '../Table/Table';

const title = "Cadastro de Alunos";

const urlAPI = "https://localhost:7221/api/aluno";

export const CrudAluno = () => {
  const [alunos, setAlunos] = useState<aluno[]>([]);
  const [formData, setFormData] = useState<aluno>({
    id: '',
    ra: '',
    nome: '',
    codCurso: '',
  })

  useEffect(() => {
    axios(urlAPI).then(resp => {
      setAlunos(resp.data);
    })
  }, [])

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const limpar = () => {
    setAlunos([]);
  }

  const salvar = () => {
    const aluno = formData;

    const metodo = aluno.id ? 'put' : 'post';
    aluno.codCurso = aluno.codCurso;
    const url = aluno.id ? `${urlAPI}/${aluno.id}` : urlAPI;

    if (!aluno.id) {
      delete aluno.id;
    }

    axios[metodo](url, aluno)
      .then(resp => {
        const lista = getListaAtualizada(resp.data);
        setAlunos(lista);
      })
  }

  const getListaAtualizada = (aluno: aluno, add: boolean = true) => {
    const lista = alunos.filter((a) => a.id !== aluno.id);

    if (add) {
      lista.unshift(aluno);
    }

    return lista;
  }

  const atualizaCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    const url = urlAPI + "/" + aluno.id;

    if (window.confirm("Confirma remoção do aluno: " + aluno.ra)) {
      console.log("entrou no confirm");
      axios['delete'](url)
        .then((resp) => {
          const lista = getListaAtualizada(aluno, false);
          setAlunos(lista);
    })
  }
}

return (
  <Main title={title}>
    <Form
      formData={formData}
      onChange={atualizaCampo}
      onCancel={limpar}
      onSave={salvar}
    />
    <Table alunos={alunos} onAlter={carregar} onDelete={remover} />
  </Main>
);
}