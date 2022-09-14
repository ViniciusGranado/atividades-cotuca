import React from 'react';
import { Header } from '../Header/Header';
import './Main.css';

interface MainProps {
  children: React.ReactNode;
  title: string;
}

export const Main = ({ children, title }: MainProps) => {
  return (
    <React.Fragment>
      <Header title={title} />
      <main className="content">
        <div>
          {children}
        </div>
        Conteúdo
      </main>
    </React.Fragment>
  )
}