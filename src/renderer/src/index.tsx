import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@renderer/global/components/ThemeProvider/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
