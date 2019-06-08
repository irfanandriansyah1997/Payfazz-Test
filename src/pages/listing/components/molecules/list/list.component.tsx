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
import Text from '@/component/atoms/text/text.component';

interface ListInterface extends DefaultPropsInterface {
    show: boolean;
    data: ListingInterface[];
    onCreate: () => void;
    onEdit: (data: ListingInterface) => void;
}

class List extends React.PureComponent<ListInterface> {
    static propTypes = {
        show: PropTypes.bool,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            unitCost: PropTypes.number
        })),
        onCreate: PropTypes.func,
        onEdit: PropTypes.func.isRequired
    };

    static defaultProps = {
        show: false,
        data: [],
        onCreate: () => {}
    }

    render() {
        const {
            show,
            data,
            onCreate,
            onEdit
        } = this.props;

        return (
            <CSSTransition
                in={show}
                appear
                timeout={600}
                classNames="fade"
            >
                <div className="ui-molecules-list">
                    {
                        data.length > 0
                            ? (
                                <div className="ui-molecules-list__content">
                                    {
                                        data.map((item: ListingInterface) => (
                                            <CardListing
                                                key={item.id}
                                                {...item}
                                                onClick={onEdit}
                                            />
                                        ))
                                    }
                                </div>
                            )
                            : (
                                <div
                                    className="ui-molecules-not-found showed"
                                >
                                    <div className="ui-molecules-not-found__images">
                                        <img
                                            src="https://i.ibb.co/tcnt8qB/not-found.png"
                                            alt="Not Found"
                                        />
                                        <Text
                                            TextType="h1"
                                            align="center"
                                            as="h1"
                                        >
                                            Not Found
                                        </Text>
                                        <Text
                                            align="center"
                                            color="#636d7a"
                                        >
                                            Oops your listing is not found
                                        </Text>
                                    </div>
                                </div>
                            )

                    }
                    <ButtonFAB
                        buttonType="secondary"
                        shadow
                        onClick={onCreate}
                    >
                        add
                    </ButtonFAB>
                </div>
            </CSSTransition>
        );
    }
}

export default List;
