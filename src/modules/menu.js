function itemCreator(name, text, imgUrl, alt, price){
    const card = document.createElement('div');
    card.setAttribute('id', 'card');
    
    const image = document.createElement('img');
    image.setAttribute('src', imgUrl);
    image.setAttribute('alt', alt);
    image.setAttribute('id', 'menu-image');

    const infoSection = document.createElement('div');
    const itemName = document.createElement('p');
    itemName.textContent = name;
    const itemDescription = document.createElement('p');
    itemDescription.textContent = text;
    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    infoSection.appendChild(itemName);
    infoSection.appendChild(itemDescription);
    infoSection.appendChild(itemPrice);

    card.appendChild(image);
    card.appendChild(infoSection);

    return card;
}


function setBttnActv(id){
    const actButton = document.querySelector(".tab.active");
    if (actButton) actButton.classList.remove('active');

    const hmBtn = document.getElementById(id);
    hmBtn.classList.add('active');
}

function loadMenu(){
    const content = document.getElementById('tab-content');

    content.textContent = "";

    const menuText = document.createElement('h3');
    menuText.classList.add('menu-text');
    menuText.textContent = "MENU";
    content.appendChild(menuText);

    const menu = document.createElement('div');
    menu.classList.add('menu-bar');


    let itemList = [
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL"),
        itemCreator("Klasiko Cayoo","Muhtesem moruk kacirma","https://productimages.hepsiburada.net/s/24/375/10081367883826.jpg","cay iste kocum","10TL")
    ];

    itemList.forEach(item => {
        menu.appendChild(item);
    });

    content.appendChild(menu);

    setBttnActv('menu');
}

export default loadMenu;