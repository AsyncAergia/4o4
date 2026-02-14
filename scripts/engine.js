import { errorPagesArray, prankPercentage } from "./constants.js";

export function startPrank(tabId, changeInfo, tabInfo) {
    if(!isUrlChange(changeInfo))    return;
    if(!shouldPrank)    return;
    updateTabTo404();
}

function getRandomPrank() {
    const max = errorPagesArray.length-1;
    const min = 0;

    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomErrorPage = errorPagesArray[randomIndex];

    return randomErrorPage;
}

function isUrlChange(changeInfo) {
    if(changeInfo.pinned !== undefined) return true;
    else return false;
}

function shouldPrank() {
    const shouldPrank = (Math.random() * 100) < prankPercentage;
    return shouldPrank;
}   

function updateTabTo404() {
  const newErrorUrl = getRandomPrank();
  
    browser.tabs.update(
        {url: newErrorUrl}
    );
}