import { curso } from "../../models/models";

interface TableCursoProps {
  cursos: curso[];
  onAlter: (curso: curso) => void;
  onDelete: (curso: curso) => void;
}

export const TableCurso: React.FC<TableCursoProps> = ({
  cursos,
  onAlter,
  onDelete,
}) => {
  return (
    <div className="listagem">
      <table className="listaCursos" id="tblListaCursos">
        <thead>
          <tr className="cabecTabela">
            <th className="tabTituloCod">Código</th>
            <th className="tabTituloNome">Nome</th>
            <th className="tabTituloPeriodo">Periodo</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso) => (
            <tr key={curso.id}>
              <td>{curso.codCurso}</td>
              <td>{curso.nomeCurso}</td>
              <td>{curso.periodo}</td>
              <td>
                <button onClick={() => onAlter(curso)}>Altera</button>
              </td>
              <td>
                <button onClick={() => onDelete(curso)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
