import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    InternalAxiosRequestConfig,
} from 'axios';
import Config from 'react-native-config';

const apiClient: AxiosInstance = axios.create({
    baseURL: Config.BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'applicatoin/json'
    },
});

apiClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = await AsyncStorage.getItem('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers['X-Platform'] = 'Mobile';

        console.log('📤 REQUEST DATA:', {
            method: config.method?.toUpperCase(),
            url: config.url,
            baseURL: config.baseURL,
            fullURL: `${config.baseURL}${config.url}`,
            headers: config.headers,
            data: config.data,
            params: config.params,
            timeout: config.timeout,
        });

        return config;
    },
);

export const apiGet = async (endpont: string, config?: AxiosRequestConfig) => {
    try {
        const response = await apiClient.get(endpont, config);
        return response;
    } catch (error) {
        throw error;
    }
};

export const apiPost = async (
    endpont: string,
    body: any,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await apiClient.post(endpont, body, config);
        return response;
    } catch (error) {
        throw error;
    }
};

export const apiPut = async (
    endpont: string,
    body: any,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await apiClient.put(endpont, body, config);
        return response;
    } catch (error) {
        throw error;
    }
};

export const apiPatch = async (
    endpont: string,
    body: any,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await apiClient.patch(endpont, body, config);
        return response;
    } catch (error) {
        throw error;
    }
};
