/**
 * Button Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Button from './button.component';
import Theme from '@/component/themes/default';
import 'jest-styled-components';

require('config/enzyme.config');

it('Test render button primary', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="primary">Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('position', 'relative');
    expect(component).toHaveStyleRule('display', 'flex');
    expect(component).toHaveStyleRule('height', '41px');
    expect(component).toHaveStyleRule('cursor', 'pointer');
    expect(component).toHaveStyleRule('background-color', '#3893d9');
    expect(component).toHaveStyleRule('border', '1px solid #3893d9');
    expect(component).toHaveStyleRule('font-size', '14px');
    expect(component).toHaveStyleRule('padding', '0 15px');
    expect(component).toHaveStyleRule('font-family', '\'Avenir Next\',sans-serif');
    expect(component).toHaveStyleRule('color', '#fff');
    expect(component).toHaveStyleRule('transition', '0.15s cubic-bezier(0.7,0.3,0,1)');
    expect(component).toHaveStyleRule('box-shadow', 'initial');

    /**
     * On Hover Component
     */
    expect(component).toHaveStyleRule('background-color', '#3d8ecc', { modifier: ':hover' });
    expect(component).toHaveStyleRule('border', '1px solid #3d8ecc', { modifier: ':hover' });
    expect(component).toHaveStyleRule('color', '#fff');
});

it('Test render button secondary', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="secondary">Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('background-color', '#ff609c');
    expect(component).toHaveStyleRule('border', '1px solid #ff609c');
    expect(component).toHaveStyleRule('color', '#fff');

    /**
     * On Hover Component
     */
    expect(component).toHaveStyleRule('background-color', '#ed518d', { modifier: ':hover' });
    expect(component).toHaveStyleRule('border', '1px solid #ed518d', { modifier: ':hover' });
    expect(component).toHaveStyleRule('color', '#fff');
});

it('Test render button tertiary', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="tertiary">Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('background-color', '#fff');
    expect(component).toHaveStyleRule('border', '1px solid #d8d8d8');
    expect(component).toHaveStyleRule('color', '#3e4246');

    /**
     * On Hover Component
     */
    expect(component).toHaveStyleRule('background-color', '#f6f6f6', { modifier: ':hover' });
    expect(component).toHaveStyleRule('color', '#3e4246', { modifier: ':hover' });
});

it('Test render button tertiary no border', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="tertiary" noBorder>Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('border', '1px solid transparent');
    expect(component).toHaveStyleRule('background', 'transparent');
});

it('Test render button primary with outline', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="primary" outline>Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('background-color', '#fff');
    expect(component).toHaveStyleRule('border', '1px solid #3893d9');
    expect(component).toHaveStyleRule('color', '#3e4246');

    /**
     * On Hover Component
     */
    expect(component).toHaveStyleRule('background-color', '#3d8ecc', { modifier: ':hover' });
    expect(component).toHaveStyleRule('border', '1px solid #3d8ecc', { modifier: ':hover' });
    expect(component).toHaveStyleRule('color', '#fff', { modifier: ':hover' });
});

it('Test render button secondary with outline', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="secondary" outline>Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('background-color', '#fff');
    expect(component).toHaveStyleRule('border', '1px solid #ff609c');
    expect(component).toHaveStyleRule('color', '#3e4246');

    /**
     * On Hover Component
     */
    expect(component).toHaveStyleRule('background-color', '#ed518d', { modifier: ':hover' });
    expect(component).toHaveStyleRule('border', '1px solid #ed518d', { modifier: ':hover' });
    expect(component).toHaveStyleRule('color', '#fff', { modifier: ':hover' });
});

it('Test render button secondary with box shadow', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="secondary" shadow>Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule(
        'box-shadow',
        '0 1px 2px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.075)'
    );

    /**
     * On Hover Component
     */
    expect(component).toHaveStyleRule(
        'box-shadow',
        '0 2px 4px rgba(0,0,0,0.05), 0 3px 6px rgba(0,0,0,0.075), 0 4px 8px rgba(0,0,0,0.1)',
        { modifier: ':hover' }
    );
});

it('Test render button disabled', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="secondary" disable>Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();
    const component2 = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="secondary" disable outline size="small">Ini Button</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('color', 'rgba(255,255,255,0.75)');
    expect(component2).toHaveStyleRule('color', 'rgba(62,66,70,0.5)');
    expect(component2).toHaveStyleRule('font-size', '12px');
    expect(component2).toHaveStyleRule('height', '32px');
    expect(component2).toHaveStyleRule('padding', '0 7.5px');
    expect(component2).toHaveStyleRule('cursor', 'not-allowed');

    /**
     * On Hover Component
     */
    expect(component).toHaveStyleRule('color', 'rgba(255,255,255,0.75)', { modifier: ':hover' });
    expect(component2).toHaveStyleRule('color', 'rgba(62,66,70,0.5)', { modifier: ':hover' });
});

it('Test button on click', () => {
    const mockFn = jest.fn();
    const button = shallow(
        <Button
            buttonType="primary"
            onClick={mockFn}
        >
            edit
        </Button>
    );
    button.simulate('click');
    expect(mockFn).toHaveBeenCalled();
});
