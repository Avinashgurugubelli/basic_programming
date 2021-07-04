import { EmployeeController } from './../controllers/employee.controller';
import { Router } from "express";

class EmployeeRoute {

    public router: Router = Router();
    private employeeController: EmployeeController = new EmployeeController();

    constructor() {
        this.initializeRoutes();
        
    }

    private initializeRoutes(): void {

        // search employee
        this.router.route('/search/').get(this.employeeController.searchEmployee.bind(this.employeeController))
        
        // To fetch all employees
        this.router.route('/').get(this.employeeController.getAllEmployees.bind(this.employeeController));

        // To add new employee
        this.router.route('/').post(this.employeeController.addEmployee.bind(this.employeeController));

        // To fetch employee by ID
        this.router.route('/:id').get(this.employeeController.getEmployeeById.bind(this.employeeController));

        // To update given employee details
        this.router.route('/:id').put(this.employeeController.update.bind(this.employeeController));

        // To delete employee
        this.router.route('/:id').delete(this.employeeController.delete.bind(this.employeeController));

    }
}

export default new EmployeeRoute().router;
