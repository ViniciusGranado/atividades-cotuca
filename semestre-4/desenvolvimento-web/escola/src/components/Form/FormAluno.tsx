import { ChangeEvent, MouseEvent } from "react";
import { aluno, curso } from "../../models/models";
import './Form.css';

interface FormAlunoProps {
  formData: aluno;
  cursos: curso[],
  onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
  onSave: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  onCancel: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

export const FormAluno: React.FC<FormAlunoProps> = ({
  formData,
  cursos,
  onChange,
  onSave,
  onCancel,
}) => {
  return (
    <div className="inclui-container">
      <label> RA: </label>
      <input
        type="text"
        id="ra"
        placeholder="RA do aluno"
        className="form-input"
        name="ra"
        value={formData.ra}
        onChange={(event) => onChange(event)}
      />

      <label> Nome: </label>
      <input
        type="text"
        id="nome"
        placeholder="Nome do aluno"
        className="form-input"
        name="nome"
        value={formData.nome}
        onChange={(event) => onChange(event)}
      />

      <label> Código do Curso: </label>
      <select name="codCurso" id="codCurso" onChange={(event) => onChange(event)} value={formData.codCurso} style={{ height: '100%' }}>
        <option value="" disabled selected hidden>Selecione o curso</option>
        {cursos.map((curso) => <option value={curso.codCurso} key={curso.codCurso}>{curso.nomeCurso}</option>)}
      </select>

      <button className="btnSalvar"
        onClick={(event) => onSave(event)} >
        Salvar
      </button>

      <button className="btnCancelar"
        onClick={(event) => onCancel(event)} >
        Cancelar
      </button>
    </div>
  );
}