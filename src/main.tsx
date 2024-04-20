// Styles
import 'sanitize.css';
import '@fontsource/inter/500.css';
import '@radix-ui/themes/layout.css';
import './index.css';

import { Theme } from '@radix-ui/themes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
);
