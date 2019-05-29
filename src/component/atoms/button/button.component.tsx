/**
 * Button Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Style from './style/style';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

export interface propTypes extends DefaultPropsInterface {
    disable?: boolean;
    display?: string;
    outline?: boolean;
    position?: string;
    shadow?: boolean;
    size?: 'default' | 'small' | undefined;
    buttonType: 'primary' | 'secondary' | 'tertiary';
}

class Button extends React.Component<propTypes> {
    static propTypes = {
        disable: PropTypes.bool,
        display: PropTypes.string,
        outline: PropTypes.bool,
        position: PropTypes.string,
        shadow: PropTypes.bool,
        size: PropTypes.oneOf(['default', 'small']),
        buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired
    };

    static defaultProps = {
        disable: false,
        display: 'flex',
        outline: false,
        position: 'relative',
        shadow: false,
        size: 'default'
    };

    render() {
        return (
            <Style as="button" {...this.props}>
                Hello
            </Style>
        );
    }
}

export default Button;
