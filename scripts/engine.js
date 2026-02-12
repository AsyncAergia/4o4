import { errorPagesArray } from "./constants.js";

export function getRandomPrank() {
    const max = errorPagesArray.length-1;
    const min = 0;

    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomErrorPage = errorPagesArray[randomIndex];

    return randomErrorPage;
}