import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpClient {

    public static get<T>(url: string): Promise<AxiosResponse<T>> {
        return axios.get<T>(url);
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