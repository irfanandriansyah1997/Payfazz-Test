/**
 * Login Page Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import Page, { LoginPage } from './index';
import Textview from '@/component/atoms/textview/textview.component';
import Button from '@/component/atoms/button/button.component';
import Icon from '@/component/atoms/icon/icon.component';
import Snackbar from '@/component/atoms/snackbars/snackbars.component';
import Theme from '@/component/themes/default';

import 'jest-styled-components';

require('config/enzyme.config');

const wrapper = mount(
    <ThemeProvider theme={Theme}>
        <Router>
            <Page />
        </Router>
    </ThemeProvider>
);

function simulateEvent(event: string) {
    const page = wrapper.find(LoginPage).at(0);
    const field = page.find(Textview);
    const email = field
        .at(0)
        .find('.ui-atomic-textview__input');
    const password = field
        .at(1)
        .find('.ui-atomic-textview__input');

    email.simulate(
        event,
        { target: { value: 'Hello' } }
    );

    password.simulate(
        event,
        { target: { value: 'World' } }
    );

    const inputValueEmail: any = email.instance();
    expect(inputValueEmail.value).toBe('Hello');
    expect(page.state('email')).toBe('Hello');

    const inputValuePassword: any = password.instance();
    expect(inputValuePassword.value).toBe('World');
    expect(page.state('password')).toBe('World');
}

describe('Testing page login', () => {
    it('Test page render properly', () => {
        mount(
            <ThemeProvider theme={Theme}>
                <Router>
                    <Page />
                </Router>
            </ThemeProvider>
        );
    });

    it('Change value textview in form', () => {
        simulateEvent('change');
    });

    it('textview on blur in form', () => {
        simulateEvent('blur');
    });

    it('textview on focus in form', () => {
        simulateEvent('focus');
    });

    it('on click login but value is not defined from user', () => {
        const loginWrapper = mount(
            <ThemeProvider theme={Theme}>
                <Router>
                    <Page />
                </Router>
            </ThemeProvider>
        );

        const page = loginWrapper.find(LoginPage).at(0);
        const button = page.find(Button);

        /**
         * If user not defined all field
         */
        button.simulate('click');
        expect(page.state('error')).toBe('Oops Email is required');

        /**
         * On user text email
         */
        const field = page.find(Textview);
        const snackbar = page.find(Snackbar);
        const snackbarClose = snackbar.find(Icon);
        const email = field
            .at(0)
            .find('.ui-atomic-textview__input');
        const password = field
            .at(1)
            .find('.ui-atomic-textview__input');

        email.simulate(
            'change',
            { target: { value: 'Hello' } }
        );
        button.simulate('click');
        expect(page.state('error')).toBe('Oops Password is required');

        /**
         * On user text password with 5 char
         */
        password.simulate(
            'change',
            { target: { value: 'World' } }
        );
        button.simulate('click');
        expect(page.state('error')).toBe('Oops min field Password is 8 character');

        /**
         * On user text password with 11 char
         */
        password.simulate(
            'change',
            { target: { value: 'Hello World' } }
        );
        button.simulate('click');
        expect(page.state('error')).toBe('');

        snackbarClose.simulate('click');
        expect(page.state('showedError')).toBe(false);
    });
});
