/**
 * Dialog Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.01
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultPropsDialogInterface, DefaultPropsInterface } from '@/interfaces/object.interface';
import { CSSTransition } from 'react-transition-group';
import DialogStyle from './style/style';

import './style/style.scss';

export interface StateTypes {
    show?: boolean;
}

export interface DialogStylePropTypes extends DefaultPropsInterface {
    type?: 'popup' | 'snackbar';
}

class Dialog extends React.PureComponent<DefaultPropsDialogInterface, StateTypes> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node, PropTypes.string
        ]).isRequired,
        type: PropTypes.oneOf(['popup', 'snackbar']),
        show: PropTypes.bool,
        onCloseDialog: PropTypes.func.isRequired
    };

    static defaultProps = {
        type: 'popup',
        show: false
    };

    static getDerivedStateFromProps(props: DefaultPropsDialogInterface, state: StateTypes) {
        if (props.show !== state.show) {
            document.body.style.overflow = props.show ? 'hidden' : 'initial';

            return {
                show: props.show
            };
        }

        return null;
    }

    constructor(props: DefaultPropsDialogInterface) {
        super(props);
        const { show } = props;

        this.state = {
            show
        };

        this.setCloseDialog = this.setCloseDialog.bind(this);
    }

    get PropsDialog() {
        const { type } = this.props;
        const response: DialogStylePropTypes = {
            type
        };

        return response;
    }

    setCloseDialog(): void {
        const { onCloseDialog } = this.props;
        this.setState({ show: false }, () => {
            onCloseDialog();
        });
    }

    render(): React.ReactNode {
        const { show } = this.state;
        const { type, children } = this.props;

        return (
            <CSSTransition
                in={show}
                appear
                timeout={600}
                classNames="fade"
            >
                <div className="ui-atomic-dialog">
                    <CSSTransition
                        in={show}
                        appear
                        timeout={300}
                        classNames={type === 'popup' ? 'fade-scale-center' : 'slide-down'}
                    >
                        <DialogStyle {...this.PropsDialog}>
                            { children }
                        </DialogStyle>
                    </CSSTransition>
                    <div
                        className="ui-atomic-dialog__backdrop"
                        onClick={this.setCloseDialog}
                        onKeyDown={this.setCloseDialog}
                        role="button"
                        tabIndex={0}
                    />
                </div>
            </CSSTransition>
        );
    }
}

export default Dialog;
