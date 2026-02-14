import "./browser-polyfill.min.js";
import { startPrank } from "./engine.js";

let updated = browser.tabs.onUpdated.addListener(startPrank);

