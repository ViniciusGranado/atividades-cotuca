import { ChangeEvent, MouseEvent } from "react";
import { curso } from "../../models/models";
import "./Form.css";

interface FormCursoProps {
  formData: curso;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSave: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  onCancel: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}

export const FormCurso: React.FC<FormCursoProps> = ({
  formData,
  onChange,
  onSave,
  onCancel,
}) => {
  return (
    <div className="inclui-container">
      <label> Código do Curso: </label>
      <input
        type="number"
        id="codCurso"
        placeholder="0"
        className="form-input"
        name="codCurso"
        value={formData.codCurso}
        onChange={(event) => onChange(event)}
      />

      <label> Nome do Curso: </label>
      <input
        type="text"
        id="nomeCurso"
        placeholder="Nome do curso"
        className="form-input"
        name="nomeCurso"
        value={formData.nomeCurso}
        onChange={(event) => onChange(event)}
      />

      <label> Periodo: </label>
      <input
        type="text"
        id="ra"
        maxLength={1}
        placeholder="M"
        className="form-input"
        name="periodo"
        value={formData.periodo}
        onChange={(event) => onChange(event)}
        style={{ maxWidth: '50px' }}
      />

      <button className="btnSalvar" onClick={(event) => onSave(event)}>
        Salvar
      </button>

      <button className="btnCancelar" onClick={(event) => onCancel(event)}>
        Cancelar
      </button>
    </div>
  );
};
