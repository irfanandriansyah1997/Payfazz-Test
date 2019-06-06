import { SET_LOGIN, SET_LOGOUT } from '@/reducers/auth.reducers';
import { AuthInterface } from '@/interfaces/auth.interface';

export const setLogin = (option: AuthInterface) => ({
    type: SET_LOGIN,
    payload: {
        ...option
    }
});

export const setLogout = () => ({
    type: SET_LOGOUT
});
