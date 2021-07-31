
function contactFunction(){
  const contact = document.createElement("div");
  contact.classList.add("contact-page");

  const phoneCard = document.createElement("div");
  
  const phoneNumber = document.createElement("h2");
  phoneNumber.innerText = "Phone Number" 
  const phone = document.createElement("p");
  phone.innerText = `(1)111-1234`;

  phoneCard.appendChild(phoneNumber);
  phoneCard.appendChild(phone);
  phoneCard.classList.add("contact-card");

  const locationCard = document.createElement("div");

  const locationTitle = document.createElement("h2");
  locationTitle.innerText = "Location:"
  const location = document.createElement("p");
  location.innerText = `123 Ice Cream Lane,
  Newport, Rhode Island`

  locationCard.appendChild(locationTitle);
  locationCard.appendChild(location);
  locationCard.classList.add("contact-card");
  
  contact.appendChild(locationCard);
  contact.appendChild(phoneCard);

  return contact;

};

function contactPage(){
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(contactFunction());
};

export default contactPage; 