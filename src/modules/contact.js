function setBttnActv(id){
    const actButton = document.querySelector(".tab.active");
    if (actButton) actButton.classList.remove('active');

    const hmBtn = document.getElementById(id);
    hmBtn.classList.add('active');
}

function createInfoSection(){
    const infoSection = document.createElement('div');
    infoSection.classList.add('contact-card');

    const info = document.createElement('div');
    const loc = document.createElement('p');
    loc.textContent = "Unknown place";
    const hours = document.createElement('p');
    hours.textContent = "10:00 - 13:00";
    const phone = document.createElement('p');
    phone.textContent = "222 - 222 - 22 22";

    info.appendChild(loc);
    info.appendChild(hours);
    info.appendChild(phone);

    infoSection.appendChild(info);

    const image = document.createElement('img');
    image.classList.add('location-image');
    image.setAttribute('src', 'https://media-cdn.tripadvisor.com/media/photo-s/08/ef/c1/66/troll.jpg');
    image.setAttribute('alt', 'location image');

    infoSection.appendChild(image);

    return infoSection;
}

function loadContact(){
    const content = document.getElementById('tab-content');
    content.textContent = "";

    const conttext = document.createElement('h3');
    conttext.classList.add('menu-text');
    conttext.textContent = "CONTACT";

    content.appendChild(conttext);

    setBttnActv('contact');

    content.appendChild(conttext);

    content.appendChild(createInfoSection());
}

export default loadContact;

