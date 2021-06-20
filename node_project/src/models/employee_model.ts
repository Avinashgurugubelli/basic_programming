export interface EmployeeModel {
    id: number;
    name: string;
    dob: Date;
    isActive: boolean;
}

export interface IEmployee {
    printDetails();
    getDetails();
}