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
  navbarMenu.classList.remove("toggle"); //클릭하면 넷바창 닫히게 하기
  scrollTo(link);
});
//responsive toggle button
const togglebtn = document.querySelector(".navbar__toggle-btn");
//const navbarMenu = document.querySelector(".navbar__menu");
togglebtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("toggle");
});
// home contact btn 클릭시 Contact로 이동
const ContactBtn = document.querySelector(".home__contact");
ContactBtn.addEventListener("click", () => {
  scrollTo("#Contact");
});
//홈화면 스코롤시 투명하게
const home = document.querySelector(".Home__container");
const homeHeight = home.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  console.log(homeHeight);
  console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
//어느정도 스크롤 되면 에로우버튼 생성
const arrowbutton = document.querySelector(".arrowbtn");
document.addEventListener("scroll", () => {
  if (1 - window.scrollY / homeHeight > 0) {
    arrowbutton.classList.remove("visible");
  } else {
    arrowbutton.classList.add("visible");
  }
});
arrowbutton.addEventListener("click", () => {
  scrollTo("#Home");
});
//project button
const workbtncontainer = document.querySelector(".work__Categories");
const workprojects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
const workactivebtn = document.querySelector(".work__Categories");
const workactive = document.querySelector(".category__btn.active");
const workaddedactive = document.querySelector("category__btn");
workbtncontainer.addEventListener("click", (e) => {
  const filtertarget =
    e.target.dataset.filter || e.target.parentNode.dataset.filter;
  console.log(filtertarget);
  if (filtertarget == null) {
    return;
  }
  //버튼 클릭시 색깔 넘어가기
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");
  //필터링 애니메이션
  workprojects.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      console.log(project.dataset.type);
      if (filtertarget === "*" || filtertarget === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });

    workprojects.classList.remove("anim-out");
  }, 300);
});

function scrollTo(Selector) {
  const scrollTo = document.querySelector(Selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
