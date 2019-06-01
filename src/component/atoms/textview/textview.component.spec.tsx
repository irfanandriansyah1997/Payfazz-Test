/**
 * Icon Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

import * as React from 'react';
import { render, mount } from 'enzyme';
import Textview from './textview.component';
import Icon from '@/component/atoms/icon/icon.component';


require('config/enzyme.config');

describe('Testing textview component in atomic component ', () => {
    it('Test render textview material component', () => {
        render(<Textview
            type="text"
            name="username"
        />);
    });

    it('Test render textview on event handler', () => {
        const mockFnOnFocus = jest.fn();
        const mockFnOnBlur = jest.fn();
        const mockFnOnChange = jest.fn();
        const textview = mount(
            <Textview
                type="text"
                name="username"
                onFocus={mockFnOnFocus}
                onBlur={mockFnOnBlur}
                onChange={mockFnOnChange}
            />
        );

        /**
         * On Focus
         */
        textview.find('.ui-atomic-textview__input').simulate('focus');
        expect(mockFnOnFocus).toHaveBeenCalled();

        /**
         * On Blur
         */
        textview.find('.ui-atomic-textview__input').simulate('blur');
        expect(mockFnOnBlur).toHaveBeenCalled();

        /**
         * On Change
         */
        textview.find('.ui-atomic-textview__input').simulate('change');
        expect(mockFnOnChange).toHaveBeenCalled();
    });

    it('Test render textview on event handler but event not defined', () => {
        const mockFn = jest.fn();
        const textview = mount(
            <Textview
                type="text"
                name="username"
            />
        );

        /**
         * On Focus
         */
        textview.find('.ui-atomic-textview__input').simulate('focus');
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Blur
         */
        textview.find('.ui-atomic-textview__input').simulate('blur');
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Change
         */
        textview.find('.ui-atomic-textview__input').simulate('change');
        expect(mockFn).toHaveBeenCalledTimes(0);
    });

    it('Test render textview password show & hide text feature', () => {
        const textview = mount(<Textview
            type="password"
            name="username"
        />);

        /**
         * Before Icon clicked
         */
        expect(textview.find('.ui-atomic-textview__input').prop('type')).toBe('password');
        expect(textview.state('stateType')).toBe('password');

        /**
         * After Icon clicked
         */
        textview.find(Icon).simulate('click');
        expect(textview.state('stateType')).toBe('text');
        expect(textview.find('.ui-atomic-textview__input').prop('type')).toBe('text');

        textview.find(Icon).simulate('click');
        expect(textview.state('stateType')).toBe('password');
        expect(textview.find('.ui-atomic-textview__input').prop('type')).toBe('password');
    });
});
