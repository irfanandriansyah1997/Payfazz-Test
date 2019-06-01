/**
 * Text Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.25
 */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import TextComponent, { TextProps } from '../text.component';
import { DefaultDynamicObject, DefaultPropsInterface } from '@/interfaces/object.interface';

export interface TextStates extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    template(
        TextType?: string,
        text?: string,
        as?: string
    ): any;
}

class TextStorybook extends React.Component<DefaultPropsInterface, TextStates> {
    constructor(props: TextProps) {
        super(props);

        this.state = {
            component: [
                {
                    TextType: 'h1',
                    text: 'Text H1',
                    as: 'h1'
                },
                {
                    TextType: 'h2',
                    text: 'Text H2',
                    as: 'h2'
                },
                {
                    TextType: 'h3',
                    text: 'Text H3',
                    as: 'h3'
                },
                {
                    TextType: 'h4',
                    text: 'Text H4',
                    as: 'h4'
                },
                {
                    TextType: 'h5',
                    text: 'Text H5',
                    as: 'h5'
                },
                {
                    TextType: 'h6',
                    text: 'Text H6',
                    as: 'h6'
                },
                {
                    TextType: 'normal',
                    text: 'Text Normal',
                    as: 'p'
                },
                {
                    TextType: 'featured',
                    text: 'Text Featured',
                    as: 'h3'
                },
                {
                    TextType: 'meta',
                    text: 'Text Meta',
                    as: 'span'
                },
                {
                    TextType: 'caption',
                    text: 'Text Caption',
                    as: 'span'
                }
            ],
            wording: `Text komponen digunakan untuk pengganti tag P, Span, H1, H2,
                H3, H4, H5, H6.`,
            template: (
                TextType,
                text,
                as
            ) => `<Text as="${as}" TextType="${TextType}">\n    ${text}\n</Text>\n`
        };
    }

    getCode() {
        const { component, template } = this.state;
        return component.map(({
            TextType,
            text,
            as
        }: DefaultDynamicObject) => template(TextType, text, as)).join('\n');
    }

    render() {
        const { wording, component } = this.state;

        return (
            <Template
                componentName="Text"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Text.</Text>
                <Coding code={this.getCode()}>
                    {component.map((item: DefaultDynamicObject) => (
                        <TextComponent {...item}>
                            {item.text}
                        </TextComponent>
                    ))}
                </Coding>
            </Template>
        );
    }
}

export default TextStorybook;
