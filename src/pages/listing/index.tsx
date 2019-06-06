/**
 * Getting Started Page
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Header from '@/component/molecules/header/header.component';
import Loading from '@/component/atoms/loading/loading.component';
import NotFound from '@/pages/listing/components/molecules/not-found/not-found.component';
import List from '@/pages/listing/components/molecules/list/list.component';
import ProductService from '@/services/product.service';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import { ListingInterface, ResponseListingRest } from '@/interfaces/listing.interface';

import './style/style.scss';

interface ListingPageProps extends DefaultPropsInterface {
    token: string;
}

interface StateTypes {
    show: boolean;
    dialogShowed: boolean;
    product: ListingInterface[];
}

class ListingPage extends React.PureComponent<ListingPageProps, StateTypes> {
    static propTypes = {
        token: PropTypes.string.isRequired
    };

    service: ProductService;

    constructor(props: ListingPageProps) {
        super(props);

        this.state = {
            show: true,
            dialogShowed: false,
            product: []
        };
        this.service = new ProductService();
        this.onCreate = this.onCreate.bind(this);
    }

    componentDidMount() {
        const { token } = this.props;
        this.service.get(
            token,
            (res: any) => {
                const temp: ResponseListingRest = res;
                const { data } = temp;

                this.setState({
                    show: false,
                    product: data.map(item => ({
                        ...item,
                        id: parseInt(`${item.id}`, 10)
                    }))
                });
            },
            (err: any) => {
                this.setState({ show: false });
            }
        );
    }

    onCreate() {
        this.setState({ dialogShowed: true });
    }

    render(): React.ReactNode {
        const { show, product, dialogShowed } = this.state;
        return (
            <div className="ui-pages-listing">
                <Loading show={show} />
                <Header />
                <NotFound
                    show={!show && product.length === 0}
                    onCreate={this.onCreate}
                />
                <List
                    show={!show && product.length > 0}
                    data={product}
                    onCreate={this.onCreate}
                />
                { dialogShowed ? 'show' : 'hide' }
            </div>
        );
    }
}

export default ListingPage;
