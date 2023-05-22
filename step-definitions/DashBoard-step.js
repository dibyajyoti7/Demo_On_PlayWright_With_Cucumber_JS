const { Given, When, Then, defineStep } = require('@cucumber/cucumber');
const { LogInPage } = require('../Page-objects/logInPage');
const { DashboardPage } = require('../Page-objects/DashboardPage');

const LogIn = new LogInPage();
const DashBoard = new DashboardPage();


defineStep('user should see the dashboard page', async function () {
  console.log('step - 3 should see the home page')
  await DashBoard.DashBoardPageValidation();
});

defineStep('user will click on Proceed button', async function () {
  await DashBoard.clickOnProceedButton();
});

defineStep('user click on "Loan" page',  async function () {
  await DashBoard.clickOnLoanButton();
});


