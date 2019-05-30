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
import Button from '../button-fab.component';
import { ButtonProps } from '@/component/atoms/button/button.component.tsx';
import { DefaultDynamicObject } from '@/interfaces/object.interface';

const defaultButton: Array<ButtonProps> = [
    {
        buttonType: 'primary',
        children: 'edit',
        outline: false,
        shadow: true,
        size: 'default',
        disable: false
    },
    {
        buttonType: 'secondary',
        children: 'account_circle',
        outline: false,
        shadow: true,
        size: 'default',
        disable: false
    },
    {
        buttonType: 'tertiary',
        children: 'g_translate',
        outline: false,
        shadow: true,
        size: 'default',
        disable: false
    }
];

export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    template(
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
                small: defaultButton.map(item => ({...item, size: 'small' })),
                large: defaultButton.map(item => ({...item, size: 'large' }))
            },
            wording: `Button komponen digunakan untuk pengganti tag Button , A ,
                ataupun Link yang dapat disesuaikan background dan warna text.`,
            template: (
                size: string,
                text: string,
                type:string
            ) => '<ButtonFAB' +
            '\n    size="' + size + '"' +
            '\n    type="' + type + '"' +
            '\n>' +
            '\n    ' + text + '\n' +
            '</ButtonFAB> \n',
            example: [
                {
                    key: 'small',
                    text: 'Button Small Size'
                },
                {
                    key: 'large',
                    text: 'Button Large Size'
                }
            ]
        };
    }

    getCode(key: string) {
        const { component, template } = this.state;
        return component[key].map(({
            size,
            children,
            buttonType
        } : ButtonProps) => template(
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
                        <Button display="inline-flex" {...item}>
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
                                <Button display="inline-flex" {...item}>
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
