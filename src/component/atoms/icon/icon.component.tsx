/**
 * Icon Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.30
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultPropsInterface, DefaultDynamicObject } from '@/interfaces/object.interface';

import './style/style.scss';

export interface IconProps extends DefaultPropsInterface {
    color?: string;
    size?: string | number;
}

class Icon extends React.Component<IconProps> {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node, PropTypes.string
        ]).isRequired,
        color: PropTypes.string,
        size: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.oneOf(['default', 'small', 'big'])
        ])
    };

    static defaultProps = {
        size: 'default',
        color: '#3e4246'
    };

    getClassName() {
        const { size } = this.props;
        const response: DefaultDynamicObject = {
            'ui-atomic-icon': true,
            'material-icons': true
        };

        if (typeof size === 'string') {
            response[`ui-atomic-icon--${size}`] = true;
        }

        return Object.keys(response)
            .filter(item => response[item])
            .map(item => item)
            .join(' ');
    }

    getStyle = () => {
        const { color, size } = this.props;
        const response: DefaultDynamicObject = {
            color
        };

        if (typeof size === 'number') {
            response.fontSize = `${size}px`;
        }

        return response;
    }

    render(): React.ReactNode {
        const { children } = this.props;

        return (
            <i
                className={this.getClassName()}
                style={this.getStyle()}
            >
                { children }
            </i>
        );
    }
}

export default Icon;
