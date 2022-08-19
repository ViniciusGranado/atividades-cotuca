import React from 'react';
import { Header } from '../Header/Header';

export const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="content">
        Conteúdo
      </main>
    </React.Fragment>
  )
}