
function makeHome(){
  const home = document.createElement("div");
  home.classList.add("home-page");

  const iceCream = document.createElement("img");
  iceCream.src = "pictures/iceCream.jpeg";
  iceCream.classList.add("ice-cream-icon");

  const firstP = document.createElement("p");
  firstP.innerText = `Moo Moo has the goods! 
  All of our ice cream is home made!
  We source our dairy locally! 
  We have a variety of toppings and flavors!
  In the mooood for something good?! 
  Come in and see us!`
  firstP.classList.add("home-p");

  const secondP = document.createElement("p");
  secondP.innerText = `HOURS
  Monday:    8a - 6p
  Tuesday:   8a - 6p 
  Wednesday: 8a - 6p 
  Thursday:  8a - 6p 
  Friday:    8a - 9p 
  Saturday:  8a - 9p 
  Sunday:    9a - 6p`;
  secondP.classList.add("home-p");

  home.appendChild(firstP);
  home.appendChild(secondP);

  return home; 

}

function homePage(){
  const main = document.getElementById("main");
  main.textContent="";
  main.appendChild(makeHome());

}

export default homePage; 