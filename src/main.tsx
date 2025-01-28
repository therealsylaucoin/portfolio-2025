import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './styles/global.ts';
import { theme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import Loading from './components/loading/loading.tsx';
import "./i18n/config.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <React.Suspense fallback={<Loading/>}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <App />
            </ThemeProvider>
        </React.Suspense>
    </React.StrictMode>,
);