/**
 * Text Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import Style from './style/style';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

export interface TextProps extends DefaultPropsInterface {
    TextType: string;
    fontWeight?: string;
    color?: string;
}

class Text extends React.Component<TextProps> {
    static propTypes = {
        TextType: PropTypes.oneOf([
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'normal',
            'featured',
            'meta',
            'caption'
        ]),
        fontWeight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold']),
        color: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
            PropTypes.string
        ]).isRequired
    };

    static defaultProps = {
        TextType: 'normal',
        fontWeight: null,
        color: null
    };

    render(): React.ReactNode {
        const { children } = this.props;

        return (
            <Style {...this.props}>
                {children}
            </Style>
        );
    }
}

export default Text;
