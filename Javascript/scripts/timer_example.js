function perform() {
    var x = 100;

    console.log(">>>>>>>>>>>>>>>>");

    setTimeout(() => {
        console.log("Time out executed: ", x);
    }, 3000);

    console.log("perform function called");

    // million line -> 10sec.
    const startTime = new Date().getTime();
    let endTime = startTime;

    // delay logic
    while(endTime >= startTime + 10000) {
        endTime = new Date().getTime;
    }
    
    console.log("My delay completed.");

    // output
    // 1, >>>>>>>>
    // 2 perform function called
    // My delay completed.
    // Time out executed:


}


perform();