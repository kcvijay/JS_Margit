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
//***//******************************************************************************** */ */
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

// getPokemon();

// gens.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const startId = btn.getAttribute("data-value");
//     const endId = btn.getAttribute("data-value2");
//     fetch(`https://pokeapi.co/api/v2/pokemon/generation/${startId}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Pokemon not found");
//         } else return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         const everyPokemon = data.results;
//         everyPokemon.map((obj) => {
//           fetch(`${obj.url}`)
//             .then((res) => {
//               if (!res.ok) {
//                 throw new Error(res.status);
//               } else {
//                 return res.json();
//               }
//             })
//             .then((data) => {
//               console.log(data);
//               // One trick/cheat to put multiple type icons into cards. Because appending child did not work.
//               if (data.types.length > 1) {
//                 const pokemon = {
//                   name: data.name,
//                   image: data.sprites.other.home.front_default,
//                   poketype: data.types[0].type.name,
//                   poketype2: data.types[1].type.name,
//                 };
//                 return addPokeCard2(pokemon);
//               } else {
//                 const pokemon = {
//                   name: data.name,
//                   image: data.sprites.other.home.front_default,
//                   poketype: data.types[0].type.name,
//                 };
//                 return addPokeCard(pokemon);
//               }
//             })
//             .catch((err) => {
//               errorMsg(`Something went wrong. ${err.message}`);
//             });
//         });
//       });
//   });
// });
/**************************** */
// gens.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     cards.innerHTML = "";
//     const genId = btn.getAttribute("data-value");
//     fetch(`https://pokeapi.co/api/v2/generation/${genId}`).then((response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       } else return response.json();
//     });
//     let allRequests = data.pokemon_species.map((eachPokemon) => {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${eachPokemon.name}`);
//     });
//     Promise.all(allRequests)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(res.status);
//         } else return res.json();
//       })
//       .then((data) => {
//         if (data.types.length > 1) {
//           const pokemon = {
//             name: data.name,
//             image: data.sprites.other.home.front_default,
//             id: data.id,
//             poketype: data.types[0].type.name,
//             poketype2: data.types[1].type.name,
//             weight: Number(data.weight / 10),
//             height: Number(data.height / 10),
//             experience: data.base_experience,
//           };
//           return addPokeCard2(pokemon);
//         } else {
//           const pokemon = {
//             name: data.name,
//             image: data.sprites.other.home.front_default,
//             id: data.id,
//             poketype: data.types[0].type.name,
//             weight: Number(data.weight / 10),
//             height: Number(data.height / 10),
//             experience: data.base_experience,
//           };
//           return addPokeCard(pokemon);
//         }
//       });
//   });
// });

/************************* */
//   .then((data) => {
//     document.querySelector(
//       "#numberOfCards"
//     ).innerHTML = `This generation has </strong>${data.pokemon_species.length}</strong> Pokemons.`;
//     data.pokemon_species.map((eachPokemon) => {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${eachPokemon.name}`)
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error(res.status);
//           } else return res.json();
//         })
//         .then((data) => {
//           if (data.types.length > 1) {
//             const pokemon = {
//               name: data.name,
//               image: data.sprites.other.home.front_default,
//               id: data.id,
//               poketype: data.types[0].type.name,
//               poketype2: data.types[1].type.name,
//               weight: Number(data.weight / 10),
//               height: Number(data.height / 10),
//               experience: data.base_experience,
//             };
//             return addPokeCard2(pokemon);
//           } else {
//             const pokemon = {
//               name: data.name,
//               image: data.sprites.other.home.front_default,
//               id: data.id,
//               poketype: data.types[0].type.name,
//               weight: Number(data.weight / 10),
//               height: Number(data.height / 10),
//               experience: data.base_experience,
//             };
//             return addPokeCard(pokemon);
//           }
//         });
//     });
//   });

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
