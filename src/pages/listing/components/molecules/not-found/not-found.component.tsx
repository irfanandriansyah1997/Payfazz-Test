/**
 * Not Found Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.06
 */

import * as React from 'react';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

/**
 * Atomic Component
 */
import Text from '@/component/atoms/text/text.component';
import Button from '@/component/atoms/button/button.component';
import Icon from '@/component/atoms/icon/icon.component';

import './style/style.scss';


class NotFound extends React.PureComponent<DefaultPropsInterface> {
    render() {
        return (
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
                    >
                        <Icon>add</Icon>
                        Create New Listing
                    </Button>
                </div>
            </div>
        );
    }
}

export default NotFound;
