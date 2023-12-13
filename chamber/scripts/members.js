
const cards = document.querySelector('#company-cards');
const path = "../../chamber/data/members.json";

async function printJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    displayMembers(json.members);
}
printJSON(path);  

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let lineBreak = document.createElement('br');
        let company = document.createElement('p');
        let names = document.createElement('p');
        let linkHold = document.createElement('p');
        let cardLink = document.createElement('a');
        let phone = document.createElement('p');
        let address = document.createElement('p');

        names.textContent = member.names[0].name;
        company.textContent = member.member + ' --- ' + member.membershipLevel;
        cardLink.textContent = member.websiteURL;
        phone.textContent = 'Phone: ' + member.phoneNumber;
        address.textContent = member.address;

        logo.setAttribute('src', member.iconfile);
        logo.setAttribute('alt', 'logo of ' + member.member);
        logo.setAttribute('loading', 'lazy');
		logo.setAttribute('width', '100%');
		logo.setAttribute('height', '100');

        cardLink.setAttribute('href', member.websiteURL);

        phone.setAttribute('class', 'dir-phone');
        names.setAttribute('class', 'dir-names');
        logo.setAttribute('class', 'dir-img');

        linkHold.appendChild(cardLink)

        card.appendChild(logo)
        card.appendChild(lineBreak);
        card.appendChild(names);
        card.appendChild(company);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(linkHold);
        cards.appendChild(card);
    });
}