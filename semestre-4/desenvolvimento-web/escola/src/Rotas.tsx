import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Main } from './components/template/Main/Main';
import { CrudAluno } from './components/crudAluno/CrudAluno';

export const Rotas = () => {
  return (
    <Routes>

      <Route path='/' element={
        <Main title="Bem Vindo!">
          <div>Cadastro de alunos, cursos e carômetro </div>
        </Main>
      }
      />

      <Route path='/alunos' element={< CrudAluno />} />

      < Route path='*' element={
        <Main title="Bem Vindo!">
          <div>Página não encontrada </div>
        </Main>
      } />

    </Routes>
  )
}