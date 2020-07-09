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
    })
})
