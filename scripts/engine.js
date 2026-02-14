import { errorPagesArray } from "./constants.js";
import { prankPercentage } from "./constants.js";

function getRandomPrank() {
    const max = errorPagesArray.length-1;
    const min = 0;

    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomErrorPage = errorPagesArray[randomIndex];

    return randomErrorPage;
}

export function shouldPrank() {
    const shouldPrank = (Math.random() * 100) < prankPercentage;
    if(shouldPrank) updateTabTo404();
}   

function updateTabTo404() {
  const newErrorUrl = getRandomPrank();
  
    browser.tabs.update(
        {url: newErrorUrl}
    );
}