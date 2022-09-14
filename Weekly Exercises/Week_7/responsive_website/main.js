const header = document.querySelector("header");

const menu = document.querySelector(".ham-menu");
const nav = document.querySelector("nav");

const menuBtns = document.querySelectorAll(".btnMenu");

const btnToTop = document.querySelector("#toTop");

const sideLinks = document.querySelector(".sidebar-links");

const body = document.querySelector("body");
const modal = document.querySelector("#modal");
const btnModalOpen = document.querySelector("#btnModal");
const btnModalClose = document.querySelector("#modal-close");

//  {
//   // if ((nav.style.display = "none")) {
//   //   nav.style.display = "block";
//   // } else {
//   //   nav.style.display = "none";
//   // }
// });

const mobMenu = () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

for (const link of menuBtns) {
  link.addEventListener("click", mobMenu);
}

menu.addEventListener("click", mobMenu);

btnModalOpen.addEventListener("click", () => {
  modal.style.display = "block";
  window.style.backgroundColor = "#333333";
});
btnModalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

/*for (let i = 0; i < menuBtns.length; i++) {
  menuBtns[i].addEventListener("click", () => {
    nav.style.display = "none";
  });
}*/

window.onscroll = function () {
  scrollFunction();
  revealToTop();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
}

function revealToTop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnToTop.style.display = "block";
    sideLinks.style.display = "flex";
  } else {
    btnToTop.style.display = "none";
    sideLinks.style.display = "none";
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

btnToTop.addEventListener("click", getToTop);
