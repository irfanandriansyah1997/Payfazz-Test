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
import IconStorybook from '@/component/atoms/icon/storybook/icon.component.stories';
import TextStorybook from '@/component/atoms/text/storybook/text.component.stories';

/**
 * Markdown
 */
import ButtonMD from '@/component/atoms/button/storybook/docs.md';
import IconMD from '@/component/atoms/icon/storybook/docs.md';
import TextMD from '@/component/atoms/text/storybook/docs.md';

storiesOf('Atomic Component', module)
    .addDecorator(withThemesProvider(themes))
    .add('Button', () => <ButtonStorybook />, {
        notes: {
            markdown: ButtonMD
        }
    })
    .add('Icon', () => <IconStorybook />, {
        notes: {
            markdown: IconMD
        }
    })
    .add('Text', () => <TextStorybook />, {
        notes: {
            markdown: TextMD
        }
    });
