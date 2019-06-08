/**
 * Delete Dialog Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.02
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultPropsDialogInterface } from '@/interfaces/object.interface';

/**
 * Atomic Component
 */
import Button from '@/component/atoms/button/button.component';
import Dialog from '@/component/atoms/dialog/dialog.component';
import Icon from '@/component/atoms/icon/icon.component';
import Text from '@/component/atoms/text/text.component';
import Textview from '@/component/atoms/textview/textview.component';
import FormValidation from '@/helper/validation.helper';
import { FieldRulesObject, ValidationRulesResult } from '@/helper/validation.helper';

import './style/style.scss';
import Snackbars from '@/component/atoms/snackbars/snackbars.component';
import { ListingInterface } from '@/interfaces/listing.interface';


export interface DialogListingProps {
    validate: (key: string, value: string) => ValidationRulesResult;
    onResetValidate: () => void;
    error: string;
    model: ListingInterface;
    show?: boolean;
    onCancel: () => void;
    onDelete: () => void;
    onSave: (response: ListingInterface) => void;
}

const Rules: FieldRulesObject = {
    name: {
        min: 0,
        name: 'Product Name',
        required: true,
        minValue: false
    },
    price: {
        min: 0,
        name: 'Product Price',
        required: true,
        minValue: 1000000
    },
    unitCost: {
        min: 0,
        name: 'Unit Cost',
        required: true,
        minValue: 1000000
    }
};

export interface StateTypes {
    model: ListingInterface;
    error: string;
    showedError: boolean;
    show: boolean;
}

class DialogListing extends React.PureComponent<DialogListingProps, StateTypes> {
    static propTypes = {
        validate: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired,
        model: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            unitCost: PropTypes.number.isRequired
        }).isRequired,
        show: PropTypes.bool,
        onCancel: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired
    };

    static defaultProps = {
        show: false
    };

    static getDerivedStateFromProps(props: DialogListingProps, state: StateTypes) {
        const modelProps = props.model;
        const modelState = state.model;
        const model = JSON.stringify(modelProps) === JSON.stringify(modelState)
            ? modelState
            : modelProps;

        if (props.error !== state.error) {
            return {
                error: props.error,
                show: props.show !== state.show ? props.show : state.show,
                model: props.show !== state.show ? model : state.model,
                showedError: props.error !== ''
            };
        }

        return {
            model: props.show !== state.show ? model : state.model,
            show: props.show !== state.show ? props.show : state.show
        };
    }

    constructor(props: DialogListingProps) {
        super(props);

        this.state = {
            model: {
                id: -1,
                name: '',
                unitCost: 0,
                price: 0
            },
            show: false,
            error: '',
            showedError: false
        };

        this.validate = this.validate.bind(this);
        this.onCloseForm = this.onCloseForm.bind(this);
    }

    onCloseForm() {
        this.setState({
            model: {
                id: -1,
                name: '',
                unitCost: 0,
                price: 0
            }
        });
    }

    get DialogProps() {
        const { show, onCancel } = this.props;

        const response: DefaultPropsDialogInterface = {
            show,
            type: 'snackbar',
            onCloseDialog: onCancel
        };

        return response;
    }

    validate(): any {
        const { model } = this.state;
        const {
            id,
            name,
            unitCost,
            price
        } = model;
        const { validate, onSave } = this.props;

        if (validate('name', name).code === 500) {
            return validate('name', name);
        }

        if (validate('price', `${price}`).code === 500) {
            return validate('price', `${price}`);
        }

        if (validate('unitCost', `${unitCost}`).code === 500) {
            return validate('unitCost', `${unitCost}`);
        }

        return onSave({
            id,
            name,
            unitCost,
            price
        });
    }

    render() {
        const {
            onCancel,
            onDelete,
            onResetValidate,
            error
        } = this.props;
        const {
            show,
            model,
            showedError
        } = this.state;
        const {
            id,
            name,
            price,
            unitCost
        } = model;

        return (
            <Dialog
                {...this.DialogProps}
                show={show}
            >
                <div className="ui-molecules-dialog-listing">
                    <Snackbars
                        show={showedError}
                        type="error"
                        onCloseDialog={() => this.setState({ showedError: false }, () => {
                            onResetValidate();
                        })}
                    >
                        { error }
                    </Snackbars>
                    <Icon
                        color="#8795a1"
                        onClick={() => {
                            onCancel();
                            this.onCloseForm();
                        }}
                    >
                        close
                    </Icon>
                    <Text
                        TextType="h2"
                        align="center"
                    >
                        Form Listing
                    </Text>
                    <Text
                        align="center"
                    >
                        Create or edit listing in main apps.
                    </Text>
                    <div className="ui-molecules-dialog-listing__form">
                        <Textview
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={name}
                            onChange={(_, val) => this.setState({
                                model: { ...model, name: val },
                                error: ''
                            })}
                            onBlur={(_, val) => this.setState({
                                model: { ...model, name: val },
                                error: ''
                            })}
                            onFocus={(_, val) => this.setState({
                                model: { ...model, name: val },
                                error: ''
                            })}
                        />
                        <div className="ui-molecules-dialog-listing__form__price">
                            <Textview
                                type="number"
                                name="price"
                                placeholder="Product Price"
                                value={`${price}`}
                                onChange={(_, val) => this.setState({
                                    model: { ...model, price: parseInt(val, 10) },
                                    error: ''
                                })}
                                onBlur={(_, val) => this.setState({
                                    model: { ...model, price: parseInt(val, 10) },
                                    error: ''
                                })}
                                onFocus={(_, val) => this.setState({
                                    model: { ...model, price: parseInt(val, 10) },
                                    error: ''
                                })}
                            />
                            <Textview
                                type="number"
                                name="unit_cost"
                                placeholder="Product Unit Cost"
                                value={`${unitCost}`}
                                onChange={(_, val) => this.setState({
                                    model: { ...model, unitCost: parseInt(val, 10) },
                                    error: ''
                                })}
                                onBlur={(_, val) => this.setState({
                                    model: { ...model, unitCost: parseInt(val, 10) },
                                    error: ''
                                })}
                                onFocus={(_, val) => this.setState({
                                    model: { ...model, unitCost: parseInt(val, 10) },
                                    error: ''
                                })}
                            />
                        </div>
                    </div>

                    <div className="ui-molecules-dialog-listing__action">
                        <Button
                            buttonType="primary"
                            size="small"
                            shadow
                            onClick={this.validate}
                        >
                            <Icon>
                                add
                            </Icon>
                            Save
                        </Button>
                        { id > -1
                            ? (
                                <Button
                                    buttonType="tertiary"
                                    size="small"
                                    shadow
                                    onClick={() => {
                                        onDelete();
                                        this.onCloseForm();
                                    }}
                                >
                                    <Icon>
                                        delete
                                    </Icon>
                                    Delete
                                </Button>
                            ) : null
                        }
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default FormValidation(DialogListing, Rules);
