import loadMenu from "./menu.js"

function createText(){
    const abt = document.createElement('section');
    abt.classList.add('section');

    const h3 = document.createElement('h3');
    h3.textContent = "PEOPLE TOGETHER, LIKE GOOD FOOD!!";
    abt.appendChild(h3);

    return abt;
}

function setBttnActv(id){
    const actButton = document.querySelector(".tab.active");
    if (actButton) actButton.classList.remove('active');

    const hmBtn = document.getElementById(id);
    hmBtn.classList.add('active');
}

function loadHome(){
    const content = document.getElementById('tab-content');

    content.textContent = '';

    const text = createText();

    setBttnActv('home');

    content.appendChild(text);

    const order = document.createElement('button');
    order.textContent = "ORDER NOW!";
    order.setAttribute('id', 'order-button');
    order.addEventListener("click", loadMenu);

    content.appendChild(order);
}

export default loadHome;