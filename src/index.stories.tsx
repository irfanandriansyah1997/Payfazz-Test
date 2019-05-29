/**
 * Storybook Main Project
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

/* eslint-disable */
import * as React from 'react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { storiesOf } from '@storybook/react';
import defaultTheme from '@/component/themes/default';

const themes = [defaultTheme];

/**
 * Component
 */
import ButtonStorybook from '@/component/atoms/button/storybook/button.component.stories';

/**
 * Markdown
 */
import ButtonMD from '@/component/atoms/button/storybook/docs.md';

storiesOf('Atomic Component', module)
    .addDecorator(withThemesProvider(themes))
    .add('Button', () => <ButtonStorybook />, {
        notes: {
            markdown: ButtonMD
        }
    });
