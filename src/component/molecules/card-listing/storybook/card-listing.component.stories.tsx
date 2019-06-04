/**
 * Card Listing Documentation
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

/* eslint-disable */

import * as React from 'react';
import Template from 'storybook-template/default-template/default-template.component';
import Heading from 'storybook/atoms/heading/heading.component';
import Text from 'storybook/atoms/text/text.component';
import Coding from 'storybook/molecules/coding/coding.component';
import Card from '../card-listing.component';
import { DefaultPropsInterface, DefaultDynamicObject } from '@/interfaces/object.interface';


export interface stateTypes extends DefaultDynamicObject {
    wording: string;
    template(
        id: number,
        unitCost: number,
        price: number,
        name: string
    ): string;
}

class CardListingStorybook extends React.Component<DefaultPropsInterface, stateTypes> {
    constructor(props: DefaultPropsInterface) {
        super(props);

        this.state = {
            wording: `Card listing digunakan untuk memberikan informasi pada user tentang listing yang ada pada akun`,
            template: (
                id: number,
                unitCost: number,
                price: number,
                name: string
            ) => '<CardListing' +
            '\n    id={' + id + '}' +
            '\n    price={' + price + '}' +
            '\n    unitCost={' + unitCost + '}' +
            '\n    name="' + name + '"' +
            '\n    onClick={() => {}}' +
            '\n/>',
        };
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    getCode(): string {
        const { template } = this.state;
        return template(
            1,
            65000000,
            32500000,
            'Nissan GTR'
        );;
    }

    toggleDialog(type: string): void {
        console.log(type);
        this.setState({ [type]: !this.state[type] });
    }

    render() {
        const { wording } = this.state;

        return (
            <Template
                componentName="Card Listing"
                description={wording}
            >
                <Heading>Penggunaan Komponen</Heading>
                <Text>Contoh penggunaan komponent Card Listing.</Text>
                <Coding code={this.getCode()}>
                    <div className="loading-wrapper">
                        <Card
                            id={1}
                            unitCost={32500000}
                            price={65000000}
                            name="Nissan GTR"
                            onClick={() => {}}
                        />
                    </div>
                </Coding>
            </Template>
        );
    }
}

export default CardListingStorybook;
