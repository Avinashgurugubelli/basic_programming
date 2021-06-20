import { EmployeeModel, IEmployee } from './models/employee_model';
import { Person, Address } from './person';


/**
 * Inheritance: can be achieved in type script by using extends key word.
 * 
 * Inheritance:
 * 
    Inheritance enables new classes to receive—or inherit—the properties and methods of existing classes.
    we learned that an object is a self-contained component that contains properties and methods needed to make a certain type of data useful.
    we also learned that a class is a blueprint or template to build a specific type of object and that every object is built from a class.
    Inheritance is a way to express a relationship between blueprints (classes).
    It's a way of saying: I want to build a new object that is similar to one that already exists, and instead of creating the new class from scratch,
        I want to reference the existing class and simply indicate what's different.
            - It also called as IS-A Relationship
                Ex:- Car is a type of vehicle
 */


/**
 * An interface in TypeScript contains only the declaration of the methods and properties, 
 * but not the implementation. It is the responsibility of the class that
 * implements the interface by providing the implementation for all the members of the interface.
 */
export class EmployeeWithInterfaceExample extends Person implements IEmployee {

    // get address is an abstract method inside a person class, so it need to be implemented in child class.
    getAddress() {
        throw new Error('Method not implemented.');
    }

    // properties
    private employee: EmployeeModel;

    constructor(employee: EmployeeModel, address: Address) {
        super(address);
        this.employee = employee;
       
    }

    printDetails() {
        // JSON.stringify -> will convert the JSON obj into string;
        console.log(this.employee);
    }

    // Method with return value. returns EmployeeModel
    getDetails(): EmployeeModel {
       return this.employee;
    }


    
}

// Object creation
let e = new EmployeeWithInterfaceExample({
    id: 145656,
    name: "Jack",
    dob: new Date(),
    isActive: true
}, {
    city: "VSKP",
    addressLine: "sdsdsdsd",
    doorNumber: "512",
    pinCode: 560014,
    state: "AP",
    streetName: "sdsdsdsd"
});

