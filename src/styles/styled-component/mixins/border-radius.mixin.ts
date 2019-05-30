/**
 * Border Radius Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';

/**
 * Set rounded for border-radius attribute
 * @param  {int} size
 */
export const rounded = (size: string) => css`
    -webkit-border-radius: ${size};
    -moz-border-radius: ${size};
    border-radius: ${size};
`;
