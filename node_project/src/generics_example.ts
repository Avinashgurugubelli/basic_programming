import { Skill } from './models/skills';


/**
 * GENERICS:
 * 
 * Why we need Generics?
 * ---------------------
 * A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. 
 * Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.
 * 
 * Advantage of Generics
 * ----------------------
 * There are mainly three advantages of generics. They are as follows:
 * Type-safety: We can hold only a single type of objects in generics. It doesn't allow to store other objects.
 * Typecasting is not required: There is no need to typecast the object.
 * Compile-Time Checking: It is checked at compile time so the problem will not occur at runtime.
 * 
 * for more info refer: https://www.typescriptlang.org/docs/handbook/2/generics.html
 */

// Generic interface
interface dynamicKeyInterface<T> {
    [key: string]: T;
}

interface IPerson {
    id: string;
    name: string;
}

interface IStudent extends IPerson {
    section: string;
    marks?: dynamicKeyInterface<number>;
}


interface IFaculty extends IPerson {
    /**
     * Here salary is optional, in typescript optional parameter will be marked by ? symbol
     */
    salary?: number;
    experience: number;
    skills: Skill[]
}


class Person<T> {
    public details: T;

    printDetails() {
        console.log(JSON.stringify(this.details));
    }
}

// Inheriting the generic class Person
class Faculty extends Person<IFaculty> {

    constructor(details: IFaculty) {
        super();
        this.details = details;
    }

    addBonus(bonus: number): void {
        this.details.salary = this.details.salary + bonus;
    }
}

// Inheriting the generic class Person
class Student extends Person<IStudent> {

    constructor(details: IStudent) {
        super();
        this.details = details;
    }

    addMarks(marks: dynamicKeyInterface<number>) {
        this.details.marks = {...this.details.marks, ...marks};
    }
}

let student: IStudent = {
    id: "411458",
    name: "Avinash",
    section: "9-A"
}

let skill1 = new Skill("Typescript", 3, 5, true);

let faculty: IFaculty = {
    id: "4566",
    name: "Tarun",
    salary: 5660,
    experience: 5,
    skills: [skill1]
}

let s = new Student(student);
s.printDetails();
s.addMarks({
    Maths: 50,
    english: 90,
    Science: 100
});


let f = new Faculty(faculty);
f.printDetails();

let ps = new Person<IStudent>();
ps.details = student;

let pf = new Person<IFaculty>();
pf.details = faculty;
