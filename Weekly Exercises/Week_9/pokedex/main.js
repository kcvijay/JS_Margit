let cards = document.querySelector(".cards");
let card = document.querySelectorAll(".card");
let errTxt = document.querySelector(".errorTxt");
let search = document.querySelector("#search");

let pokeTypesContainer = document.querySelectorAll(".poke-types");

let nextPage = document.querySelector(".next-page");

const addPokeCard = (obj) => {
  const cardData = `
    <div class="card">
    <div class="poke-types">
    <img src="media/icons/${obj.types[0].type.name}.svg"/></div>
    <img class="pokemon-img" src="${obj.sprites.other.home.front_default}" alt="pokemon icon"/>
    <p class="name">${obj.name}</p>
  </div>`;
  cards.insertAdjacentHTML("beforeend", cardData);
};

function filterCards() {
  let filterTxt, card, cardName, i, txtValue;
  filterTxt = search.value.toUpperCase();
  card = document.querySelectorAll(".card");
  card.forEach((eachCard) => {
    cardName = eachCard.querySelector(".name");
    if (cardName) {
      txtValue = cardName.textContent || cardName.innerText;
      if (txtValue.toUpperCase().indexOf(filterTxt) > -1) {
        eachCard.style.display = "";
      } else {
        eachCard.style.display = "none";
      }
    }
  });
}

const errorMsg = (err) => {
  errTxt.textContent = `Data not found. ${err.message}`;
  errTxt.style.padding = "20px";
  errTxt.style.color = "#fff";
};

const getPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Pokemon not found");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      data.results.forEach((obj) => {
        fetch(`${obj.url}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Pokemon not found!");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            addPokeCard(data);
          });
      });
    })
    .catch((err) => {
      errorMsg(`${err}`);
    });
};

getPokemon();
search.addEventListener("keyup", filterCards);
