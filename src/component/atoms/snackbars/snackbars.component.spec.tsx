/**
 * Dialog Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.02
 */


import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Snackbars from './snackbars.component';
import SnackbarsStyle from './style/style';
import Icon from '@/component/atoms/icon/icon.component';
import Theme from '@/component/themes/default';
import 'jest-styled-components';

require('config/enzyme.config');

describe('Testing snackbars component in atomic component ', () => {
    it('Test render snackbars popup style default', (): void => {
        const component = renderer
            .create(
                <ThemeProvider theme={Theme}>
                    <SnackbarsStyle type="default">Ini Popup</SnackbarsStyle>
                </ThemeProvider>
            )
            .toJSON();

        expect(component).toHaveStyleRule('background-color', '#3893d9');
        expect(component).toHaveStyleRule('color', '#fff');
    });

    it('Test render snackbars popup style error', (): void => {
        const component = renderer
            .create(
                <ThemeProvider theme={Theme}>
                    <SnackbarsStyle type="error">Ini Popup</SnackbarsStyle>
                </ThemeProvider>
            )
            .toJSON();

        expect(component).toHaveStyleRule('background-color', '#ff609c');
        expect(component).toHaveStyleRule('color', '#fff');
    });

    it('Test render snackbars', () => {
        render(
            <ThemeProvider theme={Theme}>
                <Snackbars
                    show={false}
                    onCloseDialog={() => {}}
                >
                    Ini Child
                </Snackbars>
            </ThemeProvider>
        );
    });

    it('Test render snackbars if user click icon', () => {
        const mockFn = jest.fn();
        const dialog = mount(
            <ThemeProvider theme={Theme}>
                <Snackbars
                    show
                    onCloseDialog={mockFn}
                >
                    Ini Child
                </Snackbars>
            </ThemeProvider>
        );

        /**
         * Before On Click Icon
         */
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Click Icon
         */
        dialog.find(Icon).simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
