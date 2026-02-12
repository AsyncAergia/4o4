import { getRandomPrank } from "./engine.js";

const filter = {
  properties: ["url"],
};

browser.tabs.onUpdated.addListener(
  updateTabTo404,
  filter
)

function updateTabTo404() {
  const newErrorUrl = getRandomPrank();
  
    browser.tabs.update(
        {url: newErrorUrl}
    );
}