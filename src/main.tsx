// Styles
import 'modern-normalize';
import './preflight.css';
import '@fontsource/inter/300.css'; // regular
import '@fontsource/inter/400.css'; // medium
import '@fontsource/inter/500.css'; // semibold
import '@fontsource/inter/600.css'; // bold

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
