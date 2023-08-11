import { removeNavOnMobile } from "./clearContent";
import createNav from "../components/nav/nav";

function toggleNav(){
    let isNavOpen = true

    const hamburger = document.querySelector(".hamburger-icon");
    
    hamburger.addEventListener("click", ()=>{
        if(isNavOpen){
            removeNavOnMobile()
            isNavOpen = false
        } else {
            createNav()
            isNavOpen = true
            const nav = document.querySelector(".nav")
            const header = document.querySelector(".header"); 
            header.insertAdjacentElement("afterend", nav);
        }
    })
};

export default toggleNav;