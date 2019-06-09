/**
 * Header Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

import * as React from 'react';
import { render, mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import Header from './header.component';

require('config/enzyme.config');

describe('Testing header component in molecules component ', () => {
    it('Test render textview material component', () => {
        render(
            <Router>
                <Header
                    keyword=""
                    onChange={(_) => {}}
                />
            </Router>
        );
    });

    it('Test render textview on event handler', () => {
        const mockFnOnChange = jest.fn();
        const textview = mount(
            <Router>
                <Header
                    keyword=""
                    onChange={mockFnOnChange}
                />
            </Router>
        );

        /**
         * On Focus
         */
        textview.find('input').simulate('focus');
        expect(mockFnOnChange).toHaveBeenCalled();

        /**
         * On Blur
         */
        textview.find('input').simulate('blur');
        expect(mockFnOnChange).toHaveBeenCalled();

        /**
         * On Change
         */
        textview.find('input').simulate('change');
        expect(mockFnOnChange).toHaveBeenCalled();
    });

    it('Test render textview if props value update', () => {
        const mockFnOnChange = jest.fn();
        const textview = mount(
            <Router>
                <Header
                    keyword="text"
                    onChange={mockFnOnChange}
                />
            </Router>
        );

        expect(textview.find(Header).state('keyword')).toBe('text');
        textview.setProps({
            children: (
                <Header
                    keyword="text updated"
                    onChange={mockFnOnChange}
                />
            )
        });
        expect(textview.find(Header).state('keyword')).toBe('text updated');
    });

    it('Test render textview if onChange method is not defined', () => {
        const mockFnOnChange = jest.fn();
        const textview = mount(
            <Router>
                <Header
                    keyword="text"
                />
            </Router>
        );

        /**
         * On Focus
         */
        textview.find('input').simulate('focus');
        expect(mockFnOnChange).toHaveBeenCalledTimes(0);

        /**
         * On Blur
         */
        textview.find('input').simulate('blur');
        expect(mockFnOnChange).toHaveBeenCalledTimes(0);

        /**
         * On Change
         */
        textview.find('input').simulate('change');
        expect(mockFnOnChange).toHaveBeenCalledTimes(0);
    });
});
