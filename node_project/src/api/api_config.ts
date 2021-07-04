import express, { Application } from "express";
import ApiRoutes from "./routes/ApiRoutes";
import { json, urlencoded } from 'body-parser'

export class ApiConfig {
    public app: Application = express();

    constructor() {
        this.config(this.app);
        new ApiRoutes(this.app);
    }

    private config(app: Application): void {
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
        // serving static files 
        app.use(express.static('public'));
    }
}

const config: ApiConfig = new ApiConfig();

export default config.app;