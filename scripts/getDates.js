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