

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12"
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const hour = d.getHours();
const mins = d.getMinutes();
const seconds = d.getSeconds();
const fulldate = `${monthName}/${d.getDate()}/${year}    ${hour}:${mins}:${seconds}`;
document.getElementById("date2").textContent= fulldate;

// const today = new Date();
// const yyyy = today.getFullYear();
// let mm = today.getMonth() + 1; // Months start at 0!
// let dd = today.getDate();

// if (dd < 10) dd = '0' + dd;
// if (mm < 10) mm = '0' + mm;

// const formattedToday = dd + '/' + mm + '/' + yyyy;

// document.getElementById('DATE').value = formattedToday;

// const modified = document.querySelector('date1');
// let lastMod = new Date(document.lastModified);
// document.querySelector('date1').textContent = lastMod;
