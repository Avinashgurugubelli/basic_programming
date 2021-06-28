import { AxiosResponse } from 'axios';
import { HttpClient } from './util/http-client';
import { MockApiModel } from './models/mock-api-model';

export class ApiConsumeExample {

    public async getAllArticles() {
        let apiResponse: Promise<AxiosResponse<MockApiModel[]>> = HttpClient.get<MockApiModel[]>("https://60d824306f13520017a68179.mockapi.io/api/v1/articles");
        console.log((await apiResponse).data);
    }

    public async addArticle(data: MockApiModel) {
        await HttpClient.post("https://60d824306f13520017a68179.mockapi.io/api/v1/articles", data);
        // then print all details
        await this.getAllArticles();
    }

    public async getArticle(id: number) {
        let apiResponse: Promise<AxiosResponse<MockApiModel[]>> = HttpClient.get<MockApiModel[]>("https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id);
        console.log((await apiResponse).data);
    }

    public async deleteArticle(id: number) {
        let apiResponse: Promise<AxiosResponse<MockApiModel[]>> = HttpClient.delete<MockApiModel[]>("https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id);
        console.log((await apiResponse).data);
    }

    public async updateArticle(id: number, data: MockApiModel) {
        let apiResponse: Promise<AxiosResponse<MockApiModel>> = HttpClient.put<MockApiModel>("https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id, data);
        console.log((await apiResponse).data);
    }
}

const api = new ApiConsumeExample();
// api.addArticle({
//     createdAt: '2021-06-26T17:39:43.608Z',
//     name: 'Avinash',
//     avatar: 'https://cdn.fakercloud.com/avatars/yecidsm_128.jpg',
//     id: '51'
// });
api.updateArticle(51, {
    createdAt: '2021-06-26T17:39:43.608Z',
    name: 'Avinash Gurugubelli',
    avatar: 'https://cdn.fakercloud.com/avatars/yecidsm_128.jpg',
    id: '51'
})