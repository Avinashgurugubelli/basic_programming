
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

var m = 10;
console.log(m); // 10
{
    console.log(m); // 10
    var m = 20;
    console.log(m); // 20
}
console.log(m); //10






function printUserDetails(name, age, phone) {
    console.log(name, age, phone)
    isMajor(age)

}

function isMajor(age) {
    if(age >= 18) {
        console.log("User is eligible to vote");
    }
    else {
        console.log("User is not eligible to vote");
    }
}


// printUserDetails("Avinash", "26", "45445454545");

// printUserDetails("Jack", "10");
