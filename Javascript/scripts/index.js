
// var x = 2;

// function square(n) {
//     var ans = n * n;
//     return ans;
// }

// var s1 = square(x);
// var s2 = square(4);

// console.log(s1, s2);

// console.log(x); // undefined
// var x = isMajor(18); // assigned
// console.log(x); // true

// console.log(xyz); // error
// xyz = 5000;
// console.log(xyz);

// var m = 10;
// console.log(m); // 10
// {
//     console.log(m); // 10
//     var m = 20;
//     console.log(m); // 20
// }
// console.log(m); //10

// type error
// const c = 100;
// c = 200;

// Syntax error
// let l = 300;
// let l = 500;

// const c = 300;
// const c = 500;

// reference error
// console.log(l1);
// let l1 = 500;
// console.log(a); 
// const a = 5;


// closure
// function parent () {
//     var v1 = 500;
//     function child () {
//         var v2 = 900
//         console.log(v1);
//     }
//     return child;
//     // child();
// }

// let p = parent();
// p();

let f =  function child () {
    var v2 = 900
    console.log(v1);
}

// function statement / function expression
function f1(xyz) {
    xyz();
    // console.log(xyz()); // 1000;
}

// f1(f);

//Anonymous functions
//



// function printUserDetails(name, age, phone) {
//     console.log(name, age, phone)
//     isMajor(age)

// }

// function isMajor(age) {
//     if (age >= 18) {
//         console.log("User is eligible to vote");
//     }
//     else {
//         console.log("User is not eligible to vote");
//     }
// }


// printUserDetails("(Avinash", "26", "45445454545");

// printUserDetails("Jack", "10");


let person = {
    name: "Avinash",
    age: 25,
    skills: ["Python", "JS"],
    address: {
        streetName: "MVP colony",
        city: "VSKP",
        state: "AP"
    },
    isResident: true
}

// accessing the value of name property from the above person OBJ using dot operator
console.log(person.name);

// accessing the value of name property from the above person OBJ
console.log(person["name"]);

// get all keys in a obj
let personObjKeys = Object.keys(person);
console.log(personObjKeys);

// dynamically  accessing the value using keys 
Object.keys(person).forEach(function(key) {
    console.log("Key: "+ key + " value: "+ person[key]);
});

// adding new property
person["phoneNumber"] = 418732118;
console.log(person);

/**
 * data is lost when the browser tab is closed
 */
sessionStorage.setItem("AuthToken", "dssddfsdfdsfsdfsdfsdfdsfsdfsdfsdfsdf");
sessionStorage.setItem("AuthToken", "AAADAADADAD");
console.log(sessionStorage.getItem("AuthToken"));

/**
 * The localStorage object stores data with no expiration date. 
 * The data will not be deleted when the browser is closed, and will be available the next day, week, or year
 */
localStorage.setItem("UserRole", "ADMIN");
console.log(sessionStorage.getItem("AuthToken"));
