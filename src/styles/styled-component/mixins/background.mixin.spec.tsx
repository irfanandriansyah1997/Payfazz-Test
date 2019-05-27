/**
 * Background Mixin Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import * as React from 'react';
import styled from 'styled-components';
import * as renderer from 'react-test-renderer';
import { backgroundColor, backgroundImage, noBackground } from './background.mixin';
import 'jest-styled-components';

it('Test render background grey', () => {
    const Style = styled.button`
        ${backgroundColor('#ddd')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-color', '#ddd');
});

it('Test render background image with center position', () => {
    const Style = styled.div`
        ${backgroundImage('images', 'center')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-image', 'url(images)');
    expect(component).toHaveStyleRule('background-position', 'center');
    expect(component).toHaveStyleRule('background-repeat', 'initial');
});

it('Test render background image with center position no-repeat', () => {
    const Style = styled.div`
        ${backgroundImage('images', 'center', 'no-repeat')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-image', 'url(images)');
    expect(component).toHaveStyleRule('background-position', 'center');
    expect(component).toHaveStyleRule('background-repeat', 'no-repeat');
});

it('Test render background image default', () => {
    const Style = styled.div`
        ${backgroundImage('images')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-image', 'url(images)');
    expect(component).toHaveStyleRule('background-position', 'initial');
    expect(component).toHaveStyleRule('background-repeat', 'initial');
});

it('Test render no background', () => {
    const Style = styled.button`
        ${noBackground()}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-color', 'transparent');
    expect(component).toHaveStyleRule('background-image', 'initial');
    expect(component).toHaveStyleRule('background', 'initial');
});
