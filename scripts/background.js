import { shouldPrank } from "./engine.js";

const filter = {
  properties: ["pinned"],
};

browser.tabs.onUpdated.addListener(
  shouldPrank,
  filter
)

