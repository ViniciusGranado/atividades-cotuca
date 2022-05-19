import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>
);