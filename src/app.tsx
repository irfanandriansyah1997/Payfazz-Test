import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme from '@/component/themes/default';
import AppRouter from '@/route';

import '@/styles/scss/app.scss';


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>,
    document.getElementById('app')
);
