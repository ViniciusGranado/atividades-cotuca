import axios from "axios";
import { useEffect, useState } from "react";
import { curso } from "../../models/models";
import { FormCurso } from "../Form/FormCurso";
import { TableCurso } from "../Table/TableCurso";
import { Main } from "../template/Main/Main";

import './CrudCurso.css';

const title = "Cadastro de Cursos";

const urlAPI = "https://localhost:7221/api/curso";

export const CrudCurso = () => {
  const [cursos, setCursos] = useState<curso[]>([]);
  const [formData, setFormData] = useState<curso>({
    id: "",
    codCurso: "",
    nomeCurso: "",
    periodo: "",
  });

  useEffect(() => {
    axios(urlAPI).then((resp) => {
      setCursos(resp.data);
    });
  }, []);

  const limpar = () => {
    setCursos([]);
  };

  const salvar = () => {
    const curso = formData;

    const metodo = curso.id ? "put" : "post";
    const url = curso.id ? `${urlAPI}/${curso.id}` : urlAPI;

    if (!curso.id) {
      delete curso.id;
    }

    axios[metodo](url, curso).then((resp) => {
      const lista = getListaAtualizada(resp.data);
      setCursos(lista);
    });
  };

  const getListaAtualizada = (curso: curso, add: boolean = true) => {
    const lista = cursos.filter((a) => a.id !== curso.id);

    if (add) {
      lista.unshift(curso);
    }

    return lista;
  };

  const atualizaCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const carregar = (curso: curso) => {
    setFormData(curso);
  };

  const remover = (curso: curso) => {
    const url = urlAPI + "/" + curso.id;

    if (window.confirm("Confirma remoção do curso: " + curso.codCurso)) {
      console.log("entrou no confirm");
      axios["delete"](url).then(() => {
        const lista = getListaAtualizada(curso, false);
        setCursos(lista);
      });
    }
  };

  return (
    <Main title={title}>
      <FormCurso
        formData={formData}
        onChange={atualizaCampo}
        onCancel={limpar}
        onSave={salvar}
      />
      <TableCurso cursos={cursos} onAlter={carregar} onDelete={remover} />
    </Main>
  );
};
