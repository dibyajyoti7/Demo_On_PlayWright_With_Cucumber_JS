const { expect } = require("chai");

class DashboardPage {

   constructor() {
      this.DashboardPageProceedButton = "(//span[text()='Proceed'])[2]";
      this.DashboardPageLoansButton = "(//p[text()='Loans'])";
   }
   async DashBoardPageValidation() {
      let proceedText = await page.locator(this.DashboardPageProceedButton).textContent();
      console.log(proceedText);
      await expect(proceedText).to.be.equal('Proceed');
      console.log('Land on Dashboard Page');
   }
   async clickOnProceedButton() {
      await page.locator(this.DashboardPageProceedButton).click();
      console.log('Click on proceed button');
   }
   async clickOnLoanButton() {
      await page.locator(this.DashboardPageLoansButton).click();
      console.log('Click on proceed button');
   }

};

module.exports = { DashboardPage };
