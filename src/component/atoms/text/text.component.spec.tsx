/**
 * Text Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.25
 */

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { fontSizeHeading, lineHeightHeading } from '@/component/themes/default/size.theme';
import Text from './text.component';

import 'jest-styled-components';

import Theme from '@/component/themes/default';

it('Test render text', () => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Text
                    TextType="h1"
                    fontWeight="light"
                    color="#000"
                >
                    Ini Text
                </Text>
            </ThemeProvider>
        )
        .toJSON();

    const fontsize = fontSizeHeading.headingH1;
    const lineheight = lineHeightHeading.lineHeadingH1;

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('color', '#000');
    expect(component).toHaveStyleRule('font-weight', 'light');
    expect(component).toHaveStyleRule('font-size', fontsize);
    expect(component).toHaveStyleRule('line-height', lineheight);
});

it('Test render text without fill fontWeight props', () => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Text
                    TextType="h1"
                >
                    Ini Text
                </Text>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('font-weight', 'bold');
});
