/**
 * Transition Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';

/**
 * Set transition attribute
 * @param  {array[css]} args
 */
export const transition = (args: any) => css`
    // @ts-ignore
    -webkit-transition: ${css(args)};
    // @ts-ignore
    -moz-transition: ${css(args)};
    // @ts-ignore
    -ms-transition: ${css(args)};
    // @ts-ignore
    -o-transition: ${css(args)};
    // @ts-ignore
    transition: ${css(args)};
`;
