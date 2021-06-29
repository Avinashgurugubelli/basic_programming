import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpClient {

    public static get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return axios.get<T>(url, config);
    }

    public static post<T, R = T>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return axios.post<R>(url, data, config);
    }

    public static put<T, R = T>(url: string, data: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return axios.put<R>(url, data, config);
    }

    public static delete<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
        return axios.delete<R>(url, config);
    }
}

// class customHttpClient {
//     public static get<T>(url: string, config: CustomHttpParams): Promise<AxiosResponse<T>> {
//         const convertedConfig: AxiosRequestConfig = {
//             auth: {
//                 username: config.u_userName,
//                 password: config.p_password
//             },
//             headers: config.h_headers
//         };
//         return axios.get<T>(url, convertedConfig);
//     }
// }

// interface CustomHttpParams {
//     u_userName: string;
//     p_password: string;
//     h_headers: {
//         [key: string]: string;
//     }
// }
