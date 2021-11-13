let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// fetch request for toys
const toyAPI = 'http://localhost:3000/toys';

fetch(toyAPI)
.then((res) => res.json())
.then(json => { json.forEach(renderCharacter); });

// Card rendering of Toys
function renderCharacter(toys) {
  const toyCollection = document.getElementById('toy-collection');
  const card = document.createElement('div');
  card.className = 'card';
  toyCollection.append(card)

  const h2 = document.createElement('h2');
  h2.innerText = toys.name;

  const img = document.createElement('img');
  img.src = toys.image;
  img.className = 'toy-avatar';

  const p = document.createElement('p');
  p.innerText = `${toys.likes} Likes`;
  
  const button = document.createElement('button');
  button.className = 'like-btn';
  button.id = toys.id;
  button.innerText = 'Like';

  // Create event listener on the 'likes' button on each individual toy card
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.parentNode;
  });  

  card.append(h2, img, p, button);
};

// Create an event listener for 'create toy' button
const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e.target.submit);
})

// Add new toy with POST
// Increase toy's likes with PATCH