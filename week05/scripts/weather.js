


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

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
	currentTemp.innerHTML = data.main.temp + '&deg;F';
	const iconsrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + ".png";
	let desc = data.weather[0].description ;
	weatherIcon.setAttribute('src', iconsrc);
	// weatherIcon.setAttribute();
	captionDesc.textContent = desc;
}