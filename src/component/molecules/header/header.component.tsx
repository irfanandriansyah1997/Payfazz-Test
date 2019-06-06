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

class Header extends React.PureComponent {
    render() {
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
                        type="text"
                        placeholder="Search by keyword..."
                        name="search"
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
