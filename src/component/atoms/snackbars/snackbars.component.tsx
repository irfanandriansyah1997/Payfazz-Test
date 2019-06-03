/**
 * Snackbar Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DefaultPropsAlertInterface, DefaultPropsInterface } from '@/interfaces/object.interface';
import Icon from '@/component/atoms/icon/icon.component';
import Text from '@/component/atoms/text/text.component';
import SnackbarStyle from './style/style';

export interface StateTypes {
    show?: boolean;
}

export interface AlertDialog extends DefaultPropsAlertInterface {
    type?: 'default' | 'error';
}

export interface AlertDialogStylePropTypes extends DefaultPropsInterface {
    type?: 'default' | 'error';
}

class Snackbars extends React.PureComponent<AlertDialog, StateTypes> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node, PropTypes.string
        ]).isRequired,
        show: PropTypes.bool,
        type: PropTypes.oneOf(['default', 'error']),
        onCloseDialog: PropTypes.func
    };

    static defaultProps = {
        show: false,
        type: 'default',
        onCloseDialog: () => {}
    }

    static getDerivedStateFromProps(props: DefaultPropsAlertInterface, state: StateTypes) {
        if (props.show !== state.show) {
            return {
                show: props.show
            };
        }

        return null;
    }

    constructor(props: DefaultPropsAlertInterface) {
        super(props);
        const { show } = props;

        this.state = {
            show
        };
        this.onCloseDialog = this.onCloseDialog.bind(this);
    }

    onCloseDialog(): void {
        const { onCloseDialog } = this.props;

        this.setState({ show: false }, () => {
            onCloseDialog();
        });
    }

    get PropsSnackbars(): AlertDialogStylePropTypes {
        const { type } = this.props;
        const response: AlertDialogStylePropTypes = {
            type
        };

        return response;
    }

    render() {
        const { children } = this.props;
        const { show } = this.state;

        return (
            <CSSTransition
                in={show}
                appear
                timeout={600}
                classNames="slide-down"
            >
                <SnackbarStyle {...this.PropsSnackbars}>
                    <Text color="#fff">{children}</Text>
                    <Icon onClick={this.onCloseDialog}>close</Icon>
                </SnackbarStyle>
            </CSSTransition>
        );
    }
}

export default Snackbars;
