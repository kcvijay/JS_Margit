let cards = document.querySelector(".cards");
let card = document.querySelectorAll(".card");
let errTxt = document.querySelector(".errorTxt");
let search = document.querySelector("#search");

const gen = document.querySelectorAll(".gen");

let pokeTypesContainer = document.querySelectorAll(".poke-types");

const nextPage = document.querySelector(".next-page");
const prevPage = document.querySelector(".prev-page");

const addPokeCard = (pokemon) => {
  const cardData = `
    <div class="card">
      <div class="poke-types">
      <img src="media/icons/${pokemon.poketype}.svg"/>
      </div>
      <img class="pokemon-img" src="${pokemon.image}" alt="pokemon icon"/>
      <p class="name">${pokemon.name}</p>
    </div>`;
  cards.insertAdjacentHTML("beforeend", cardData);
};

const addPokeCard2 = (pokemon) => {
  const cardData = `
  <div class="card">
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
const errorMsg = (err) => {
  errTxt.textContent = `Data not found. ${err.message}`;
  errTxt.style.padding = "20px";
  errTxt.style.color = "#fff";
};

/*   Cleaner way to fetch all pokemon data (few ideas from: James Q Quick (Youtube)/W3 Schools) ***/

// const getPokemon = () => {
//   fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Pokemon not found");
//       } else return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       let nextUrl = data.next;
//       let prevUrl = data.previous;
//       nextPage.id = nextUrl;
//       prevPage.id = prevUrl;

//       const everyPokemon = data.results;
//       everyPokemon.forEach((obj) => {
//         fetch(`${obj.url}`)
//           .then((res) => {
//             if (!res.ok) {
//               throw new Error("Pokemon not found");
//             } else return res.json();
//           })
//           .then((data) => {
//             // One trick/cheat to put multiple type icons into cards. Because appending child did not work.
//             if (data.types.length > 1) {
//               const pokemon = {
//                 name: data.name,
//                 image: data.sprites.other.home.front_default,
//                 poketype: data.types[0].type.name,
//                 poketype2: data.types[1].type.name,
//               };
//               return addPokeCard2(pokemon);
//             } else {
//               const pokemon = {
//                 name: data.name,
//                 image: data.sprites.other.home.front_default,
//                 poketype: data.types[0].type.name,
//               };
//               return addPokeCard(pokemon);
//             }
//           })
//           .catch((err) => {
//             errorMsg(err);
//           });
//       });
//     });
// };

// nextPage.addEventListener("click", (btn) => {
//   fetch(`${btn.target.id}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Pokemon not found");
//       } else return response.json();
//     })
//     .then((data) => {
//       // One trick/cheat to put multiple type icons into cards. Because appending child did not work.
//       if (data.types.length > 1) {
//         const pokemon = {
//           name: data.name,
//           image: data.sprites.other.home.front_default,
//           poketype: data.types[0].type.name,
//           poketype2: data.types[1].type.name,
//         };
//         return addPokeCard2(pokemon);
//       } else {
//         const pokemon = {
//           name: data.name,
//           image: data.sprites.other.home.front_default,
//           poketype: data.types[0].type.name,
//         };
//         return addPokeCard(pokemon);
//       }
//     });
// });
// prevPage.addEventListener("click", (e) => {
//   fetch(`${e.id}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Pokemon not found");
//       } else return response.json();
//     })
//     .then((data) => {
//       // One trick/cheat to put multiple type icons into cards. Because appending child did not work.
//       if (data.types.length > 1) {
//         const pokemon = {
//           name: data.name,
//           image: data.sprites.other.home.front_default,
//           poketype: data.types[0].type.name,
//           poketype2: data.types[1].type.name,
//         };
//         return addPokeCard2(pokemon);
//       } else {
//         const pokemon = {
//           name: data.name,
//           image: data.sprites.other.home.front_default,
//           poketype: data.types[0].type.name,
//         };
//         return addPokeCard(pokemon);
//       }
//     });
// });
// const getPokemon = () => {
//   fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Pokemon not found");
//       } else return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const everyPokemon = data.results;
//       everyPokemon.forEach((obj) => {
//         fetch(`${obj.url}`)
//           .then((res) => {
//             if (!res.ok) {
//               throw new Error("Pokemon not found");
//             } else return res.json();
//           })
//           .then((data) => {
//             console.log(data);
//             // One trick/cheat to put multiple type icons into cards. Because appending child did not work.
//             if (data.types.length > 1) {
//               const pokemon = {
//                 name: data.name,
//                 image: data.sprites.other.home.front_default,
//                 poketype: data.types[0].type.name,
//                 poketype2: data.types[1].type.name,
//               };
//               return addPokeCard2(pokemon);
//             } else {
//               const pokemon = {
//                 name: data.name,
//                 image: data.sprites.other.home.front_default,
//                 poketype: data.types[0].type.name,
//               };
//               return addPokeCard(pokemon);
//             }
//           })
//           .catch((err) => {
//             errorMsg(err);
//           });
//       });
//     });
// };

gen.forEach((btn) => {
  btn.addEventListener("click", () => {
    const startId = btn.getAttribute("data-value");
    const endId = btn.getAttribute("data-value2");
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${endId}&offset=${startId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokemon not found");
        } else return response.json();
      })
      .then((data) => {
        console.log(data);
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
            })
            .catch((err) => {
              errorMsg(err);
            });
        });
      });
  });
});

// getPokemon();
search.addEventListener("keyup", filterCards);
