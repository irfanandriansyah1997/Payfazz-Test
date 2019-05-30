/**
 * Button Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Style from './style/style';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

export interface ButtonProps extends DefaultPropsInterface {
    disable?: boolean;
    display?: string;
    outline?: boolean;
    position?: string;
    shadow?: boolean;
    size?: 'default' | 'small' | string;
    onClick?: () => void;
    buttonType: 'primary' | 'secondary' | 'tertiary';
}

class Button extends React.Component<ButtonProps> {
    static propTypes = {
        disable: PropTypes.bool,
        display: PropTypes.string,
        outline: PropTypes.bool,
        position: PropTypes.string,
        shadow: PropTypes.bool,
        size: PropTypes.oneOf(['default', 'small']),
        buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired,
        onClick: PropTypes.func
    };

    static defaultProps = {
        disable: false,
        display: 'flex',
        outline: false,
        position: 'relative',
        shadow: false,
        size: 'default',
        onClick: (): void => {}
    };

    render(): React.ReactNode {
        const { children, onClick } = this.props;

        return (
            <Style
                as="button"
                onClick={onClick}
                {...this.props}
            >
                { children }
            </Style>
        );
    }
}

export default Button;
