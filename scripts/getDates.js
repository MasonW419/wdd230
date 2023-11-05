const today1 = document.querySelector('#today1');
const options = {
    // weekday: "long",
    // day: "numeric",
    // month: "long",
    year: "numeric"
};
today1.innerHTML = new Date().toLocaleDateString("en-UK", options);