const navBtn = document.querySelector(".burger");
const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2");
const burgToggle = document.querySelector(".burgerToggledCon")
const navspan = document.querySelector(".navli");
const navContainer = document.querySelector(".navInfo");

function toggleNav() {
    m2.classList.toggle("mToggle");
    m1.classList.toggle("mToggle2");
    burgToggle.classList.toggle("burgerNavToggled");
}

function toggleNavLi() {
    navContainer.classList.toggle("toggled");
}

navBtn.addEventListener("click", toggleNav)
navspan.addEventListener("click", toggleNavLi)