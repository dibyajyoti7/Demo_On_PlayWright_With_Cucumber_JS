const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { LogInPage } = require('../Page-objects/logInPage');
const { DashboardPage } = require('../Page-objects/DashboardPage');
const DEFAULT_TIMEOUT=require('@cucumber/cucumber')
DEFAULT_TIMEOUT.setDefaultTimeout(60000)

const LogIn = new LogInPage();
const DashBoard = new DashboardPage();


defineStep('user is on login page', async function () {
  await console.log('step - I visit a login page');
  await LogIn.goToLogInPage();
});

defineStep('{string} enter the valid credentials and click on sign in button', async function (string) {
  console.log('step - 2 fill the login form with valid credentials');
  await page.waitForTimeout(3000);
  if (string.includes('originator')) {
    await LogIn.LogInAsORG();
  }
  else if (string.includes('Lat')) {
    await LogIn.LogInAsLAT();
  }
  else if (string.includes('Treasurer')) {
    await LogIn.LogInAsTreasurer();
  }
});

defineStep('user logs out of the system', async function () {
  console.log("from the 'user logs out of the system' ")
  await LogIn.userLogsOut();
});

// And user logs in as "LAT"

defineStep('user logs in as {string}', async function (string) {
  console.log("from the 'user logs in as {string}' ")
  if (string == "LAT") {

    await LogIn.reloginAsLATinUAT();
  }

  else if (string == "Originator") {
    await LogIn.reloginAsOriginatorInUAT();

  }

});
