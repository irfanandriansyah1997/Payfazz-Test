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
import Dialog from '../dialog.component';
import Button from '@/component/atoms/button/button.component';
import { DefaultPropsInterface, DefaultDynamicObject, DefaultPropsDialogInterface } from '@/interfaces/object.interface';

// import './style/style.scss';

const defaultLoading: Array<DefaultPropsDialogInterface> = [
    {
        type: 'popup',
        onCloseDialog: () => {},
    },
    {
        type: 'snackbar',
        onCloseDialog: () => {},
    }
];

export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    toggleShowPopup: boolean;
    toggleShowSnackbar: boolean;
    template(
        show?: boolean,
    ): any;
}

class DialogStorybook extends React.Component<DefaultPropsInterface, stateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            component: {
                default: defaultLoading
            },
            toggleShowPopup: false,
            toggleShowSnackbar: false,
            wording: `Dialog komponen digunakan untuk membuat alert maupun form pada halaman edit & tambah`,
            template: (
                show: boolean,
            ) => '<Dialog' +
            '\n    show="' + show + '"' +
            '\n    onCloseDialog={() => {}}' +
            '\n>' +
            '\n    Children\n' +
            '</Button> \n',
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    getCode(key: string): string {
        const { component, template, toggleShowPopup, toggleShowSnackbar } = this.state;
        return component[key].map((_: any, index: number) => {
            if (index === 0) {
                return template(toggleShowPopup);
            }

            return template(toggleShowSnackbar);
        }).join('\n');
    }

    toggleDialog(type: string): void {
        console.log(type);
        this.setState({ [type]: !this.state[type] });
    }

    render() {
        const { wording, toggleShowPopup, toggleShowSnackbar } = this.state;

        return (
            <Template
                componentName="Loading"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Loading.</Text>
                <Coding code={this.getCode('default')}>
                    <div className="loading-wrapper">
                        <Dialog
                            {...defaultLoading[0]}
                            show={toggleShowPopup}
                            onCloseDialog={() => this.setState({'toggleShowPopup': false})}
                        >
                            Children
                        </Dialog>
                        <Dialog
                            {...defaultLoading[1]}
                            show={toggleShowSnackbar}
                            onCloseDialog={() => this.setState({'toggleShowSnackbar': false})}
                        >
                            Children
                        </Dialog>
                        <Button
                            shadow
                            buttonType="secondary"
                            onClick={() => this.toggleDialog('toggleShowPopup')}
                        >
                            {toggleShowPopup ? 'Hide' : 'Show'} Dialog Popup
                        </Button>
                        <Button
                            shadow
                            buttonType="secondary"
                            onClick={() => this.toggleDialog('toggleShowSnackbar')}
                        >
                            {toggleShowSnackbar ? 'Hide' : 'Show'} Dialog Snackbar
                        </Button>
                    </div>
                </Coding>
            </Template>
        );
    }
}

export default DialogStorybook;
