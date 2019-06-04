/**
 * Card Listing Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

import * as React from 'react';
import { render, mount } from 'enzyme';
import CardListing from './card-listing.component';
import { ThemeProvider } from 'styled-components';
import Theme from '@/component/themes/default';

require('config/enzyme.config');

describe('Testing card component in atomic component ', () => {
    it('Test render card component', () => {
        const card = render(
            <ThemeProvider theme={Theme}>
                <CardListing
                    id={1}
                    price={10000}
                    unitCost={10000}
                    name="Forza Milan"
                    onClick={() => {}}
                />
            </ThemeProvider>
        );

        expect(card.hasClass('ui-molecules-card-listing')).toBe(true);
    });

    it('Test render component if user click card', () => {
        const mockFn = jest.fn();
        const dialog = mount(
            <ThemeProvider theme={Theme}>
                <CardListing
                    id={1}
                    price={10000}
                    unitCost={10000}
                    name="Forza Milan"
                    onClick={mockFn}
                />
            </ThemeProvider>
        );

        /**
         * Before On Click Backdrop
         */
        expect(mockFn).toHaveBeenCalledTimes(0);

        /**
         * On Click Backdrop
         */
        dialog.find('.ui-molecules-card-listing').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
