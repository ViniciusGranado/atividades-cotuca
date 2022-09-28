import { ChangeEvent, MouseEvent, useEffect } from "react";
import { aluno } from "../../models/models";
import './Form.css';

interface FormProps {
  formData: aluno;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSave: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  onCancel: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

export const Form: React.FC<FormProps> = ({
  formData,
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
      <input
        type="number"
        id="codCurso"
        placeholder="0"
        className="form-input"
        name="codCurso"
        value={formData.codCurso}
        onChange={(event) => onChange(event)}
      />

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