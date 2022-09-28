import { aluno } from "../models/models";

export type alunoDto = Omit<aluno, 'id'>;