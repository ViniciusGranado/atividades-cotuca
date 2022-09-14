import React from 'react';
import { Header } from '../Header/Header';
import './Main.css';

interface MainProps {
  children: React.ReactNode;
  title: string;
}

export const Main = ({ children, title }: MainProps) => {
  return (
    <div className="content">
      <Header title={title} />
      <main>
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}