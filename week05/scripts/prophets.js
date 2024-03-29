console.log("test");

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');



async function getProphetData(url) {
	const response = await fetch(url);
	const data = await response.json();
	// console.table(data.prophets); // temp test of data
	displayProphets(data.prophets);
}
getProphetData(url);


function displayProphets (prophets) {
	prophets.forEach((prophet) => {
		let card = document.createElement('section');
		let fullName = document.createElement('h2');
		let portrait = document.createElement('img');

		let fullnameStr = prophet.name + ' ' + prophet.lastname;
	
		fullName.textContent = fullnameStr;

		portrait.setAttribute('src', prophet.imageurl);
		portrait.setAttribute('alt', 'Portrait of ' + fullnameStr);
		portrait.setAttribute('loading', 'lazy');
		portrait.setAttribute('width', '340');
		portrait.setAttribute('height', '440');

		card.appendChild(fullName);
		card.appendChild(portrait);

		cards.appendChild(card);
	});
}
// const displayProphets = (prophets) => {
// 	prophets.forEach((prophet) => {
// 		let card = document.createElement('section');
// 		let fullName = document.createElement('h2');
// 		let potrait = document.createElement('img');

// 		let fullnameStr = toString(prophet.name + ' ' + prophet.lastname);
	
// 		fullName.textContent = '${prophet.name} {prophet.lastname}';

// 		portrait.setAttribute('src', prophet.imageurl);
// 		portrait.setAttribute('alt', 'Portrait of ' + fullnameStr);
// 		portrait.setAttribute('loading', 'lazy');
// 		portrait.setAttribute('width', '340');
// 		portrait.setAttribute('height', '440');

// 		card.appendChild();
// 		card.appendChild(portrait);

// 		cards.appendChild(card);
// 	});
// }

