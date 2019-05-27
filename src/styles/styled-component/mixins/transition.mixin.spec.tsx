/**
 * Transition Mixin Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import * as React from 'react';
import styled, { css } from 'styled-components';
import * as renderer from 'react-test-renderer';
import { transition } from './transition.mixin';
import 'jest-styled-components';

it('Test render button with transition', () => {
    const Style = styled.button`
        ${transition(css`width 2s`)}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('transition', 'width 2s');
});
