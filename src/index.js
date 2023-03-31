import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
        <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
    </BrowserRouter>

 
);

