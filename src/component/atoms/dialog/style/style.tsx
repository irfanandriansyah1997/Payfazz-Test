/**
 * Dialog Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.01
 */

import styled, { css } from 'styled-components';
import { DialogStylePropTypes } from '@/component/atoms/dialog/dialog.component';
import { rounded } from '@/styles/styled-component/mixins/border-radius.mixin';
import { backgroundColor } from '@/styles/styled-component/mixins/background.mixin';
import { transition } from '@/styles/styled-component/mixins/transition.mixin';

const getTransform = (type?: string): any => {
    if (type === 'popup') {
        return css`
            transform: translate(-50%, -50%);
        `;
    }

    return css`
        transform: translateY(50%);
    `;
};

const DialogComponent = styled.div<DialogStylePropTypes>`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    z-index: 100;
    min-height: 200px;
    overflow: hidden;

    ${({ type, theme }) => css`
        top: ${type === 'popup' ? '50%' : 'initial'};
        bottom: ${type === 'popup' ? 'initial' : '0'};
        left: ${type === 'popup' ? '50%' : '0'};
        padding: ${type === 'popup' ? '0' : '15px'};
        width: ${type === 'popup' ? 'calc(100% - 30px)' : '100%'};
        max-width: ${type === 'popup' ? '400px' : '100%'};
        height: initial;

        ${getTransform(type)}
        ${backgroundColor(theme.palette.white[0])}
        ${rounded(type === 'popup' ? '5px' : '10px 10px 0 0')}
        ${transition(css`0.3s cubic-bezier(0.7, 0.3, 0, 1)`)}

        img {
            width: ${type === 'popup' ? '100%' : '75%'};
            margin: ${type === 'popup' ? '-40px 0 -20px' : 'initial'};
        }
    `}
`;

export default DialogComponent;
