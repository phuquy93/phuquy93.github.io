"use strict"

document.addEventListener("DOMContentLoaded", function () {
    
    // let prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     let currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.querySelector(".header").style.top = "0";
    //         document.querySelector(".header").style.transition = "all .3s";
    //     } else {
    //         document.querySelector(".header").style.top = "-71px";
    //         document.querySelector(".header").style.transition = "all .3s";
    //     }
    //     prevScrollpos = currentScrollPos;
    // }

    let elmMenu = document.querySelector(".header"),
        status = true;
    window.addEventListener("scroll", () => {
        let x = pageYOffset;
        if (x > 150) {
            if (status == true) {
                elmMenu.classList.add("menu-active");
                elmMenu.classList.remove("header-area");
                status = false;
            }
        } else {
            if (status == false) {
                elmMenu.classList.remove("menu-active");
                elmMenu.classList.add("header-area");
                status = true;
            }
        }
    });

    const elmSearch = document.querySelector(".search");
    const elmCloseSearch = document.querySelector(".searchclose-link");
    elmSearch.addEventListener("click", () => {
        document.querySelector(".new-search-wrap").classList.add("open");
        document.querySelector(".wrapper").classList.add("show");
    });
    elmCloseSearch.addEventListener("click", () => {
        document.querySelector(".new-search-wrap").classList.remove("open");
        document.querySelector(".wrapper").classList.remove("show");
    });

    const elmBtnMenuSp = document.getElementById("nav-icon3");
    const elmMenu2 = document.querySelector(".menu");
    elmBtnMenuSp.addEventListener("click", () => {
        document.querySelector(".wrapper").classList.toggle("mm-wrapper_opened");
        document.querySelector(".wrapper").classList.toggle("show");
        elmMenu2.classList.toggle("mm-panel_opened");
    });

    // Toggle popup contact 
    const elmBtnPhone = document.querySelector(".btnPhone");
    const elmPopupContact = document.querySelector(".popup-contact");
    const elmblockContactClose = document.querySelector(".block-contact__close");
    elmBtnPhone.addEventListener("click",()=>{
        elmPopupContact.classList.add("active");
        document.querySelector(".wrapper").classList.add("show");
    });
    elmblockContactClose.addEventListener("click",()=>{
        elmPopupContact.classList.remove("active");
        document.querySelector(".wrapper").classList.remove("show");
    });
});
// Scroll to top Jquery
$('.btnTop').click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});
