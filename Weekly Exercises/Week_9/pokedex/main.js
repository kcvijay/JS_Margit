let cards = document.querySelector(".cards");
let card = document.querySelectorAll(".card");
let errTxt = document.querySelector(".errorTxt");
let search = document.querySelector("#search");

let pokeTypesContainer = document.querySelectorAll(".poke-types");

let nextPage = document.querySelector(".next-page");

const addPokeCard = (pokemon) => {
  const cardData = `<div class="card">
      <div class="poke-types">
      <img src="media/icons/${pokemon.poketype}.svg"/>
      </div>
      <img class="pokemon-img" src="${pokemon.image}" alt="pokemon icon"/>
      <p class="name">${pokemon.name}</p>
    </div>`;
  cards.insertAdjacentHTML("beforeend", cardData);
};

const addPokeCard2 = (pokemon) => {
  const cardData = `<div class="card">
      <div class="poke-types">
      <img src="media/icons/${pokemon.poketype}.svg"/>
      <img src="media/icons/${pokemon.poketype2}.svg"/>
      </div>
      <img class="pokemon-img" src="${pokemon.image}" alt="pokemon icon"/>
      <p class="name">${pokemon.name}</p>
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

const nextPokemonList = (list) => {
  fetch(`${list}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon not found!");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      addPokeCard(data);
    });
};

const errorMsg = (err) => {
  errTxt.textContent = `Data not found. ${err.message}`;
  errTxt.style.padding = "20px";
  errTxt.style.color = "#fff";
};

// Old way
// const getPokemon = () => {
//   fetch(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("Pokemon not found");
//       } else {
//         return res.json();
//       }
//     })
//     .then((data) => {
//       data.results.forEach((obj) => {
//         fetch(`${obj.url}`)
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Pokemon not found!");
//             } else {
//               return response.json();
//             }
//           })
//           .then((data) => {
//             addPokeCard(data);
//           });
//       });
//     })

//     .catch((err) => {
//       errorMsg(`${err}`);
//     });
// };

// getPokemon();
// search.addEventListener("keyup", filterCards);

/*   Cleaner way to fetch all pokemon data (few ideas from: James Q Quick (Youtube)/W3 Schools) ***/

const getPokemon = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      const everyPokemon = data.results;
      everyPokemon.forEach((obj) => {
        fetch(`${obj.url}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Pokemon not found");
            } else return res.json();
          })
          .then((data) => {
            console.log(data);
            // One trick/cheat to put multiple type icons into cards. Because appending child did not work.
            if (data.types.length > 1) {
              const pokemon = {
                name: data.name,
                image: data.sprites.other.home.front_default,
                poketype: data.types[0].type.name,
                poketype2: data.types[1].type.name,
              };
              return addPokeCard2(pokemon);
            } else {
              const pokemon = {
                name: data.name,
                image: data.sprites.other.home.front_default,
                poketype: data.types[0].type.name,
              };
              return addPokeCard(pokemon);
            }
          });
      });
    });
};

getPokemon();
search.addEventListener("keyup", filterCards);
