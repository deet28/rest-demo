
function menuFunction(){
  let menu = document.createElement('div');
  
  let header = document.createElement('h1');
  header.innerText = "Menu";
  header.classList.add("menu-header");

  let header2 = document.createElement('h2');
  header2.textContent = "Drinks";
  header2.classList.add("section-header");

  let drink1 = document.createElement('p');
  drink1.innerText = `Milkshakes
  Come in chocolate, vanilla, strawberry, banana, cookie dough, and coffee flavors!`
  drink1.classList.add('menu-p');

  let drink2 = document.createElement('p');
  drink2.innerText = `Root Beer Floats!
  Choose from either Root Beer or Cream Soda!`
  drink2.classList.add('menu-p');

  let drink3 = document.createElement('p');
  drink3.innerText = `Coffee and Tea!
  We have iced and hot coffee and tea!`
  drink3.classList.add('menu-p');

  let header3 = document.createElement('h2');
  header3.textContent = "Ice Cream!"
  header3.classList.add("section-header");

  let flavor1 = document.createElement('p');
  flavor1.innerText = `Chocolate
  Classic chocolately goodness`;
  flavor1.classList.add('menu-p');

  let flavor2 = document.createElement('p');
  flavor2.innerText = `Vanilla
  The old school cool`
  flavor2.classList.add('menu-p');

  let flavor3 = document.createElement('p');
  flavor3.innerText = `Strawberry
  Our signature strawberry ice cream is made with real fresh strawberries!`
  flavor3.classList.add('menu-p');

  let flavor4 = document.createElement('p');
  flavor4.innerText = `Coffee
  Rhode Island's own, cawfee flavored ice cream!`
  flavor4.classList.add('menu-p');

  let flavor5 = document.createElement('p');
  flavor5.innerText = `Banana
  A crowd favorite, banana flavored ice cream!`
  flavor5.classList.add('menu-p');

  let flavor6 = document.createElement('p');
  flavor6.innerText = `Cookie Dough
  Our vanilla ice cream fused with chocolate chips!`
  flavor6.classList.add('menu-p');

  let header4 = document.createElement('h2');
  header4.innerText = "Specials"
  header4.classList.add("section-header");

  let special1 = document.createElement('p');
  special1.innerText = `Banana Sundae
  Chocolate, Banana, and Strawberry Ice Cream.
  Whipped Cream, Hot Fudge, Bananas.
  Topped with a cherry!`
  special1.classList.add('menu-p');

  let special2 = document.createElement('p');
  special2.innerText = `Blended Coffee
  Turn any flavored milkshake into blended coffee!
  All of the caffeine and all of the sweetness.`
  special2.classList.add('menu-p');

  menu.appendChild(header);
  
  menu.appendChild(header2);
  menu.appendChild(drink1);
  menu.appendChild(drink2);
  menu.appendChild(drink3);

  menu.appendChild(header3);
  menu.appendChild(flavor1);
  menu.appendChild(flavor2);
  menu.appendChild(flavor3);
  menu.appendChild(flavor4);
  menu.appendChild(flavor5);
  menu.appendChild(flavor6);

  menu.appendChild(header4);
  menu.appendChild(special1);
  menu.appendChild(special2);

  menu.classList.add('menu-container');

  return menu; 
  
};

function menuPage(){
  const main = document.getElementById("main");
  main.textContent="";
  main.appendChild(menuFunction());
}

export default menuPage;