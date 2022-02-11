
"usestrict";



const modalBtn = document.querySelector(".header__info_btn");
const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector (".modal-window");
const bannerBtn = document.querySelector (".banner__btn_menu");

modalBtn.addEventListener("click", () => {
 modalWindow.classList.add("modal-window__show");
});


closeBtn.addEventListener("click", () => {
    modalWindow.classList.remove("modal-window__show");
});

bannerBtn.addEventListener("click", () => {
    window.location.replace('/#menu');
});