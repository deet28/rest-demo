import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";


function navDiv(){

  const header = document.createElement("header");
  header.classList.add("header"); 
  
  const name = document.createElement("h1");
  name.classList.add("name");
  name.textContent = "Moo Moo";

  header.appendChild(name);
  header.appendChild(navBar());

  return header;
}

function navBar(){
  const navBar = document.createElement("nav");
  
  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.classList.add("button-nav");
  homeButton.addEventListener("click",(e) =>{
    if (e.target.classList.contains("engaged")) return;
    setEngaged(homeButton);
    homePage();
  });

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.classList.add("button-nav");
  menuButton.addEventListener("click",(e) =>{
    if (e.target.classList.contains("engaged")) return;
    setEngaged(menuButton);
    menuPage();
  });  

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.classList.add("button-nav");
  contactButton.addEventListener("click",(e) =>{
    if (e.target.classList.contains("engaged")) return;
    setEngaged(contactButton);
    contactPage();  
  });

  navBar.appendChild(homeButton);
  navBar.appendChild(menuButton);
  navBar.appendChild(contactButton);

  return navBar;
}

function setEngaged(button){
  const buttons = document.querySelectorAll(".button-nav");

  buttons.forEach((button) => {
    if (button !== this){
      button.classList.remove("engaged")
    }
  });
  button.classList.add("engaged");
}

function mainDiv(){
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;

}

function footerDiv(){

  const cowPic = document.createElement("img");
  cowPic.src = "pictures/cow-icon.jpg";
  cowPic.classList.add("cow-pic");
  
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const bottomText = document.createElement("p");
  bottomText.innerText = `Moo Moo Ice Cream
  EST.1950`;

  footer.appendChild(bottomText);
  footer.appendChild(cowPic);

  return footer;
}

function makeSite(){
  const content = document.getElementById("content");

  content.appendChild(navDiv());
  content.appendChild(mainDiv());
  content.appendChild(footerDiv());

  setEngaged(document.querySelector(".button-nav"));
  
  homePage();
}

export default makeSite; 