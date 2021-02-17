import loadInitial from "./modules/initial-page-load.js"
import loadHome from "./modules/home.js"
import loadMenu from "./modules/menu.js"
import loadContact from "./modules/contact.js"

setup();

function addFunctionToButtons(){
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    home.addEventListener("click", loadHome);
    menu.addEventListener("click", loadMenu);
    contact.addEventListener("click", loadContact);
}
    
function setup(){
    loadInitial();
    loadHome();
    addFunctionToButtons();
}