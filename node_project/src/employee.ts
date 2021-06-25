import { Skill } from './models/skills';

// Class definition or class creation
export class Employee {

    // Properties
    private id: number;
    private _name: string;
    private dob: Date;
    private isActive: boolean;
    private _employeeSkills: Skill[];
    private _reportees: Employee[] = [];



    /**
     * In TypeScript, there are two supported methods getter and setter to access and set the class members. 
     * The greater method control over how a member is accessed on each object.
     * Methods of the typescript accessor property:
     * getter: This method comes when you want to access any property of an object.
     * setter: This method comes when you want to change any property of an object.
     */
    public get name(): string {
        return this._name;
    }

    // Getter to _employeeSkills
    // public access specifier is optional, because by default it is public
    public get employeeSkills(): Skill[] {
        return this._employeeSkills;
    }

    // Setter to _employeeSkills
    // public access specifier is optional, because by default it is public
    public set employeeSkills(skills: Skill[]) {
        this.addMultipleSkill(skills);
    }

    get reportees(): Employee[] {
        return this._reportees;
    }

    private isExists(id: number): boolean {
        for (let index = 0; index < this.reportees.length; index++) {
            if (this.reportees[index].id === id) {
                return true;
            }
        }
        return false;
    }

    set reportees(employees: Employee[]) {

        // for each loop logic
        employees.forEach((emp: Employee) => {
            if ((emp.id !== this.id) && !this.isExists(emp.id)) {
                this._reportees.push(emp);
            }
        });

        // Alternate approach - for loop
        // for (let index = 0; index < employees.length; index++) {
        //     if(employees[index].id !== this.id) {
        //         this._reportees.push(employees[index]);
        //     }
        // }
    }


    constructor(id: number, name: string, dob: Date, isActive: boolean, skills: Skill[]) {
        this.id = id;
        this._name = name;
        this.dob = dob;
        this.isActive = isActive;
        /**
         * Aggregation -> HAS A Relation ship
         * ex: Employee HAS A skills
         * ex: Employee HAS A Bank account
         * ex: Car HAS A music player
         */
        this._employeeSkills = skills;
    }

    /**
     *
     * Association: USES-A relationship
     * ex: Employee USES an skill ob to add skillSet of employee.
     * ex: ATM USES an Account
     */
    public addSkill(skill: Skill) {
        this._employeeSkills.push(skill);
    }


    private addMultipleSkill(skills: Skill[]) {
        this._employeeSkills = [...this._employeeSkills, ...skills]
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

let skill1 = new Skill("Typescript", 3, 5, true);
let skill2 = new Skill("C#", 5, 4, true);
let skill3 = new Skill("JAVA", 3, 5, true);
let skill4 = new Skill("GOLANG", 3, 5, true);

// reportee
let e = new Employee(10001, "Avinash", new Date(), true, [skill1, skill2, skill3]);

// Manager
let e1 = new Employee(10002, "Jack", new Date(), true, [skill1]);

// calling setters
e1.reportees = [e, e1, e];

// calling getters
console.log("E reportiess: " + JSON.stringify(e.reportees));

console.log("E1 reportiess: " + JSON.stringify(e1.reportees));


// e1.addSkill(skill4);
// e1.employeeSkills = [skill2, skill3];
// console.log("Name: " + e.name);
// e.printDetails();
// e1.printDetails();
