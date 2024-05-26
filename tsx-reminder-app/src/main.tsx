import React from 'react';
import reactDom from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

const root = document.getElementById('root');

if (root) {
  reactDom.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
