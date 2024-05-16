import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Router } from './router';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);

