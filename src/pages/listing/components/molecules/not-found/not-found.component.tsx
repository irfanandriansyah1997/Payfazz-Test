/**
 * Not Found Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.06
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

/**
 * Atomic Component
 */
import Text from '@/component/atoms/text/text.component';
import Button from '@/component/atoms/button/button.component';
import Icon from '@/component/atoms/icon/icon.component';

import './style/style.scss';

interface NotFoundInterface extends DefaultPropsInterface {
    show: boolean;
    onCreate: () => void;
}

class NotFound extends React.PureComponent<NotFoundInterface> {
    static propTypes = {
        show: PropTypes.bool,
        onCreate: PropTypes.func
    };

    static defaultProps = {
        show: false,
        onCreate: () => {}
    }

    render() {
        const { show, onCreate } = this.props;

        return (
            <CSSTransition
                in={show}
                appear
                timeout={600}
                classNames="fade"
            >
                <div className="ui-molecules-not-found">
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
                    <div className="ui-molecules-not-found__content">
                        <Button
                            buttonType="primary"
                            onClick={onCreate}
                        >
                            <Icon>add</Icon>
                            Create New Listing
                        </Button>
                    </div>
                </div>
            </CSSTransition>
        );
    }
}

export default NotFound;
