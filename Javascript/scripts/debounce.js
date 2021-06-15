function debounce(callbackFn, delay, ...params) {
    let timeout;

    return function (...innerParams) {
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() =>{
            callbackFn.apply(context, [...params, ...innerParams]);
        }, delay);
    }
}

function search(text) {
    console.log("Searched text: "+ text);
}

let onKeyUp = debounce(search, 3000);
