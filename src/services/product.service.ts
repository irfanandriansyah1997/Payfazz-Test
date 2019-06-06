import Axios, { AxiosResponse, AxiosError } from 'axios';
import { DefaultConfigAxios } from '@/helper/http.helper';

class ProductService {
    get(
        token: string,
        onSuccess: (token: string) => void,
        onError: (message: string) => void
    ) {
        Axios({
            ...{
                ...DefaultConfigAxios,
                method: 'get',
                headers: {
                    ...DefaultConfigAxios.headers,
                    Authorization: token
                }
            },
            url: '/products'
        })
            .then((response: AxiosResponse) => {
                onSuccess(response.data);
            }).catch((error: AxiosError) => {
                if (error.response) {
                    onError(error.response.data.error.msg);
                } else {
                    onError(error.message);
                }
            });
    }
}

export default ProductService;
