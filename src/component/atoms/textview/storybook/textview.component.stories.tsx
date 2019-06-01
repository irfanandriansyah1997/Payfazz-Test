/**
 * Textview Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.01
 */

/* eslint-disable */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import TextviewComponent, { TextviewProps } from '../textview.component';
import { DefaultDynamicObject, DefaultPropsInterface } from '@/interfaces/object.interface';

export interface TextStates extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    template(
        name?: string,
        type?: string,
        placeholder?: string
    ): any;
}

class TextviewStorybook extends React.Component<DefaultPropsInterface, TextStates> {
    constructor(props: DefaultDynamicObject) {
        super(props);

        this.state = {
            component: [
                {
                    name: 'username',
                    type: 'text',
                    placeholder: 'Masukan Username'
                },
                {
                    name: 'age',
                    type: 'number',
                    placeholder: 'Masukan Umur Anda'
                },
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Masukan Email Anda'
                },
                {
                    name: 'password',
                    type: 'password',
                    placeholder: 'Masukan Kata Sandi Anda'
                }
            ],
            wording: 'Textview komponen digunakan untuk membuat input form pada web',
            template: (name, type, placeholder) => '<Textview' +
            '\n    name="' + name + '"' +
            '\n    type="' + type + '"' +
            '\n    placeholder="' + placeholder + '"' +
            '\n/>'
        };
    }

    getCode() {
        const { component, template } = this.state;
        return component.map(({
            name,
            type,
            placeholder
        }: DefaultDynamicObject) => template(name, type, placeholder)).join('\n');
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
                    {component.map((item: TextviewProps) => (
                        <TextviewComponent {...item} />
                    ))}
                </Coding>
            </Template>
        );
    }
}

export default TextviewStorybook;
