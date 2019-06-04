/**
 * Router Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

import Router from './index';
import GettingStartedPage from '@/pages/getting-started';
import Theme from '@/component/themes/default';
import 'jest-styled-components';

require('config/enzyme.config');

describe('Testing router', () => {
    it('Test routing undefined path', () => {
        const route = mount(
            <ThemeProvider theme={Theme}>
                <MemoryRouter initialEntries={['/random']}>
                    <Router />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(route.find(GettingStartedPage)).toHaveLength(1);
    });

    it('Test routing getting started', () => {
        const route = mount(
            <ThemeProvider theme={Theme}>
                <MemoryRouter initialEntries={['/#/getting-started']}>
                    <Router />
                </MemoryRouter>
            </ThemeProvider>
        );

        expect(route.find(GettingStartedPage)).toHaveLength(1);
    });
});
