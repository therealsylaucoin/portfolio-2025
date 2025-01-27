import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './styles/global.ts';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import "./i18n/config.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <App />
            </ThemeProvider>
        </React.Suspense>
    </React.StrictMode>,
);