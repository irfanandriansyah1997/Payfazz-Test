/**
 * Getting Started Page Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

import Page from './index';
import Theme from '@/component/themes/default';
import Button from '@/component/atoms/button/button.component';
import Text from '@/component/atoms/text/text.component';
import 'jest-styled-components';

require('config/enzyme.config');

describe('Testing page', () => {
    it('Test page render properly', () => {
        mount(
            <ThemeProvider theme={Theme}>
                <Router>
                    <Page />
                </Router>
            </ThemeProvider>
        );
    });

    it('Test page getting started', () => {
        const page = mount(
            <ThemeProvider theme={Theme}>
                <Router>
                    <Page />
                </Router>
            </ThemeProvider>
        );

        expect(page.find(Button)).toHaveLength(2);
        expect(page.find(Text)).toHaveLength(2);
    });
});
