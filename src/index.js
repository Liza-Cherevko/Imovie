import React from 'react';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import theme from './utils/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
   
  </React.StrictMode>
);

