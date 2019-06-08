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
import Button from '@//component/atoms/button/button.component';
import Dialog from '@/component/atoms/dialog/dialog.component';
import Icon from '@/component/atoms/icon/icon.component';
import Text from '@/component/atoms/text/text.component';

import './style/style.scss';


export interface DeleteDialogProps {
    show?: boolean;
    onCancel: () => void;
    onAccept: () => void;
}

class DeleteDialog extends React.PureComponent<DeleteDialogProps> {
    static propTypes = {
        show: PropTypes.bool,
        onCancel: PropTypes.func.isRequired,
        onAccept: PropTypes.func.isRequired
    };

    static defaultProps = {
        show: false
    };

    get DialogProps() {
        const { show, onCancel } = this.props;

        const response: DefaultPropsDialogInterface = {
            show,
            type: 'popup',
            onCloseDialog: onCancel
        };

        return response;
    }

    render() {
        const { onCancel, onAccept } = this.props;

        return (
            <Dialog {...this.DialogProps}>
                <img
                    src="https://i.ibb.co/pbThLXd/delete.png"
                    alt=""
                />
                <div className="ui-molecules-delete-dialog">
                    <Icon
                        color="#8795a1"
                        onClick={onCancel}
                    >
                        close
                    </Icon>
                    <Text align="center">
                        Deleting a listing will permanently remove it from your listing.
                    </Text>
                    <div className="ui-molecules-delete-dialog__action">
                        <Button
                            buttonType="primary"
                            shadow
                            onClick={onAccept}
                        >
                            Yes, Delete
                        </Button>
                        <Button
                            buttonType="tertiary"
                            noBorder
                            onClick={onCancel}
                        >
                            No, Keep
                        </Button>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default DeleteDialog;
