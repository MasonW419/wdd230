const today1 = document.querySelector('#today1');
const options = {
    // weekday: "long",
    // day: "numeric",
    // month: "long",
    year: "numeric"
};
today1.innerHTML = new Date().toLocaleDateString("en-UK", options);

const lastMod = document.querySelector('#last_mod');
lastMod.innerHTML = new Date(document.lastModified);


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


// page visits
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
