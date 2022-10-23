const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const errTxt = document.querySelector(".errorTxt");
const search = document.querySelector("#search");
const gens = document.querySelectorAll(".gen");
const pokeTypesContainer = document.querySelectorAll(".poke-types");
const pokeTypes = document.querySelector(".allTypes");
const sectionPokeTypes = document.querySelector(".section-allTypes");
const toTop = document.querySelector(".to-top");

const numberOfCards = document.querySelector("#numberOfCards");

let generations = [
  {
    limit: 151,
    offset: 0,
  },
  {
    limit: 100,
    offset: 151,
  },
  {
    limit: 135,
    offset: 251,
  },
  {
    limit: 107,
    offset: 386,
  },
  {
    limit: 156,
    offset: 493,
  },
  {
    limit: 72,
    offset: 649,
  },
  {
    limit: 88,
    offset: 721,
  },
  {
    limit: 96,
    offset: 809,
  },
  {
    limit: 3,
    offset: 905,
  },
];

const getPokemons = (gen) => {
  fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${
      generations[gen.id].limit
    }&offset=${generations[gen.id].offset}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      numberOfCards.innerHTML = `This generation has ${data.results.length} pokemons.`;
      data.results.map((eachPokemon) => {
        fetch(`${eachPokemon.url}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(response.status);
            }
          })
          .then((data) => {
            if (data.types.length > 1) {
              const pokemon = {
                name: data.name,
                image: data.sprites.other.home.front_default,
                id: data.id,
                poketype: data.types[0].type.name,
                poketype2: data.types[1].type.name,
                weight: Number(data.weight / 10),
                height: Number(data.height / 10),
                experience: data.base_experience,
              };
              return addPokeCard2(pokemon);
            } else {
              const pokemon = {
                name: data.name,
                image: data.sprites.other.home.front_default,
                id: data.id,
                poketype: data.types[0].type.name,
                weight: Number(data.weight / 10),
                height: Number(data.height / 10),
                experience: data.base_experience,
              };
              return addPokeCard(pokemon);
            }
          })
          .catch((err) => errorMsg(err));
      });
    });
};

//one type
const addPokeCard = (pokemon) => {
  const cardData = `
    <div class="card">
    <p class="pokeID">#${pokemon.id}</p>
      <div class="poke-types">
      <img src="media/icons/${pokemon.poketype}.svg"/>

      </div>
      <img class="pokemon-img" src="${pokemon.image}" alt="pokemon icon" onerror="this.onerror=null;this.src='media/pokemon.icon.png'" />
      <div class="info">
        <p class="name">${pokemon.name}</p>
        <div class="more-info">
            <p class="weight"><span><b>Weight: </b></span>${pokemon.weight} lbs</p>
            <p class="height"><span><b>Height: </b></span>${pokemon.height} meters</p>
            <p class="experience"><span><b>Base Experiences: </b></span>${pokemon.experience}</p>
          </div>
        </div>
      </div>
    </div>`;
  cards.insertAdjacentHTML("beforeend", cardData);
};

//two types
const addPokeCard2 = (pokemon) => {
  const cardData = `
  <div class="card">
  <p class="pokeID">#${pokemon.id}</p>
        <div class="poke-types">
        <img src="media/icons/${pokemon.poketype}.svg"/>
        <img src="media/icons/${pokemon.poketype2}.svg"/>
        </div>
        <img class="pokemon-img" src="${pokemon.image}" alt="pokemon icon" onerror="this.onerror=null;this.src='media/pokemon-icon.png'" />
        <div class="info">
        <p class="name">${pokemon.name}</p>
        <div class="more-info">
            <p class="weight"><span><b>Weight: </b></span>${pokemon.weight} lbs</p>
            <p class="height"><span><b>Height: </b></span>${pokemon.height} meters</p>
            <p class="experience"><span><b>Base Experiences: </b></span>${pokemon.experience}</p>
          </div>
        </div>
      </div>
    </div>`;
  cards.insertAdjacentHTML("beforeend", cardData);
};

// Ideas from w3schools
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
//Error message
const errorMsg = (err) => {
  errTxt.textContent = `Data not found. ${err.message}`;
  errTxt.style.padding = "20px";
  errTxt.style.color = "#333";
};

//putting active class to a button
for (let i = 0; i < gens.length; i++) {
  gens[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

//Functions for scroll-to-top button

gens.forEach((gen) => {
  gen.addEventListener("click", () => {
    cards.innerHTML = "";
    getPokemons(gen);
  });
});
const scrollBtnVisible = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For others
};

window.onscroll = scrollBtnVisible;
toTop.addEventListener("click", scrollToTop);
pokeTypes.addEventListener("click", () => {
  sectionPokeTypes.classList.toggle("visible");
});
search.addEventListener("keyup", filterCards);
