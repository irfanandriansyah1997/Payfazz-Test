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
import Dialog from '../delete-dialog.component';
import Button from '@/component/atoms/button/button.component';
import { DefaultPropsInterface, DefaultDynamicObject } from '@/interfaces/object.interface';


export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    toggleShow: boolean;
    template(
        show?: boolean,
    ): any;
}

class DialogStorybook extends React.Component<DefaultPropsInterface, stateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            component: {
                default: [
                    {
                        show: false,
                        onCancel: () => {},
                        onAccept: () => {}
                    }
                ]
            },
            toggleShow: false,
            wording: `Delete Dialog digunakan untuk memberikan pemberitahuan apakah anda yakin akan menghapus data ini`,
            template: (
                show: boolean,
            ) => '<DeleteDialog' +
            '\n    show="' + show + '"' +
            '\n    onAccept={() => {}}' +
            '\n    onCancel={() => {}}' +
            '\n></DeleteDialog>',
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    getCode(key: string): string {
        const { component, template, toggleShow } = this.state;
        return component[key].map((_: any) => template(toggleShow)).join('\n');
    }

    toggleDialog(type: string): void {
        console.log(type);
        this.setState({ [type]: !this.state[type] });
    }

    render() {
        const { wording, toggleShow } = this.state;

        return (
            <Template
                componentName="Delete Dialog"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Delete Dialog.</Text>
                <Coding code={this.getCode('default')}>
                    <div className="loading-wrapper">
                        <Dialog
                            show={toggleShow}
                            onCancel={() => this.setState({'toggleShow': false})}
                            onAccept={() => this.setState({'toggleShow': false})}
                        />
                        <Button
                            shadow
                            buttonType="secondary"
                            onClick={() => this.toggleDialog('toggleShow')}
                        >
                            {toggleShow ? 'Hide' : 'Show'} Dialog Popup
                        </Button>
                    </div>
                </Coding>
            </Template>
        );
    }
}

export default DialogStorybook;
