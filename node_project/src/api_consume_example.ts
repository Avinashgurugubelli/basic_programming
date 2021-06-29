import { AxiosResponse } from 'axios';
import { HttpClient } from './util/http-client';
import { MockApiModel } from './models/mock-api-model';

export class ApiConsumeExample {

    /**
     * Get all articles -> it will fetch all the records from the backend. -> returns multiple records
     */
    public async getAllArticles() {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles";
        let apiResponse: Promise<AxiosResponse<MockApiModel[]>> = HttpClient.get<MockApiModel[]>(url);
        console.log((await apiResponse).data);
    }

    /**
     * it will fire a post request to API -> to create a entry
     * @param data holds the data to post to backend
     */
    public async addArticle(data: MockApiModel) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles";
        await HttpClient.post(url, data);
        // then print all details
        await this.getAllArticles();
    }

    /**
     * get the article by ID -> returns single record.
     * @param id holds the id of an entity to fetch
     */
    public async getArticle(id: number) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id;
        let apiResponse: Promise<AxiosResponse<MockApiModel>> = HttpClient.get<MockApiModel>(url);
        console.log((await apiResponse).data);
    }

    /**
     * fires a delete request - to delete entity
     * @param id holds the ID of an entity to delete from backend
     */
    public async deleteArticle(id: number) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id;
        let apiResponse: Promise<AxiosResponse<MockApiModel>> = HttpClient.delete<MockApiModel>(url);
        console.log((await apiResponse).data);
    }

    /**
     * fires PUT req -> and updates the details with the ID.
     * @param id holds the id of the entity to update in the backend.
     * @param data holds the data to update.
     */
    public async updateArticle(id: number, data: MockApiModel) {
        const url: string = "https://60d824306f13520017a68179.mockapi.io/api/v1/articles/" + id;
        let apiResponse: Promise<AxiosResponse<MockApiModel>> = HttpClient.put<MockApiModel>(url, data);
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
});