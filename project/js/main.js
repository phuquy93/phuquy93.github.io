"use strict"
document.addEventListener("DOMContentLoaded",function() {
    let elmMenu = document.querySelector(".header"),
    status = true;
    window.addEventListener("scroll",()=>{
        let x = pageYOffset;
        if(x>150){
            if(status==true){
                elmMenu.classList.add("menu-active");
                elmMenu.classList.remove("header-area");
                status=false;
            }
        }else {
            if(status==false){
                elmMenu.classList.remove("menu-active");
                elmMenu.classList.add("header-area");
                status=true;
            }
        }
    });

    const elmSearch = document.querySelector(".search");
    const elmCloseSearch = document.querySelector(".searchclose-link");
    elmSearch.addEventListener("click",()=>{
        document.querySelector(".new-search-wrap").classList.add("open");
        document.querySelector(".wrapper").classList.add("show");
    });
    elmCloseSearch.addEventListener("click",()=>{
        document.querySelector(".new-search-wrap").classList.remove("open");
        document.querySelector(".wrapper").classList.remove("show");
    });

    setTimeout(()=>{
        document.querySelector(".box-loader").style.opacity="0";
        document.querySelector(".box-loader").style.visibility="hidden";
    },3000);

    const elmBtnMenuSp = document.getElementById("nav-icon3");
    const elmMenu2 = document.querySelector(".menu");
    elmBtnMenuSp.addEventListener("click",()=>{
        document.querySelector(".wrapper").classList.toggle("mm-wrapper_opened");
        document.querySelector(".wrapper").classList.toggle("show");
        elmMenu2.classList.toggle("mm-panel_opened");
    })
})
