/**
 * List Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.06
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import { ListingInterface } from '@/interfaces/listing.interface';

import './style/style.scss';
import CardListing from '@/component/molecules/card-listing/card-listing.component';
import ButtonFAB from '@/component/atoms/button-fab/button-fab.component';

interface ListInterface extends DefaultPropsInterface {
    show: boolean;
    data: ListingInterface[];
}

class List extends React.PureComponent<ListInterface> {
    static propTypes = {
        show: PropTypes.bool,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            unitCost: PropTypes.number
        }))
    };

    static defaultProps = {
        show: false,
        data: []
    }

    render() {
        const { show, data } = this.props;

        return (
            <CSSTransition
                in={show}
                appear
                timeout={600}
                classNames="fade"
            >
                <div className="ui-molecules-list">
                    <div className="ui-molecules-list__content">
                        {
                            data.map((item: ListingInterface) => (
                                <CardListing
                                    key={item.id}
                                    onClick={_ => {}}
                                    {...item}
                                />
                            ))
                        }
                    </div>
                    <ButtonFAB
                        buttonType="secondary"
                        shadow
                    >
                        add
                    </ButtonFAB>
                </div>
            </CSSTransition>
        );
    }
}

export default List;
