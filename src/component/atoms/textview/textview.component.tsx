/**
 * Textview Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.31
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import './style/style.scss';
import { DefaultPropsTextviewInterface, DefaultDynamicObject } from '@/interfaces/object.interface';
import Icon from '@/component/atoms/icon/icon.component';

export interface TextviewProps extends DefaultPropsTextviewInterface {
    type?: 'text' | 'password' | 'email' | 'number';
    name: string;
    value?: string;
    placeholder?: string;
}

export interface StateTypes extends DefaultDynamicObject {
    value?: string;
    stateType?: 'text' | 'password' | 'email' | 'number';
}

class Textview extends React.PureComponent<TextviewProps, StateTypes> {
    static propTypes = {
        type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func
    }

    static defaultProps = {
        type: 'text',
        value: '',
        placeholder: '',
        onChange: () => {},
        onBlur: () => {},
        onFocus: () => {}
    }

    constructor(props: TextviewProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);

        this.state = {
            value: props.value,
            stateType: props.type
        };
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const { onChange } = this.props;
        this.setState({ value });

        if (onChange) {
            onChange(e, value);
        }
    }

    onBlur(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const { onBlur } = this.props;
        this.setState({ value });

        if (onBlur) {
            onBlur(e, value);
        }
    }

    onFocus(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const { onFocus } = this.props;
        this.setState({ value });

        if (onFocus) {
            onFocus(e, value);
        }
    }

    onChangeType() {
        let { stateType } = this.state;
        stateType = stateType === 'password' ? 'text' : 'password';

        this.setState({ stateType });
    }

    get className() {
        const { value } = this.state;

        const className: DefaultDynamicObject = {
            'ui-atomic-textview__input--available': value !== '',
            'ui-atomic-textview__input': true
        };

        return Object.keys(className)
            .filter((item: string) => className[item])
            .join(' ');
    }

    render(): React.ReactNode {
        const {
            name,
            type,
            placeholder
        } = this.props;

        const {
            value,
            stateType
        } = this.state;

        return (
            <div className="ui-atomic-textview">
                <input
                    name={name}
                    className={this.className}
                    type={stateType}
                    value={value}
                    id={name}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    autoComplete="off"
                />
                <label htmlFor={name}>{ placeholder }</label>
                <div className="ui-atomic-textview__bar" />
                { type === 'password'
                    ? (
                        <Icon onClick={this.onChangeType}>
                            { stateType === 'password' ? 'visibility' : 'visibility_off' }
                        </Icon>
                    )
                    : null
                }
            </div>
        );
    }
}

export default Textview;
