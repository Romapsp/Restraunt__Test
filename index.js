
"usestrict";



const modalBtn = document.querySelector(".header__order-btn");
const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector (".modal-window");
const bannerBtn = document.querySelector (".banner__btn_menu");
const celebrateBtn = document.querySelector(".order__btn");

modalBtn.addEventListener("click", () => {
 modalWindow.classList.add("modal-window__show");
});


closeBtn.addEventListener("click", () => {
    modalWindow.classList.remove("modal-window__show");
});

celebrateBtn.addEventListener("click", () => {
    modalWindow.classList.add("modal-window__show");
   });
   
   
   closeBtn.addEventListener("click", () => {
       modalWindow.classList.remove("modal-window__show");
   });

bannerBtn.addEventListener("click", () => {
    window.location.replace('/#menu');
});
///////////////////////////////////////////////////////
const header = document.querySelector (".header");
const links = document.querySelectorAll (".header__link");
const info = document.querySelector (".header__info");
const phone = document.querySelector (".header__phone-number");
const cart = document.querySelector (".header__cart-icon");
const phoneText = document.querySelector (".header__phone");

document.addEventListener("scroll", () => {
    if (window.pageYOffset !== 0) {
        header.classList.add("header_white");
        links.forEach(item => {
            item.classList.add("header__link_white");
        });
        info.classList.add("header__info_white");
        phone.classList.add("header__phone-number_white");
        cart.classList.add("header__cart-icon_white");
        phoneText.classList.add("header__phone_white");
    } else {
        header.classList.remove("header_white");
        links.forEach(item => {
            item.classList.remove("header__link_white");
        });
        info.classList.remove("header__info_white");
        phone.classList.remove("header__phone-number_white");
        cart.classList.remove("header__cart-icon_white");
        phoneText.classList.remove("header__phone_white");

    }
});
//////////////////////////////////////////////////////////
const imgBig = document.querySelectorAll(".meals__img-big");
const imgSmall = document.querySelectorAll(".meals__img-small");

imgSmall.forEach((small, index) => {
    small.addEventListener("click", () => {
        imgBig.forEach(big => {
            big.classList.remove("meals__img-big_active");
        });
        imgBig[index].classList.add("meals__img-big_active");
    });
});