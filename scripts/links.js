const baseURL =  "https://masonw419.github.io/wdd230/";
const linksURL =  "https://masonw419.github.io/wdd230/data/links.json";
const acts = 

async function getLinks() {
	const response = await fetch(linksURL);
	const data = await response.json();
	//console.log(data);
    displayLinks(data);
}

const displayLinks = (weeks) => {
	weeks.forEach((week) => {
		let line = document.createElement('li');
		let fullLink = document.createElement('a');
		fullLink.setAttribute('href', week.url);
		fullLink.innerHTML(week.title);
		line.appendChild(fullLink);
	});
}

getLinks();