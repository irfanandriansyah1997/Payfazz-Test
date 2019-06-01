import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from '@/component/themes/default';
import TextView from '@/component/atoms/textview/textview.component';

import '@/styles/scss/app.scss';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <div style={{ padding: '20px' }}>
            <h1>Hai</h1>
            <TextView
                name="username"
                placeholder="Masukan Username"
            />
            <TextView
                name="password"
                type="password"
                placeholder="Masukan Password"
            />
        </div>
    </ThemeProvider>,
    document.getElementById('app')
);
