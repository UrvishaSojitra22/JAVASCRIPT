let count = 0;
let incrementClicks = 0;
let decrementClicks = 0;

function updateDisplay() {
    document.getElementById('count').innerHTML = count;
    document.getElementById('incCount').innerHTML = incrementClicks;
    document.getElementById('decCount').innerHTML = decrementClicks;
}
function increment() {
     if (count < 10) {
        count++;
        incrementClicks++;
        updateDisplay();
    }
}
function decrement() {
    if (count > 0) {
        count--;
        decrementClicks++;
        updateDisplay();
    }
}