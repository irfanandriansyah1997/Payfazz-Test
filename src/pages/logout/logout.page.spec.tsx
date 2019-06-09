/**
 * SignupPage Page Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '@/reducers';

import Logout from './index';
import Theme from '@/component/themes/default';
import AuthHelper from '@/helper/auth.helper';

import 'jest-styled-components';

require('config/enzyme.config');

const { store, persistor } = configureStore();
const Page = AuthHelper(
    Logout,
    false,
    'Logout Page'
);

describe('Testing page logout', () => {
    it('Test page render properly', () => {
        mount(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={Theme}>
                        <Router>
                            <Page />
                        </Router>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        );
    });
});
