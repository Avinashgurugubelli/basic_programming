/**
 * It has different values depending on where it is used:
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
 */


// var employee = {
//     first_name: "Avinash",
//     last_name: "G",
//     print_info: () => {
//         const details = "First name: " + employee.first_name + ", last name: " + employee.last_name;
//         console.log(details);
//     },
//     print_this: () => {
//         console.log(this)
//     }
// }

// function details() {
//     let emp = {
//         first_name: "Tarun",
//         last_name: "D",
//     };
//     console.log();
// }

// function xyz() {
//     console.log(this);
// }

// xyz();

// employee.print_info();


var emp = {
    first_name: "Avinash",
    last_name: "G",
}

let printInfo = function print_details(home_town, state) {
    const details = "First name: " + this.first_name + ", last name: " + this.last_name + " home town:" + home_town;
    console.log(details);
}

// printInfo("Delhi");

printInfo.call(emp, "Vskp", "AP"); // calling env

printInfo.apply(emp, ["HYD", "TS"]); // 

let printInfoCopy = printInfo.bind(emp, "DS", "SSD");
printInfoCopy();
