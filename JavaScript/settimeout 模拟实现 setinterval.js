function mySetTimeout(fn, t) {
    let timer = null;
    function interval() {
        fn();
        timer = setTimeout(interval, t);
    }
    interval();
    mySetTimeout.cancel = () => {
        clearTimeout(timer);
    };
}