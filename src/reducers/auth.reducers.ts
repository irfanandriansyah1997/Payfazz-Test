import { AuthInterface } from '@/interfaces/auth.interface';
import { ReducerInterface } from '@/interfaces/reducers.interface';

export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

const initial: AuthInterface = {
    email: '',
    password: '',
    token: '',
    isLogin: false
};

const AuthReducers = (
    state: AuthInterface = initial,
    action: ReducerInterface
): AuthInterface => {
    switch (action.type) {
    case SET_LOGIN:
        return {
            ...state,
            ...action.payload,
            isLogin: true
        };
    case SET_LOGOUT:
        return {
            ...initial
        };
    default:
        return state;
    }
};

export default AuthReducers;
