/**
 * Dialog Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

/* eslint-disable */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Snackbar, { AlertDialog } from '../snackbars.component';
import Button from '@/component/atoms/button/button.component';
import { DefaultDynamicObject, DefaultPropsInterface } from '@/interfaces/object.interface';

const defaultLoading: Array<AlertDialog> = [
    {
        type: 'default',
        onCloseDialog: () => {},
    },
    {
        type: 'error',
        onCloseDialog: () => {},
    }
];

export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    toggleSnackbarError: boolean;
    toggleSnackbarDefault: boolean;
    template(
        show?: boolean,
        type?: string
    ): any;
}

class DialogStorybook extends React.Component<DefaultPropsInterface, stateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            component: {
                default: defaultLoading
            },
            toggleSnackbarError: false,
            toggleSnackbarDefault: false,
            wording: `Dialog komponen digunakan untuk membuat alert maupun form pada halaman edit & tambah`,
            template: (
                show: boolean,
                type: string,
            ) => '<Snackbar' +
            '\n    type="' + type + '"' +
            '\n    show="' + show + '"' +
            '\n    onCloseDialog={() => {}}' +
            '\n>' +
            '\n    Children\n' +
            '</Snackbar> \n',
        };
        this.toggleSnackbar = this.toggleSnackbar.bind(this);
    }

    getCode(key: string): string {
        const { component, template, toggleSnackbarError, toggleSnackbarDefault } = this.state;
        return component[key].map((_: any, index: number) => {
            if (index === 0) {
                return template(toggleSnackbarError, 'error');
            }

            return template(toggleSnackbarDefault, 'default');
        }).join('\n');
    }

    toggleSnackbar(type: string): void {
        if (type === 'toggleSnackbarError') {
            this.setState({ 'toggleSnackbarDefault': false });
        } else if (type === 'toggleSnackbarDefault') {
            this.setState({ 'toggleSnackbarError': false });
        }

        this.setState({ [type]: !this.state[type] });
    }

    render() {
        const { wording, toggleSnackbarError, toggleSnackbarDefault } = this.state;

        return (
            <Template
                componentName="Snackbars"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Loading.</Text>
                <Coding code={this.getCode('default')}>
                    <div className="loading-wrapper">
                        <Snackbar
                            {...defaultLoading[0]}
                            show={toggleSnackbarError}
                            onCloseDialog={() => this.setState({'toggleSnackbarError': false})}
                        >
                            Snackbar Default Example
                        </Snackbar>
                        <Snackbar
                            {...defaultLoading[1]}
                            show={toggleSnackbarDefault}
                            onCloseDialog={() => this.setState({'toggleSnackbarDefault': false})}
                        >
                            Snackbar Error Example
                        </Snackbar>
                        <Button
                            shadow
                            buttonType="primary"
                            onClick={() => this.toggleSnackbar('toggleSnackbarError')}
                        >
                            {toggleSnackbarError ? 'Hide' : 'Show'} Snackbar Default
                        </Button>
                        <Button
                            shadow
                            buttonType="secondary"
                            onClick={() => this.toggleSnackbar('toggleSnackbarDefault')}
                        >
                            {toggleSnackbarDefault ? 'Hide' : 'Show'} Snackbar Error
                        </Button>
                    </div>
                </Coding>
            </Template>
        );
    }
}

export default DialogStorybook;
