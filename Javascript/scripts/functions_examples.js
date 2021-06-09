
xyz(); // "xyz function called"
// f(); // throws type error because we are calling the function expression before it is scope.

console.log(v1); // undefined

var v1 = "Avinash";

// function without name is called anonymous functions
// function () {} // -> syntax error;

// function statement / function expression
function xyz() {
    console.log("xyz function called")
}

// Function expression
var f = function () {
    console.log("f function called")
}
f(); // "f function called"


// Arrow functions -> can be written with function expression
var func = () => {
    console.log("func function called")
}

func(); // func function called

var func2 = (p1, p2) => {
    console.log("Func2 function called: ", p1, p2)
}
func2(100, 200); // Func2 function called: 100, 200


// Function expression: Named functions
var f2 = function foo() {
    console.log("F2 function called")
}

f2(); // "F2 function called
// foo(); // ReferenceError: foo is not defined

// Diff b/w parameters and arguments
function abc(param1, param2) {
    // param1, param2 -> called as parameters
    console.log(param1, param2);
}

abc(1, 2); // here 1, 2 called arguments


function isMajor(age) {
    if (age >= 18) {
        console.log("User is eligible to vote");
    }
    else if(age > 100) {
        console.log("sdsds")
    }
    else {
        console.log("User is not eligible to vote");
    }
}

function isMajor(age) {
    switch(age) {
        case 18:
            console.log("sdsdsd");
            return "Valid age";
        case 100:
            console.log("sdsdsd")
            break;
        default:
            // fdfdfd
            break;
    }
}