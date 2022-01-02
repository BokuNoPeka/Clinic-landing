const burgerBtn = document.querySelector(".header__menu-button");
const burgerMenu = document.querySelector(".burger");

burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger_active")
    burgerBtn.classList.toggle("header__menu-button_active")
})
