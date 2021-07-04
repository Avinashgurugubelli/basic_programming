import { Router } from "express";

class RootRoute {

    public router: Router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {

        // To fetch all employees
        this.router.route('/').get((req, res) => {
            res.send('sample NodeJS API Running');
        });

    }
}

const rootRouter = new RootRoute().router;
export default rootRouter;