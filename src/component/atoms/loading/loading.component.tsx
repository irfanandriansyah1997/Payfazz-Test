/**
 * Loading Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import { CSSTransition } from 'react-transition-group';

import './style/style.scss';

export interface LoadingProps extends DefaultPropsInterface {
    show?: boolean;
}

class Loading extends React.Component<LoadingProps> {
    static propTypes = {
        show: PropTypes.bool
    };

    static defaultProps = {
        show: false
    };

    render(): React.ReactNode {
        const { show } = this.props;

        return (
            <CSSTransition
                in={show}
                appear
                timeout={300}
                classNames="slide-up"
            >
                <div className="ui-atomic-loading">
                    <div className="ui-atomic-loading__container">
                        <svg
                            className="ui-atomic-loading__circle"
                            x="0px"
                            y="0px"
                            viewBox="0 0 150 150"
                        >
                            <circle
                                className="ui-atomic-loading__circle__inner"
                                cx="75"
                                cy="75"
                                r="60"
                            />
                        </svg>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default Loading;
