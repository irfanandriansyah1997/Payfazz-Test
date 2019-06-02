/**
 * Dialog Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.02
 */


import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { render, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Dialog from './dialog.component';
import DialogStyle from './style/style';
import Theme from '@/component/themes/default';
import 'jest-styled-components';

require('config/enzyme.config');

it('Test render dialog popup', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <DialogStyle type="popup">Ini Popup</DialogStyle>
            </ThemeProvider>
        )
        .toJSON();

    expect(component).toHaveStyleRule('background-color', '#fff');
    expect(component).toHaveStyleRule('top', '50%');
    expect(component).toHaveStyleRule('bottom', 'initial');
    expect(component).toHaveStyleRule('left', '50%');
    expect(component).toHaveStyleRule('width', 'calc(100% - 30px)');
    expect(component).toHaveStyleRule('border-radius', '5px');
    expect(component).toHaveStyleRule('max-width', '400px');
    expect(component).toHaveStyleRule('transform', 'translate(-50%,-50%)');
});


it('Test render dialog snackbar', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <DialogStyle type="snackbar">Ini Snackbar</DialogStyle>
            </ThemeProvider>
        )
        .toJSON();

    expect(component).toHaveStyleRule('top', 'initial');
    expect(component).toHaveStyleRule('bottom', '0');
    expect(component).toHaveStyleRule('left', '0');
    expect(component).toHaveStyleRule('width', '100%');
    expect(component).toHaveStyleRule('border-radius', '10px 10px 0 0');
    expect(component).toHaveStyleRule('max-width', '100%');
    expect(component).toHaveStyleRule('transform', 'translateY(50%)');
});


describe('Testing dialog component in atomic component ', () => {
    it('Test render dialog', () => {
        render(
            <ThemeProvider theme={Theme}>
                <Dialog
                    show={false}
                    onCloseDialog={() => {}}
                >
                    Ini Child
                </Dialog>
            </ThemeProvider>
        );
    });

    it('Test render dialog if user click backdrop', () => {
        const mockFn = jest.fn();
        const dialog = mount(
            <ThemeProvider theme={Theme}>
                <Dialog
                    show
                    onCloseDialog={mockFn}
                >
                    Ini Child
                </Dialog>
            </ThemeProvider>
        );

        /**
         * Before On Click Backdrop
         */
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Click Backdrop
         */
        dialog.find('.ui-atomic-dialog__backdrop').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);

        /**
         * Check type animation dialog
         */
        expect(dialog.find(CSSTransition).at(1).prop('classNames')).toBe('fade-scale-center');
    });

    it('Test render dialog if user using snackbar', () => {
        const mockFn = jest.fn();
        const dialog = mount(
            <ThemeProvider theme={Theme}>
                <Dialog
                    show
                    type="snackbar"
                    onCloseDialog={mockFn}
                >
                    Ini Child
                </Dialog>
            </ThemeProvider>
        );

        /**
         * Check type animation dialog
         */
        expect(dialog.find(CSSTransition).at(1).prop('classNames')).toBe('slide-down');
    });
});
