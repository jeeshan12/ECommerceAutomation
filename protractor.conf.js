const { SpecReporter } = require("jasmine-spec-reporter");
const path = require("path");
const fs = require("fs");

exports.config = {
  baseUrl: "http://automationpractice.com/index.php",
  allScriptsTimeout: 11000,
  restartBrowserBetweenTests: true,
  specs: ["./src/tests/**/*-spec.js"],
  capabilities: {
    browserName: "chrome",
    shardTestFiles: false,
    maxInstances: 3,
    chromeOptions: {
      args: [
        "--no-sandbox",
        "--disable-dev-shm-usage",
      ],
    }
  },
  directConnect: true,
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
    print: function () { }
  },
  onPrepare: function () {

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: "raw"
        }
      })
    );
  }
};
