import { removeNavOnMobile } from "./clearContent";
import createNav from "../components/nav/nav";
import { switchTabs } from "./switchTabs";
import { attachEventListenersForAddProjectForm , attachProjectTabEventListeners, attachEventListenersForDeleteProjects } from "./eventHandler";

function toggleNav(){
    let isNavOpen = true;

    const hamburger = document.querySelector(".hamburger-icon");
    
    hamburger.addEventListener("click", ()=>{
        if(isNavOpen){
            const nav = document.querySelector(".nav");
            nav.classList.remove("opened");
            nav.classList.add("closed");
            setTimeout(()=>{
                removeNavOnMobile();
            }, 1000);
            isNavOpen = false;
        } else {
            createNav();
            isNavOpen = true;
            const nav = document.querySelector(".nav")
            const header = document.querySelector(".header"); 
            header.insertAdjacentElement("afterend", nav);  
            switchTabs();
            attachEventListenersForAddProjectForm();
            attachProjectTabEventListeners();
            attachEventListenersForDeleteProjects();
        }
    })
}

export default toggleNav;