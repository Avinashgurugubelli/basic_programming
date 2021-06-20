
/**
 * Define an abstract class in Typescript using the abstract keyword. 
 * Abstract classes are mainly for inheritance where other classes may derive from them.
 * We cannot create an instance of an abstract class.
 * An abstract class typically includes one or more abstract methods or property declarations.
 * The class which extends the abstract class must define all the abstract methods.
 * In the example, Person is an abstract class which includes one property (address) and three methods.
 * Out of 3 methods two are plain methods (addAddress, printAddress) and other is abstract method and so must be implemented in the derived class.
 * for more info refer: https://www.tutorialsteacher.com/typescript/abstract-class
 */
export abstract class Person {
    address: Address;

    constructor(address: Address) {
        this.addAddress(address);
    }

    addAddress(address: Address) {
        this.address = address;
    }

    printAddress() {
        console.log(JSON.stringify(this.address));
    }

    /**
     * Here getAddress marked as abstract method, i.e all the child classes should implement this method.
     */
    abstract getAddress();
}


/**
 * Interface is a structure that defines the contract in your application.
 * It defines the syntax for classes to follow. 
 * Classes that are derived from an interface must follow the structure provided by their interface.
 * The TypeScript compiler does not convert interface to JavaScript. It uses interface for type checking.
 * This is also known as "duck typing" or "structural subtyping".
 * An interface is defined with the keyword interface and it can include properties and method declarations using a function or an arrow function.
 * For more info refer: https://www.tutorialsteacher.com/typescript/typescript-interface
 */
export interface Address {
    doorNumber: string;
    streetName: string;
    addressLine: string;
    city: string;
    pinCode: number;
    state: string;
}

// refer: https://www.javatpoint.com/difference-between-abstract-class-and-interface