/* eslint-disable */

/**
 * Header Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.06
 */

import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * Atomic Component
 */
import Icon from '@/component/atoms/icon/icon.component';

import './style/style.scss';
import { DefaultPropsInterface } from '@/interfaces/object.interface';

interface HeaderInterface extends DefaultPropsInterface {
    keyword: string;
    onChange?: (value: string) => void;
}

interface StateTypes {
    keyword: string;
}

class Header extends React.PureComponent<HeaderInterface, StateTypes> {
    constructor(props: HeaderInterface) {
        super(props);

        this.state = {
            keyword: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    static getDerivedStateFromProps(props: HeaderInterface, state: StateTypes) {
        if (props.keyword !== state.keyword) {
            return {
                keyword: props.keyword
            };
        }

        return null;
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const { onChange } = this.props;
        this.setState({ keyword: value });

        if (onChange) {
            onChange(value);
        }
    }

    onBlur(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const { onChange } = this.props;
        this.setState({ keyword: value });

        if (onChange) {
            onChange(value);
        }
    }

    onFocus(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const { onChange } = this.props;
        this.setState({ keyword: value });

        if (onChange) {
            onChange(value);
        }
    }

    render() {
        const { keyword } = this.state;
        const id = 'search-keyword';

        return (
            <div className="ui-molecules-header">
                <div className="ui-molecules-header__logo">
                    L
                </div>
                <div className="ui-molecules-header__form">
                    <label htmlFor={id}>
                        <Icon>search</Icon>
                    </label>
                    <input
                        id={id}
                        value={keyword}
                        type="text"
                        placeholder="Search by keyword..."
                        name="search"
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                    />
                </div>
                <Link to="/logout">
                    <Icon>exit_to_app</Icon>
                </Link>
            </div>
        );
    }
}

export default Header;
