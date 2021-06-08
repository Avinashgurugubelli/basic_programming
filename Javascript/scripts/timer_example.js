function perform() {
    var x = 100;

    console.log(">>>>>>>>>>>>>>>>");

    setTimeout(() => {
        console.log("Time out executed: ", x);
    }, 3000);

    console.log("perform function called");

    // million line -> 40sec.
}


perform();