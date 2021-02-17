function createHeader(id, txt){
    const image = document.createElement('img');

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

    const homeBt = createButton("home", "HOME");
    const menuBt = createButton("menu", "MENU");
    const contactBt = createButton("contact", "CONTACT");

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

function createFooter(id, txt){
    const foot = document.createElement('footer');
    foot.setAttribute('id', id);

    const text = document.createElement('h3');
    text.textContent = txt;

    foot.appendChild(text);
    return foot;
}

function loadInitial(){
    const divSection = document.getElementById('content');

    const header = createHeader('just-header', "ZIKKIM RESTAURANT")
    divSection.appendChild(header);

    const navBar = createNav('navbar');
    header.appendChild(navBar); 

    const tabContent = createTab("tab-content");
    divSection.appendChild(tabContent);

    const foot = createFooter("footer", "Made by HolyNekK :)");
    divSection.appendChild(foot);
}

export default loadInitial;