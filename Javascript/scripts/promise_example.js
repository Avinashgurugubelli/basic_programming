
function writeToConsole(msg) {
    console.log(msg);
}


function promiseHandler(resolve, reject) {
    let x =10;

    if(x == 10) {
        resolve("Resolved");
    }
    else {
        reject("Rejected");
    }
}

let p = new Promise(promiseHandler);

p.then(
   (val) => {
    writeToConsole(val);
   },
   (error) => {
       writeToConsole(error);
   }
);




// function debounce(fn, delay, ...args) {
//     let timeout;
//     let count = 0; 
//     return function (...innerArgs) {
//         let context = this;
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             fn.apply(context, [...args, ...innerArgs, count++]);
//         }, delay);
//     }
// }

// function search(text) {
//     console.log('searching for....' + text);
// }


// let onKeyUp = debounce(search, 2000);