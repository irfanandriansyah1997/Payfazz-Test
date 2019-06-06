import Axios, { AxiosResponse, AxiosError } from 'axios';
import { DefaultConfigAxios } from '@/helper/http.helper';
import { AuthInterface } from '@/interfaces/auth.interface';

class AuthService {
    login(
        param: AuthInterface,
        onSuccess: (token: string) => void,
        onError: (message: string) => void
    ) {
        Axios({
            ...DefaultConfigAxios,
            data: param,
            url: '/login'
        })
            .then((response: AxiosResponse) => {
                const { token } = response.data;
                onSuccess(token);
            }).catch((error: AxiosError) => {
                if (error.response) {
                    onError(error.response.data.error.msg);
                } else {
                    onError(error.message);
                }
            });
    }

    register(
        param: AuthInterface,
        onSuccess: (account: AuthInterface) => void,
        onError: (message: string) => void
    ) {
        Axios({
            ...DefaultConfigAxios,
            data: param,
            url: '/register'
        })
            .then((response: AxiosResponse) => onSuccess(response.data))
            .catch((error: AxiosError) => {
                if (error.response) {
                    onError(error.response.data.error.msg);
                } else {
                    onError(error.message);
                }
            });
    }
}

export default AuthService;
