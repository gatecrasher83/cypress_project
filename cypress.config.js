const { defineConfig } = require("cypress");

module.exports = async () => {
  // your method for building the urls/names
  let urls = await getSnapshotUrls();
  return urls.map(url => ({ name: url, url }));
}

module.exports = defineConfig({
  projectId: 'tphdy6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://80.69.180.108:8441'
  },
});
