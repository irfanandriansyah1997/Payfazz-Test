import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface AuthHelperProps extends DefaultPropsInterface {
    isLogin: boolean;
}

export default function AuthHelper(
    WrappedComponent: any,
    isAuth: boolean = false
): any {
    const mapStateToProps = (state: any) => ({
        isLogin: state.AuthReducer.isLogin
    });

    class AuthHelperComponent extends React.Component<AuthHelperProps> {
        static propTypes = {
            isLogin: PropTypes.bool.isRequired
        }

        render() {
            const { isLogin } = this.props;

            if (isAuth && !isLogin) {
                return (<Redirect to="/" />);
            }

            if (!isAuth && isLogin) {
                return (<Redirect to="/listing" />);
            }
            return (<WrappedComponent {...this.props} />);
        }
    }

    return connect(
        mapStateToProps,
        null
    )(AuthHelperComponent);
}
