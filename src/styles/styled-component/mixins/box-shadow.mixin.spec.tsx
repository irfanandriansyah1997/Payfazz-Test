/**
 * Box Shadow Mixin Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import * as renderer from 'react-test-renderer';
import { boxShadow, boxShadowFormatted, noBoxShadow } from './box-shadow.mixin';
import 'jest-styled-components';

it('Test render box-shadow default', () => {
    const Style = styled.button`
        ${boxShadow(css`0 1px 2px #000, 0 2px 10px #000`)}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('box-shadow', '0 1px 2px #000,0 2px 10px #000');
});

it('Test render box-shadow formatted', () => {
    const Style = styled.button`
        ${boxShadowFormatted(0, 10, 50, '#ddd')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('box-shadow', '10px 0px 50px #ddd');
    expect(component).toHaveStyleRule('-webkit-box-shadow', '10px 0px 50px #ddd');
});

it('Test render box-shadow inset formatted', () => {
    const Style = styled.button`
        ${boxShadowFormatted(0, 10, 50, '#ddd', true)}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('box-shadow', 'inset 10px 0px 50px #ddd');
    expect(component).toHaveStyleRule('-webkit-box-shadow', 'inset 10px 0px 50px #ddd');
});

it('Test render no box-shadow', () => {
    const Style = styled.button`
        ${noBoxShadow()}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('box-shadow', 'initial');
    expect(component).toHaveStyleRule('-webkit-box-shadow', 'initial');
});
