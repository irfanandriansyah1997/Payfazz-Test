/**
 * Delete Dialog Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */


import * as React from 'react';
import { render, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Button from '@/component/atoms/button/button.component';
import Dialog from './delete-dialog.component';
import Icon from '@/component/atoms/icon/icon.component';
import Theme from '@/component/themes/default';
import 'jest-styled-components';

require('config/enzyme.config');


describe('Testing delete dialog component in atomic component ', () => {
    it('Test render dialog', () => {
        render(
            <ThemeProvider theme={Theme}>
                <Dialog
                    show
                    onAccept={() => {}}
                    onCancel={() => {}}
                />
            </ThemeProvider>
        );
    });

    it('Test render dialog if user click icon close', () => {
        const mockFnDelete = jest.fn();
        const mockFnAccept = jest.fn();
        const dialog = mount(
            <ThemeProvider theme={Theme}>
                <Dialog
                    show
                    onAccept={mockFnAccept}
                    onCancel={mockFnDelete}
                />
            </ThemeProvider>
        );

        /**
         * Before On Click Icon
         */
        expect(mockFnDelete).toHaveBeenCalledTimes(0);

        /**
         * On Click Close Icon
         */
        dialog.find(Icon).simulate('click');
        expect(mockFnDelete).toHaveBeenCalledTimes(1);
    });

    it('Test render dialog if user click button keep delete', () => {
        const mockFnDelete = jest.fn();
        const mockFnAccept = jest.fn();
        const dialog = mount(
            <ThemeProvider theme={Theme}>
                <Dialog
                    show
                    onAccept={mockFnAccept}
                    onCancel={mockFnDelete}
                />
            </ThemeProvider>
        );

        /**
         * Before On Click Button
         */
        expect(mockFnDelete).toHaveBeenCalledTimes(0);

        /**
         * On Click Keep Button
         */
        dialog.find(Button).at(1).simulate('click');
        expect(mockFnDelete).toHaveBeenCalledTimes(1);
    });

    it('Test render dialog if user click button accept delete', () => {
        const mockFnDelete = jest.fn();
        const mockFnAccept = jest.fn();
        const dialog = mount(
            <ThemeProvider theme={Theme}>
                <Dialog
                    show
                    onAccept={mockFnAccept}
                    onCancel={mockFnDelete}
                />
            </ThemeProvider>
        );

        /**
         * Before On Click Backdrop
         */
        expect(mockFnAccept).toHaveBeenCalledTimes(0);

        /**
         * On Click Delete Button
         */
        dialog.find(Button).at(0).simulate('click');
        expect(mockFnAccept).toHaveBeenCalledTimes(1);
    });
});
