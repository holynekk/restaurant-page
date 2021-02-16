function createHeader(id, txt){
    const head = document.createElement('header');
    head.setAttribute('id', id);

    const mainLogo = document.createElement("h1");
    mainLogo.textContent = txt;

    head.appendChild(mainLogo);

    return head;
}

function createButton(id, txt){
    const bttn = document.createElement('button');
    bttn.setAttribute('id' ,id);

    const content = document.createElement('span');
    content.textContent = txt;
    bttn.appendChild(content);
    bttn.classList.add('tab');

    return bttn;
}

function createNav(id){
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBt = createButton("home", "home");
    const menuBt = createButton("menu", "menu");
    const contactBt = createButton("contact", "contact");

    nav.appendChild(homeBt);
    nav.appendChild(menuBt);
    nav.appendChild(contactBt);

    return nav;
}


function createTab(id){
    const shownTab = document.createElement('main');
    shownTab.setAttribute('id', id);

    return shownTab;
}

function loadInitial(){
    const divSection = document.getElementById('content');

    const header = createHeader('just-header', "Zıkkım Restaurant")
    divSection.appendChild(header);

    const navBar = createNav('navbar');
    divSection.appendChild(navBar); 

    const tabContent = createTab("tab-content");
    divSection.appendChild(tabContent);
}

export default loadInitial;