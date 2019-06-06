import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import theme from '@/component/themes/default';
import AppRouter from '@/route';
import configureStore from './reducers';

import '@/styles/scss/app.scss';


const { store, persistor } = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
