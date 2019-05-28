import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import theme from '@/component/themes/default';
import Button from '@/component/atoms/button/button.component';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <div>
            <h1>Hai</h1>
            <Button />
        </div>
    </ThemeProvider>,
    document.getElementById('app')
);
