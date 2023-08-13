import { removeNavOnMobile } from "./clearContent";
import createNav from "../components/nav/nav";
import switchTabs from "./switchTabs";
import { attachEventListenersForAddProjectForm } from "./eventHandler";

function toggleNav(){
    let isNavOpen = true;

    const hamburger = document.querySelector(".hamburger-icon");
    
    hamburger.addEventListener("click", ()=>{
        if(isNavOpen){
            removeNavOnMobile();
            isNavOpen = false;
        } else {
            createNav();
            isNavOpen = true;
            const nav = document.querySelector(".nav")
            const header = document.querySelector(".header"); 
            header.insertAdjacentElement("afterend", nav);  
            switchTabs();
            attachEventListenersForAddProjectForm();
        }
    })
}

export default toggleNav;