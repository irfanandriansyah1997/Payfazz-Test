/**
 * Background Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';

/**
 * To set attribute related to background image
 * @param  {string} path
 * @param  {string} position
 * @param  {string} repeat
 */
export const backgroundImage = (
    path: string,
    position: string = 'initial',
    repeat: string = 'initial'
) => css`
    background-image: url(${path});
    background-position: ${position};
    background-repeat: ${repeat};
`;

/**
 * To set attribute background color
 * @param  {string} color
 */
export const backgroundColor = (color: string) => css`
    background-color: ${color};
`;

/**
 * To set default background image & color
 */
export const noBackground = () => css`
    background-image: initial;
    background: initial;

    ${backgroundColor('transparent')}
`;
