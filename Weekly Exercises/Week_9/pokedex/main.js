const cards = document.querySelector(".cards");
const card = document.querySelectorAll(".card");
const errTxt = document.querySelector(".errorTxt");
const search = document.querySelector("#search");

const addPokeCard = (obj) => {
  const cardData = `
    <div class="card">
    <img src="${obj.sprites.other.home.front_default}"/>
    <p class="name">${obj.name}</p>
  </div>`;

  cards.insertAdjacentHTML("beforeend", cardData);
};

// const searchPokeCard = () => {
//   const cards = document.querySelector(".cards");
//   let filter = search.value.toUpperCase();
//   for (const card in cards) {
//     let cardName = card.querySelector(".name");
//     if (cardName.textContent.toUpperCase().indexOf(filter) > -1) {
//       return (card.style.display = "block");
//     } else {
//       return (card.style.display = "none");
//     }
//   }
// };

// function filterPokeCards(e) {
//   card.forEach((item) => {
//     item.style.display = "none";
//     if (cardName.textContent.includes(e.target.value)) {
//       return (item.style.display = "block");
//     } else {
//       return;
//     }
//   });
// }

const filterCards = () => {
  let filter = search.value;
  for (let i = 0; i < card.length; i++) {
    let cardName = card[i].querySelector(".name");
    if (cardName.innerText.indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
};

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
      errorMsg(err);
    });
};

getPokemon();
search.addEventListener("keyup", filterCards);
