/**
 * Border Radius Mixin Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import * as React from 'react';
import styled from 'styled-components';
import * as renderer from 'react-test-renderer';
import { rounded } from './border-radius.mixin';
import 'jest-styled-components';

it('Test render background grey', () => {
    const Style = styled.button`
        ${rounded(5)}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('border-radius', '5px');
    expect(component).toHaveStyleRule('-webkit-border-radius', '5px');
    expect(component).toHaveStyleRule('-moz-border-radius', '5px');
});
