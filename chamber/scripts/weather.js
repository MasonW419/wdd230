const tempurature = document.querySelector("#curTemp");
const icon = document.querySelector("#weatherIcon");
const description = document.querySelector("#weatherDescription");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.170277&lon=-111.572220&appid=594a0ea36afc97e8ee68c4c657acfa04&units=imperial';

const temp1 = document.querySelector('#Temp1');
const temp2 = document.querySelector('#Temp2');
const temp3 = document.querySelector('#Temp3');
const descript1 = document.querySelector('#Descript1');
const descript2 = document.querySelector('#Descript2');
const descript3 = document.querySelector('#Descript3');
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.170277&lon=-111.572220&appid=594a0ea36afc97e8ee68c4c657acfa04&units=imperial';

async function apiFetch(url) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data); // testing only
			displayResults(data); // uncomment when read
		} else {
			throw Error(await response.text() );
            console.log('test else');
		}
	} catch (error) {
		console.log(error);
        console.log('test error');
	}
}
apiFetch(url);
async function apiFetch2(url) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data); // testing only
			displayResults2(data); // uncomment when read
		} else {
			throw Error(await response.text() );
            console.log('test else');
		}
	} catch (error) {
		console.log(error);
        console.log('test error');
	}
}
apiFetch2(url2);

function displayResults(data) {
	tempurature.innerHTML = data.main.temp;
	description.innerHTML = data.weather[0].description;

}
function displayResults2(data) {
    temp1.innerHTML = data.list[3].main.temp;
    descript1.innerHTML = data.list[3].weather[0].description;
    temp2.innerHTML = data.list[11].main.temp;
    descript2.innerHTML = data.list[11].weather[0].description;
    temp3.innerHTML = data.list[19].main.temp;
    descript3.innerHTML = data.list[19].weather[0].description;
}

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date();
var today = days[date.getDay()];
console.log(today);

const banner = document.querySelector('#event_banner');
if (today == "Monday" || today == "Tuesday" || today == "Wednesday") {
    banner.style.display = 'block';
}