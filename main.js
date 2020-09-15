"use strict";
//navbar창 스크롤 이벤트
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  /*
  console.log(window.scrollY);
  console.log(`Hegiht: ${navbarHeight}`);
*/
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
//클릭하면 해당하는 곳으로 넘어가기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollTo(link);
});
// home contact btn 클릭시 Contact로 이동
const ContactBtn = document.querySelector(".home__contact");
ContactBtn.addEventListener("click", () => {
  scrollTo("#Contact");
});

function scrollTo(Selector) {
  const scrollTo = document.querySelector(Selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
