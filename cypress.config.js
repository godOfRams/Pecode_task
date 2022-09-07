const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  env: {
    login: "login",
    password: "password"
  },
  e2e: {
    baseUrl: "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
  }
});
