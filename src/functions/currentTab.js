let currentTab = "";

function getCurrentTab(){
    return currentTab;
}

function setCurrentTab(tab){
    currentTab = tab;
    console.log(currentTab);
}

export {getCurrentTab, setCurrentTab,}