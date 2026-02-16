import {errorPagesArray, prankPercentage} from './constants'

export function startPrank(
     _tabId: number,
    changeInfo: Browser.tabs.OnUpdatedInfo 
) {
    if(!isUrlChange(changeInfo))    return;
    if(!shouldPrank())    return;
    updateTabTo404();
}

function getRandomPrank() {
    const max = errorPagesArray.length-1;
    const min = 0;

    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomErrorPage = errorPagesArray[randomIndex];
    const url = browser.runtime.getURL(randomErrorPage);
    return url;
}

function isUrlChange(changeInfo: Browser.tabs.OnUpdatedInfo ) {
    if(changeInfo?.pinned) return true;
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
