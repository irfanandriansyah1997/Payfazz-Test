/**
 * Snackbar Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import styled, { css } from 'styled-components';
import { AlertDialogStylePropTypes } from '@/component/atoms/snackbars/snackbars.component';
import { backgroundColor } from '@/styles/styled-component/mixins/background.mixin';
import { fontColor } from '@/styles/styled-component/mixins/font.mixin';
import { transition } from '@/styles/styled-component/mixins/transition.mixin';

const SnackbarComponent = styled.div<AlertDialogStylePropTypes>`
    position: fixed;
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    z-index: 100;

    ${({ type, theme }) => css`
        ${backgroundColor(theme.palette[type === 'default' ? 'primary' : 'secondary'][0])}
        ${fontColor(theme.palette.white[0])}
        ${transition(css`0.3s cubic-bezier(0.7, 0.3, 0, 1)`)}
    `}
`;

export default SnackbarComponent;
