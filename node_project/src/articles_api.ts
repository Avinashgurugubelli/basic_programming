import axios, { AxiosResponse } from "axios";
import { MockApiModel } from "./models/mock-api-model";

class articlesApiDemo {

    // member
    private data: MockApiModel[] = [];

    getAllArticles() {
        axios.get<MockApiModel[]>("https://60d824306f13520017a68179.mockapi.io/api/v1/articles")
        .then((response: AxiosResponse<MockApiModel[]>) => {
            this.data = response.data;
            // console.log(response.data);
        });
    }


    public abc() {
        console.log("ABC cALLED");
    }
}

let a = new articlesApiDemo();
a.getAllArticles();
a.abc();