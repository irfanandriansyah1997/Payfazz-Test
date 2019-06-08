import Axios, { AxiosResponse, AxiosError } from 'axios';
import { DefaultConfigAxios } from '@/helper/http.helper';
import { ListingInterface, ListingInputInterface } from '@/interfaces/listing.interface';

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

    post(
        token: string,
        param: ListingInputInterface,
        onSuccess: (param: ListingInterface) => void,
        onError: (message: string) => void
    ) {
        Axios({
            ...{
                ...DefaultConfigAxios,
                data: param,
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

    put(
        token: string,
        id: any,
        data: ListingInputInterface,
        onSuccess: (param: ListingInterface) => void,
        onError: (message: string) => void
    ) {
        Axios({
            ...{
                ...DefaultConfigAxios,
                method: 'put',
                data,
                headers: {
                    ...DefaultConfigAxios.headers,
                    Authorization: token
                }
            },
            url: `/products/${id}`
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

    delete(
        token: string,
        id: any,
        onSuccess: (param: ListingInterface) => void,
        onError: (message: string) => void
    ) {
        Axios({
            ...{
                ...DefaultConfigAxios,
                method: 'delete',
                headers: {
                    ...DefaultConfigAxios.headers,
                    Authorization: token
                }
            },
            url: `/products/${id}`
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
