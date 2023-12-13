// back soon
const dayDisplay = document.querySelector(".day_display");
let dayLast = Number(window.localStorage.getItem("dayLast-ls")) || 0;
let dayNow = Date.now();
const msToDays = 84600000;
let dayNum = (dayNow - dayLast) / msToDays;
if (dayNum < 1) {
    dayDisplay.textContent = "Welcome back so soon!";
} else {
    dayDisplay.textContent = "You last visited " + dayNum + " days ago";
}
if (dayLast == 0 ){
    dayDisplay.textContent = "Welcome to our Discover Page! This is your first visit."
}

localStorage.setItem("dayLast-ls", dayNow);