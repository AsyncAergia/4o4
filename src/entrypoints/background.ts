import {startPrank} from '../utils/engine'


export default defineBackground(() => {
  browser.tabs.onUpdated.addListener(startPrank);
});
