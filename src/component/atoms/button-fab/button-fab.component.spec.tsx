/**
 * Button FAB Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Button from './button-fab.component';
import Theme from '@/component/themes/default';
import 'jest-styled-components';

it('Test render button fab default', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button buttonType="primary">edit</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('height', '56px');
    expect(component).toHaveStyleRule('width', '56px');
});

it('Test render button fab small', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button size="small" buttonType="primary">edit</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('height', '40px');
    expect(component).toHaveStyleRule('width', '40px');
});

it('Test render button fab large', (): void => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Button size="large" buttonType="primary">edit</Button>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('height', '72px');
    expect(component).toHaveStyleRule('width', '72px');
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
