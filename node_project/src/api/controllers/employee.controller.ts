import { EmployeeBackendModel } from './../../models/employee_backend_model';
import { Request, Response } from 'express';
import { EmployeeRepo } from '../repositories/employee.repo';

export class EmployeeController {

    private employeeRepo: EmployeeRepo;

    constructor() {
        this.employeeRepo = new EmployeeRepo();
    }

    public async searchEmployee(req: Request, res: Response) {
        try {
            console.log('searchEmployee called');
            console.log(req);
            const name: string = req.query.name.toString();
            const email: string = req.query.email.toString();
            const data: EmployeeBackendModel[] = await this.employeeRepo.searchEmployee(name, email);
            res.json(data);
        }
        catch (error) {
            res.send(error);
        }

    }

    public async getAllEmployees(req: Request, res: Response) {
        try {
            const data: EmployeeBackendModel[] = await this.employeeRepo.getAllEmployee();
            res.json(data);
        }
        catch (error) {
            res.send(error);
        }

    }

    public async getEmployeeById(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const data: EmployeeBackendModel = await this.employeeRepo.getEmployeeById(id);
            res.json(data);
        }
        catch (error) {
            res.send(error);
        }
    }

    public async addEmployee(req: Request, res: Response) {
        try {
            const data: EmployeeBackendModel = await this.employeeRepo.addEmployee(req.body);
            res.json(data);
        }
        catch (error) {
            res.send(error);
        }
    }

    public async update(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        const dataToUpdate: Partial<EmployeeBackendModel> = req.body;
        try {
            const data: EmployeeBackendModel = await this.employeeRepo.updateEmployeeById(id, dataToUpdate);
            res.json(data);
        }
        catch (error) {
            res.send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        try {
            const data: EmployeeBackendModel = await this.employeeRepo.deleteEmployeeById(id);
            res.json(data);
        }
        catch (error) {
            res.send(error);
        }
    }
}