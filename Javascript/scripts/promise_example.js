// Promise creation
let promise = new Promise((resolve, reject) => {
    let flag = true;
    if (flag) {
        resolve();
    }
    else {
        reject();
    }
});

// Promise creation
let promiseTwo = new Promise((resolve, reject) => {
    let flag = false;
    const startTime = new Date().getTime();
    let endTime = startTime;

    if (flag) {
        console.log("Flag: True, calling resolve fn");
        resolve();
        console.log("resolve fn called");
    }
    else {
        console.log("Flag: False, calling reject fn");
        reject();
        console.log("reject fn called");
    }
    // delay logic
    console.log("delay logic initiated");
    while (endTime >= startTime + 10000) {
        endTime = new Date().getTime;
    }
    console.log("My delay completed.");
});

// Promise Calling

// promise.then(
//     () => {
//         console.log("Success Promise");
//     },
//     () => {
//         console.log("Promise Error");
//     }
// );

// Promise Calling
async function callPromise() {
    try {
        // await promise;
        // if resolved.
        // console.log(">>>> Promise One successes >>>");

        // Call promise Two
        console.log(">>>> calling Promise Two >>>");
        // await promiseTwo;
        console.log(">>>> Promise Two successes >>>");
    }
    catch (exception) {
        if (exception && exception.name) {
            console.log(exception.name);
            console.log(">>> Exception " + exception.name + " error  occurred >>>")
        }
        else {
            console.log("Some Error Occurred");
        }

    }
    finally {
        console.log("Finally block called");
    }
}

callPromise();