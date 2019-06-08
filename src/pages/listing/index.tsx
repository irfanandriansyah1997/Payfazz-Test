/**
 * Getting Started Page
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Header from '@/component/molecules/header/header.component';
import Loading from '@/component/atoms/loading/loading.component';
import DialogListing from '@/component/molecules/dialog-listing/dialog-listing.component';
import NotFound from '@/pages/listing/components/molecules/not-found/not-found.component';
import List from '@/pages/listing/components/molecules/list/list.component';
import ProductService from '@/services/product.service';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import {
    ListingInterface,
    ResponseListingRest,
    ListingInputInterface
} from '@/interfaces/listing.interface';

import './style/style.scss';
import Snackbars from '@/component/atoms/snackbars/snackbars.component';
import DeleteDialog from '@/component/molecules/delete-dialog/delete-dialog.component';

interface ListingPageProps extends DefaultPropsInterface {
    token: string;
}

interface StateTypes {
    show: boolean;
    alert: {
        show: boolean;
        type: 'error' | 'default';
        message: string;
    };
    keyword: string;
    dialogShowed: boolean;
    dialogDeleted: boolean;
    product: ListingInterface[];
    model: ListingInterface;
}

class ListingPage extends React.PureComponent<ListingPageProps, StateTypes> {
    static propTypes = {
        token: PropTypes.string.isRequired
    };

    service: ProductService;

    constructor(props: ListingPageProps) {
        super(props);

        this.state = {
            show: false,
            dialogShowed: false,
            dialogDeleted: false,
            product: [],
            alert: {
                show: false,
                type: 'error',
                message: ''
            },
            keyword: '',
            model: {
                id: -1,
                name: '',
                price: 0,
                unitCost: 0
            }
        };
        this.service = new ProductService();
        this.onCreate = this.onCreate.bind(this);
        this.onSaveData = this.onSaveData.bind(this);
        this.onLoadData = this.onLoadData.bind(this);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
        this.onChangeKeyword = this.onChangeKeyword.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    componentDidMount() {
        this.onLoadData();
    }

    onLoadData() {
        const { token } = this.props;
        this.setState({ show: true, dialogShowed: false });

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
        this.setState({
            dialogShowed: true,
            model: {
                id: -1,
                name: '',
                price: 0,
                unitCost: 0
            }
        });
    }

    onEdit(model: ListingInterface) {
        this.setState({
            dialogShowed: true,
            model
        });
    }

    onSaveData(param: ListingInterface) {
        const { token } = this.props;
        const {
            id,
            name,
            price,
            unitCost
        } = param;
        const data: ListingInputInterface = {
            name, price, unitCost
        };
        const onSuccess = (res: ListingInterface) => {
            this.setState({
                alert: {
                    show: true,
                    message: `success save data ${res.name}`,
                    type: 'default'
                }
            });
            this.onLoadData();
        };
        const onError = (message: string) => this.setState({
            alert: {
                show: true,
                message,
                type: 'error'
            }
        });

        if (id === -1) {
            this.service.post(
                token,
                data,
                onSuccess,
                onError
            );
        } else {
            this.service.put(
                token,
                id,
                data,
                onSuccess,
                onError
            );
        }
    }

    onChangeKeyword(keyword: string) {
        this.setState({ keyword });
    }

    onDeleteProduct() {
        const { token } = this.props;
        const { model } = this.state;
        const { id } = model;
        const onSuccess = (res: ListingInterface) => {
            this.setState({
                alert: {
                    show: true,
                    message: `success deleted data ${res.name}`,
                    type: 'default'
                }
            });
            this.onLoadData();
        };
        const onError = (message: string) => this.setState({
            alert: {
                show: true,
                message,
                type: 'error'
            }
        });

        this.setState({
            dialogDeleted: false
        });
        this.service.delete(
            token,
            id,
            onSuccess,
            onError
        );
    }

    get filteredProduct(): ListingInterface[] {
        const { keyword, product } = this.state;

        return product.filter((item: ListingInterface) => item.name.includes(keyword));
    }

    render(): React.ReactNode {
        const {
            alert,
            show,
            keyword,
            product,
            dialogShowed,
            dialogDeleted,
            model
        } = this.state;
        return (
            <div className="ui-pages-listing">
                <Loading show={show} />
                <DeleteDialog
                    show={dialogDeleted}
                    onAccept={this.onDeleteProduct}
                    onCancel={() => this.setState({
                        dialogDeleted: false
                    })}
                />
                <Snackbars
                    show={alert.show}
                    type={alert.type}
                    onCloseDialog={() => this.setState({ alert: { ...alert, show: false } })}
                >
                    { alert.message }
                </Snackbars>
                <Header
                    keyword={keyword}
                    onChange={this.onChangeKeyword}
                />
                <NotFound
                    show={!show && product.length === 0}
                    onCreate={this.onCreate}
                />
                <List
                    show={!show && product.length > 0}
                    data={this.filteredProduct}
                    onCreate={this.onCreate}
                    onEdit={this.onEdit}
                />
                <DialogListing
                    model={model}
                    show={dialogShowed}
                    onSave={this.onSaveData}
                    onDelete={() => this.setState({
                        dialogShowed: false,
                        dialogDeleted: true
                    })}
                    onCancel={() => this.setState({ dialogShowed: false })}
                />
            </div>
        );
    }
}

export default ListingPage;
