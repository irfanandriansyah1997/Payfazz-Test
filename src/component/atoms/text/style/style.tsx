/**
 * Button Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import styled, { css } from 'styled-components';
import { TextProps } from '@/component/atoms/text/text.component';
import {
    generateHeadingStyle,
    fontWeight,
    fontColor
} from '@/styles/styled-component/mixins/font.mixin';

const TextComponent = styled.p<TextProps>`
    display: block;
    margin: 10px 0;

    ${(props) => css`
        ${generateHeadingStyle(props.TextType, props.theme)}
        ${fontWeight(props.fontWeight)}
        ${fontColor(props.color ? props.color : props.theme.palette.grayscale[0])}
    `}
`;

export default TextComponent;
