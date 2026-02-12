const filter = {
  properties: ["url"],
};

browser.tabs.onUpdated.addListener(
  updateTabTo404,
  filter
)

function updateTabTo404() {
    browser.tabs.update(
        {url: '../assets/404_trial.html'}
    );
}