/**
 * Login Page
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';

import './style/style.scss';
import Text from '@/component/atoms/text/text.component';
import Icon from '@/component/atoms/icon/icon.component';
import Button from '@/component/atoms/button/button.component';

import { Link } from 'react-router-dom';
import Textview from '@/component/atoms/textview/textview.component';
import Snackbars from '@/component/atoms/snackbars/snackbars.component';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import FormValidation from '@/helper/validation.helper';
import { FieldRulesObject, ValidationRulesResult } from '@/helper/validation.helper';

interface LoginPageProps extends DefaultPropsInterface {
    validate: (key: string, value: string) => ValidationRulesResult;
    onResetValidate: () => void;
    error: string;
}

const Rules: FieldRulesObject = {
    email: {
        min: 0,
        name: 'Email',
        required: true
    },
    password: {
        min: 8,
        name: 'Password',
        required: true
    }
};

export interface StateTypes {
    email: string;
    password: string;
    error: string;
    showedError: boolean;
}

export class SignupPage extends React.PureComponent<LoginPageProps, StateTypes> {
    static propTypes = {
        validate: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired,
        onResetValidate: PropTypes.func.isRequired
    }

    static getDerivedStateFromProps(props: LoginPageProps, state: StateTypes) {
        if (props.error !== state.error) {
            return {
                error: props.error,
                showedError: props.error !== ''
            };
        }

        return null;
    }

    constructor(props: LoginPageProps) {
        super(props);

        this.state = {
            email: '',
            password: '',
            showedError: false,
            error: ''
        };
        this.validate = this.validate.bind(this);
    }


    componentDidMount() {
        document.title = 'Signup Page';
    }

    validate(): any {
        const { email, password } = this.state;
        const { validate } = this.props;

        if (validate('email', email).code === 500) {
            return validate('email', email);
        }

        if (validate('password', password).code === 500) {
            return validate('password', password);
        }

        return true;
    }

    render(): React.ReactNode {
        const { email, password, showedError } = this.state;
        const { error, onResetValidate } = this.props;

        return (
            <div className="ui-pages-signup">
                <Snackbars
                    show={showedError}
                    onCloseDialog={() => this.setState({ showedError: false }, () => {
                        onResetValidate();
                    })}
                >
                    { error }
                </Snackbars>
                <div className="ui-pages-signup__background">
                    <img
                        src="https://i.ibb.co/zrv7fRq/signup.png"
                        alt="signup"
                    />
                </div>
                <Link
                    className="ui-pages-signup__back"
                    to="/"
                >
                    <Icon>keyboard_backspace</Icon>
                </Link>
                <Text
                    TextType="h2"
                    align="center"
                    as="h1"
                >
                    Signup
                    <span>Page</span>
                </Text>
                <div className="ui-pages-signup__form">
                    <Text color="#606f7b">Register Your Account</Text>
                    <Textview
                        type="text"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(_, val) => this.setState({
                            email: val,
                            error: ''
                        })}
                        onBlur={(_, val) => this.setState({
                            email: val,
                            error: ''
                        })}
                        onFocus={(_, val) => this.setState({
                            email: val,
                            error: ''
                        })}
                    />
                    <Textview
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={(_, val) => this.setState({
                            password: val,
                            error: ''
                        })}
                        onBlur={(_, val) => this.setState({
                            password: val,
                            error: ''
                        })}
                        onFocus={(_, val) => this.setState({
                            password: val,
                            error: ''
                        })}
                    />
                </div>
                <div className="ui-pages-signup__action">
                    <Button
                        buttonType="primary"
                        onClick={this.validate}
                    >
                        Signup
                    </Button>
                    <Link
                        className="ui-pages-signup__options-link"
                        to="/login"
                    >
                        If you have a account,
                        <Text color="#606f7b">Signin</Text>
                    </Link>
                </div>
            </div>
        );
    }
}

export default FormValidation(SignupPage, Rules);
