import { aluno } from "../../models/models";

interface TableAlunoProps {
  alunos: aluno[];
  onAlter: (aluno: aluno) => void;
  onDelete: (aluno: aluno) => void;
}

export const TableAluno: React.FC<TableAlunoProps> = ({
  alunos,
  onAlter,
  onDelete,
}) => {
  return (
    <div className="listagem">
      <table className="listaAlunos" id="tblListaAlunos">
        <thead>
          <tr className="cabecTabela">
            <th className="tabTituloRa">Ra</th>
            <th className="tabTituloNome">Nome</th>
            <th className="tabTituloCurso">Curso</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td>{aluno.ra}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.codCurso}</td>
              <td>
                <button onClick={() => onAlter(aluno)}>Altera</button>
              </td>
              <td>
                <button onClick={() => onDelete(aluno)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
