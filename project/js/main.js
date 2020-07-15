"use strict"
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".box-loader").style.opacity = "0";
        document.querySelector(".box-loader").style.visibility = "hidden";
    }, 3000);

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

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".header").style.top = "0";
            document.querySelector(".header").style.transition = "all .3s";
        } else {
            document.querySelector(".header").style.top = "-71px";
            document.querySelector(".header").style.transition = "all .3s";
        }
        prevScrollpos = currentScrollPos;
    }

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

    // const elmMenuItem = document.querySelectorAll(".menu > ul > li > a");
    // elmMenuItem.forEach(item => {
    //     item.addEventListener("click", () => {
    //         item.parentElement.classList.toggle("is-open");
    //     })
    // })

    // Toggle popup contact 
    const elmBtnPhone = document.querySelector(".btnPhone");
    const elmBtnPopup = document.querySelector(".btnPopup");
    const elmPopupContact = document.querySelector(".popup-contact");
    const elmRegisterNow = document.querySelector(".register-now");
    const elmblockContactClose = document.querySelector(".block-contact__close");
    const elmblockContactClose2 = document.querySelector(".block-contact__close2");
    elmBtnPhone.addEventListener("click",()=>{
        elmPopupContact.classList.add("active");
        document.querySelector(".wrapper").classList.add("show");
    });
    elmblockContactClose.addEventListener("click",()=>{
        elmPopupContact.classList.remove("active");
        document.querySelector(".wrapper").classList.remove("show");
    });
    elmBtnPopup.addEventListener("click",()=>{
        elmRegisterNow.classList.add("active");
        document.querySelector(".wrapper").classList.add("show");
    });
    elmblockContactClose2.addEventListener("click",()=>{
        elmRegisterNow.classList.remove("active");
        document.querySelector(".wrapper").classList.remove("show");
    });
})
