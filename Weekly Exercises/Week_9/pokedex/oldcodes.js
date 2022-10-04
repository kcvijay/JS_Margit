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
