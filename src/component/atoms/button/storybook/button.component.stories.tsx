/**
 * Button Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

/* eslint-disable */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Button, { ButtonProps } from '../button.component';
import { DefaultDynamicObject } from '@/interfaces/object.interface';

const defaultButton: Array<ButtonProps> = [
    {
        buttonType: 'primary',
        children: 'button primary',
        outline: false,
        shadow: false,
        size: 'default',
        disable: false
    },
    {
        buttonType: 'secondary',
        children: 'button secondary',
        outline: false,
        shadow: false,
        size: 'default',
        disable: false
    },
    {
        buttonType: 'tertiary',
        children: 'button tertiary',
        outline: false,
        shadow: false,
        size: 'default',
        disable: false
    }
];

export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    template(
        disable?: boolean,
        outline?: boolean,
        shadow?: boolean,
        size?: string,
        text?: string | React.ReactNode,
        type?:string
    ): any;
}

class ButtonStorybook extends React.Component<DefaultDynamicObject, stateTypes> {
    constructor(props: DefaultDynamicObject) {
        super(props);

        this.state = {
            component: {
                default: defaultButton,
                outline: defaultButton.map(item => ({...item, outline: true })),
                shadow: defaultButton.map(item => ({...item, shadow: true })),
                small: defaultButton.map(item => ({...item, size: 'small' })),
                disable: defaultButton.map(item => ({...item, disable: true }))
            },
            wording: `Button komponen digunakan untuk pengganti tag Button , A ,
                ataupun Link yang dapat disesuaikan background dan warna text.`,
            template: (
                disable: boolean,
                outline: boolean,
                shadow: boolean,
                size: string,
                text: string,
                type:string
            ) => '<Button' +
            '\n    disable="' + disable + '"' +
            '\n    outline="' + outline + '"' +
            '\n    shadow="' + shadow + '"' +
            '\n    size="' + size + '"' +
            '\n    type="' + type + '"' +
            '\n>' +
            '\n    ' + text + '\n' +
            '</Button> \n',
            example: [
                {
                    key: 'outline',
                    text: 'Button Outline'
                },
                {
                    key: 'shadow',
                    text: 'Button Shadow'
                },
                {
                    key: 'small',
                    text: 'Button Small Size'
                },
                {
                    key: 'disable',
                    text: 'Button Disable'
                },
            ]
        };
    }

    getCode(key: string) {
        const { component, template } = this.state;
        return component[key].map(({
            disable,
            outline,
            shadow,
            size,
            children,
            buttonType
        } : ButtonProps) => template(
            disable,
            outline,
            shadow,
            size,
            children,
            buttonType
        )).join('\n');
    }

    render() {
        const { component, wording, example } = this.state;

        return (
            <Template
                componentName="Button"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Button.</Text>
                <Coding code={this.getCode('default')}>
                    {component['default'].map((item: ButtonProps) => (
                        <Button display="inline-block" {...item}>
                            {item.children}
                        </Button>
                    ))}
                </Coding>
                <hr></hr>
                <Heading parent>Contoh Component</Heading>
                {example.map((exampleItem: DefaultDynamicObject) => (
                    <React.Fragment>
                        <Heading>{exampleItem.text}</Heading>
                        <Text>Contoh penggunaan komponent {exampleItem.text}.</Text>
                        <Coding code={this.getCode(exampleItem.key)}>
                            {component[exampleItem.key].map((item: ButtonProps) => (
                                <Button display="inline-block" {...item}>
                                    {item.children}
                                </Button>
                            ))}
                        </Coding>
                    </React.Fragment>
                ))}

            </Template>
        );
    }
}

export default ButtonStorybook;
