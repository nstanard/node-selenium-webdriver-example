
// https://www.npmjs.com/package/selenium-webdriver
// NOTE: You have to npm i first...
// NOTE: You have to `brew install geckodriver` first... (for firefox)
// NOTE: You have to `brew install chromedriver` then cd to the executable path and `xattr -d com.apple.quarantine <name-of-executable>`
//  - https://stackoverflow.com/questions/60362018/macos-catalinav-10-15-3-error-chromedriver-cannot-be-opened-because-the-de

// https://user-agents.net/bots

// https://intellipaat.com/community/6021/change-user-agent-for-selenium-driver
const {Builder, By, Key, Options} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

// https://intellipaat.com/community/6021/change-user-agent-for-selenium-driver
/// https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Builder.html#setChromeOptions
var chromeCapabilities = webdriver.Capabilities.chrome();
// set user agent to: 12345 MRA 5.4 (build 02647);
var chromeOptions = {
  'args': ["user-agent=12345 MRA 5.4 (build 02647);"]
}; // GoogleAuth/1.4 (osprey_umts MPIS24.65-33.1-2-16); gzip,gzip(gfe),gzip(gfe)
// https://github.com/SeleniumHQ/selenium/commit/4c8646cde1dcebbf2665b676aa5ce010c6598dce

// COMMENT THIS IN/OUT TO TEST
// chromeCapabilities.set('goog:chromeOptions', chromeOptions);

(async function example() {
  const driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
  // const driver = await new Builder()
  // .setChromeOptions(chromeOptions)
  // .forBrowser('chrome')
  // .build();

  try {
    // Navigate to Url
    await driver.get('http://localhost:3100/auth');

    const agent = driver.executeScript("return navigator.userAgent")
    agent.then(agent => {
      console.log(agent);
    });

    // Enter text "webdriver" and perform keyboard action "Enter"
    const username = await driver.findElement(By.name('username'));
    const password = await driver.findElement(By.name('password'));
    // await driver.findElement(By.name('password')).submit();
  }
  finally {
    // await driver.quit();
  }
})();
