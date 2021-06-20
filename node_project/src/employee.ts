
// Class definition or class creation
export class Employee {

    // Properties
    private id: number;
    private name: string ;
    private dob: Date;
    private isActive: boolean;

    constructor(id: number, name: string, dob: Date, isActive: boolean) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.isActive = isActive;
    }
    
    // can only accessible within class 'Employee'
    private printToConsole(): void {
        console.log(this.id, this.name, this.dob, this.isActive);
    }

    // can be accessible within the class and outside as well.
    public printDetails(): void {
        this.printToConsole();
    }

    // can only accessible within class 'Employee' and its subclasses
    protected EmployeeType(): void {

    }
}


let e = new Employee(10001, "Avinash", new Date(), true);
let e1 = new Employee(10002, "Avinash", new Date(), true);

e.printDetails();
e1.printDetails();
