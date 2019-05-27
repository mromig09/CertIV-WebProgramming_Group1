var timerId = setTimeout(Tick, 1000);

setTimeout(Tick, 1000);

function Tick() {
    console.log("Tick");
    timerId = setTimeout(Tick, 1000);
}

setTimeout(function() {
    clearInterval(timerId);
}, 5000);