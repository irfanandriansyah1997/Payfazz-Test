/**
 * Card Listing Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListingInterface } from '@/interfaces/listing.interface';
import { abbreviateNumber } from '@/helper/number.helper.ts';

/**
 * Atomic Component
 */
import Text from '@/component/atoms/text/text.component';

import './style/style.scss';

export interface CardListingProps extends ListingInterface {
    onClick: (id: number) => any;
}

class CardListing extends React.PureComponent<CardListingProps> {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        unitCost: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired
    };

    constructor(props: CardListingProps) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick, id } = this.props;

        onClick(id);
    }

    get metaTitle() {
        const { name } = this.props;

        return `Desc. ${name} product`;
    }

    render() {
        const { name, price, unitCost } = this.props;

        return (
            <div
                className="ui-molecules-card-listing"
                onClick={this.onClick}
                onKeyDown={this.onClick}
                role="button"
                tabIndex={0}
            >
                <Text
                    as="h1"
                    TextType="h2"
                >
                    {name}
                </Text>
                <Text
                    TextType="meta"
                    color="#606f7b"
                >
                    {this.metaTitle}
                </Text>
                <div className="ui-molecules-card-listing__detail">
                    <Text>
                        <img
                            src="https://i.ibb.co/5nyL3vs/price-2.png"
                            alt="price"
                        />
                        {abbreviateNumber(price)}
                    </Text>
                    <Text>
                        <img
                            src="https://i.ibb.co/Zx2Q2Gw/unit-cost.png"
                            alt="price"
                        />
                        {abbreviateNumber(unitCost)}
                    </Text>
                </div>
            </div>
        );
    }
}

export default CardListing;
