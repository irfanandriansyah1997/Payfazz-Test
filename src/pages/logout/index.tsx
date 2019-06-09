/**
 * Logout Page
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DefaultPropsInterface } from '@/interfaces/object.interface';
import { setLogout } from '@/action/auth.action';

interface LogoutPageProps extends DefaultPropsInterface {
    logout: () => void;
    history: any;
}

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => dispatch(setLogout())
});

export class LogoutPage extends React.PureComponent<LogoutPageProps> {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func
        })
    }

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    componentDidMount() {
        const { logout, history } = this.props;

        logout();
        history.push('/');
    }

    render(): React.ReactNode {
        return (
            <div />
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(LogoutPage);
