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
    while (endTime >= startTime + 10000) {
        endTime = new Date().getTime;
    }

    console.log("My delay completed.");


    function tick() {

        console.log('Tick function called');

        function handler() {
            console.log("First tick....");
        }

        // for every 1 sec.
        t1 = setInterval(handler, 1000);

        // for every 5 sec
        setInterval(() => {
            console.log("Second tick....");
            clearT1Timer();
        }, 5000);

        function clearT1Timer () {
            console.log("timer t1 cleared")
            clearInterval(t1);
        }

        // delay logic
        while (endTime >= startTime + 10000) {
            endTime = new Date().getTime;
        }
        console.log("second delay completed.");

        // clearT1Timer();

    }



    tick();

    // output
    // 1, >>>>>>>>
    // 2 perform function called
    // My delay completed.
    // Time out executed:


}


perform();