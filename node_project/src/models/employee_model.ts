import { DynamicKeyInterface } from "../generics_example";

export interface EmployeeModel {
    id: number;
    name: string;
    dob?: Date;
    isActive: boolean;
    [key: string]: any;
}

export interface IEmployee {
    printDetails();
    getDetails();
}