import { EmployeeBackendModel } from "../../models/employee_backend_model";

import { MySqlDbContext } from '../db/mysql_db_context';

export class EmployeeRepo {

    private dbContext: MySqlDbContext;

    constructor() {
        this.dbContext = new MySqlDbContext();
    }

    public async getAllEmployee(): Promise<EmployeeBackendModel[]> {
        return this.dbContext.fireQuery<EmployeeBackendModel[]>("SELECT * FROM employees");
    }

    public async getEmployeeById(id: number): Promise<EmployeeBackendModel> {
        return this.dbContext.fireQuery<EmployeeBackendModel>("SELECT * FROM employees where id=" + id);
    }

    public async updateEmployeeById(id: number, payload: Partial<EmployeeBackendModel>): Promise<EmployeeBackendModel> {
        return this.dbContext.fireQuery<EmployeeBackendModel>("UPDATE employees SET name='" + payload.name + "',email_id='" + payload.email_id + "',phone_number='" + payload.phone_number + "' WHERE id=" + id);
    }

    public async deleteEmployeeById(id: number): Promise<EmployeeBackendModel> {
        return this.dbContext.fireQuery<EmployeeBackendModel>("DELETE FROM employees WHERE id =" + id);
    }

    public async addEmployee(payload: EmployeeBackendModel): Promise<EmployeeBackendModel> {
        return this.dbContext.fireQuery<EmployeeBackendModel>("INSERT INTO employees (id, name, email_id, phone_number) VALUES (" + payload.id + ",'" + payload.name + "','" + payload.email_id + "','" + payload.phone_number + "')");
    }

    public async searchEmployee(name: string, email: string): Promise<EmployeeBackendModel[]> {
        return this.dbContext.fireQuery<EmployeeBackendModel[]>("SELECT * FROM employees WHERE name='" + name + "' or email_id='" + email + "'");
    }
}