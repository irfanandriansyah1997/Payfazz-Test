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

import '@/styles/scss/app.scss';

const themes = [defaultTheme];

/**
 * Component
 */
import ButtonStorybook from '@/component/atoms/button/storybook/button.component.stories';
import ButtonFABStorybook from '@/component/atoms/button-fab/storybook/button-fab.component.stories';
import DialogStorybook from '@/component/atoms/dialog/storybook/dialog.component.stories';
import IconStorybook from '@/component/atoms/icon/storybook/icon.component.stories';
import LoadingStorybook from '@/component/atoms/loading/storybook/loading.component.stories';
import TextStorybook from '@/component/atoms/text/storybook/text.component.stories';
import TextviewStorybook from '@/component/atoms/textview/storybook/textview.component.stories';

/**
 * Markdown
 */
import ButtonMD from '@/component/atoms/button/storybook/docs.md';
import ButtonFABMD from '@/component/atoms/button-fab/storybook/docs.md';
import IconMD from '@/component/atoms/icon/storybook/docs.md';
import TextMD from '@/component/atoms/text/storybook/docs.md';

storiesOf('Atomic Component', module)
    .addDecorator(withThemesProvider(themes))
    .add('Button', () => <ButtonStorybook />, {
        notes: {
            markdown: ButtonMD
        }
    })
    .add('Button Fab', () => <ButtonFABStorybook />, {
        notes: {
            markdown: ButtonFABMD
        }
    })
    .add('Dialog', () => <DialogStorybook />, {
        notes: '# Coming Soon'
    })
    .add('Icon', () => <IconStorybook />, {
        notes: {
            markdown: IconMD
        }
    })
    .add('Loading', () => <LoadingStorybook />, {
        notes: '# Coming Soon'
    })
    .add('Text', () => <TextStorybook />, {
        notes: {
            markdown: TextMD
        }
    })
    .add('Textview', () => <TextviewStorybook />, {
        notes: '# Coming Soon'
    });
