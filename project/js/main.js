"use strict";document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{document.querySelector(".box-loader").style.opacity="0",document.querySelector(".box-loader").style.visibility="hidden"},3e3);let e=document.querySelector(".header"),t=!0;window.addEventListener("scroll",()=>{pageYOffset>150?1==t&&(e.classList.add("menu-active"),e.classList.remove("header-area"),t=!1):0==t&&(e.classList.remove("menu-active"),e.classList.add("header-area"),t=!0)});let c=window.pageYOffset;window.onscroll=function(){let e=window.pageYOffset;c>e?(document.querySelector(".header").style.top="0",document.querySelector(".header").style.transition="all .3s"):(document.querySelector(".header").style.top="-71px",document.querySelector(".header").style.transition="all .3s"),c=e};const o=document.querySelector(".search"),r=document.querySelector(".searchclose-link");o.addEventListener("click",()=>{document.querySelector(".new-search-wrap").classList.add("open"),document.querySelector(".wrapper").classList.add("show")}),r.addEventListener("click",()=>{document.querySelector(".new-search-wrap").classList.remove("open"),document.querySelector(".wrapper").classList.remove("show")});const s=document.getElementById("nav-icon3"),n=document.querySelector(".menu");s.addEventListener("click",()=>{document.querySelector(".wrapper").classList.toggle("mm-wrapper_opened"),document.querySelector(".wrapper").classList.toggle("show"),n.classList.toggle("mm-panel_opened")});const a=document.querySelector(".btnPhone"),l=document.querySelector(".btnPopup"),d=document.querySelector(".popup-contact"),u=document.querySelector(".register-now"),i=document.querySelector(".block-contact__close"),m=document.querySelector(".block-contact__close2");a.addEventListener("click",()=>{d.classList.add("active"),document.querySelector(".wrapper").classList.add("show")}),i.addEventListener("click",()=>{d.classList.remove("active"),document.querySelector(".wrapper").classList.remove("show")}),l.addEventListener("click",()=>{u.classList.add("active"),document.querySelector(".wrapper").classList.add("show")}),m.addEventListener("click",()=>{u.classList.remove("active"),document.querySelector(".wrapper").classList.remove("show")})});