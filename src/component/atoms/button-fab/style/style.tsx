/**
 * Button FAB Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import styled, { css } from 'styled-components';

import ButtonStyle from '@/component/atoms/button/style/style';
import { ButtonProps } from '@/component/atoms/button/button.component.tsx';
import { rounded } from '@/styles/styled-component/mixins/border-radius.mixin';
import { fontSize } from '@/styles/styled-component/mixins/font.mixin';
import { DefaultDynamicObject } from '@/interfaces/object.interface';

const getSizeButton = (size?: string): DefaultDynamicObject => {
    if (size === 'small') {
        return {
            size: '40px',
            fontSize: '18px'
        };
    }

    if (size === 'large') {
        return {
            size: '72px',
            fontSize: '30px'
        };
    }

    return {
        size: '56px',
        fontSize: '24px'
    };
};

const ButtonFabComponent = styled(ButtonStyle)<ButtonProps>`
    ${rounded('50%')}

    ${(props) => css`
        width: ${getSizeButton(props.size).size}
        height: ${getSizeButton(props.size).size}

        .ui-atomic-icon {
            ${fontSize(getSizeButton(props.size).fontSize)}

            line-height: initial;
            margin: initial;
        }
    `}
`;

export default ButtonFabComponent;
