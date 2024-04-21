// Styles
import 'reset-css';
import '@fontsource/inter/400.css'; // regular
import '@fontsource/inter/500.css'; // medium
import '@fontsource/inter/600.css'; // semi-bold
import '@fontsource/inter/700.css'; // bold
import '@radix-ui/themes/layout.css';
import './index.css';

import { Theme } from '@radix-ui/themes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Theme>
  </React.StrictMode>,
);
