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

const tempurature = document.querySelector("#curTemp");
const icon = document.querySelector("#weatherIcon");
const description = document.querySelector("#weatherDescription");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.170277&lon=-111.572220&appid=594a0ea36afc97e8ee68c4c657acfa04&units=imperial';
async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data); // testing only
			console.log(data.main.temp)
			console.log("please work");
			displayResults(data); // uncomment when ready
		} else {
			throw Error(await response.text() );
		}
	} catch (error) {
		console.log(error);
	}
}
apiFetch();

function displayResults(data) {
	tempurature.innerHTML = data.main.temp;
	description.innerHTML = data.weather[0].description;
	const iconsrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon;
	icon.setAttribute('src', iconsrc);
	icon.setAttribute('alt', 'weather icon');
}



