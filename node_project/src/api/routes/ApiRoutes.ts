import { Application } from "express";
import employeeRouter from "./employee_route";
import rootRouter from "./root_route";

export default class ApiRoutes {

    constructor(app: Application) {
        app.use('/', rootRouter);
        app.use('/api/v1/employees', employeeRouter);
    }
}