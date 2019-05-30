/**
 * Loading Component Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

/* eslint-disable */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Loading, { LoadingProps } from '../loading.component';
import Button from '@/component/atoms/button/button.component';
import { DefaultPropsInterface, DefaultDynamicObject } from '@/interfaces/object.interface';

import './style/style.scss';

const defaultLoading: Array<LoadingProps> = [
    {
        show: false
    }
];

export interface stateTypes extends DefaultDynamicObject {
    component: DefaultDynamicObject;
    wording: string;
    toggleShow: boolean;
    template(
        show?: boolean,
    ): any;
}

class LoadingStorybook extends React.Component<DefaultPropsInterface, stateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            component: {
                default: defaultLoading
            },
            toggleShow: false,
            wording: `Loading komponen digunakan untuk memanggil loading yang bertujuan untuk menaikan UX user`,
            template: (show) => `<Loading show=${show} />`
        };
        this.toggleLoading = this.toggleLoading.bind(this);
    }

    getCode(key: string): string {
        const { component, template, toggleShow } = this.state;
        return component[key].map((_: any) => template(toggleShow)).join('\n');
    }

    toggleLoading(): void {
        this.setState({ toggleShow: !this.state.toggleShow });
    }

    render() {
        const { wording, toggleShow } = this.state;

        return (
            <Template
                componentName="Loading"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Loading.</Text>
                <Coding code={this.getCode('default')}>
                    <div className="loading-wrapper">
                        <Loading show={toggleShow} />
                        <Button
                            shadow
                            buttonType="secondary"
                            onClick={this.toggleLoading}
                        >
                            {toggleShow ? 'Hide' : 'Show'} Loading
                        </Button>
                    </div>
                </Coding>
            </Template>
        );
    }
}

export default LoadingStorybook;
