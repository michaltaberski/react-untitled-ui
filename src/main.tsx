// Styles
import 'modern-normalize';
import './preflight.css';
import '@fontsource/inter/400.css'; // regular
import '@fontsource/inter/500.css'; // medium
import '@fontsource/inter/600.css'; // semi-bold
import '@fontsource/inter/700.css'; // bold
import '@radix-ui/themes/layout.css';
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
