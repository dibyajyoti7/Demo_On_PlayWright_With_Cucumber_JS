const { expect } = require("chai");
const fs = require('fs');



class LogInPage {
    constructor() {
        this.OrgUser;
        this.LATUser;
        this.Password;
        this.TreasurerUser;
        this.TreasurerPassword;
        this.logInPageUserNameBox = "//input[@id='usernameUserInput']";
        this.logInPagePasswordNameBox = "//input[@id='password']";
        this.logInPageCheckBox = "(//span[contains(@class,'rdg-checkbox')])[1]";
        this.SignInButton = 'button[role="button"]:has-text("Sign In")';
        this.AfterLogInPopUp = '(//button[contains(@data-testid,"primaryBtn")])[1]';
        this.LoanOriginatorPlatform = '//span[text()="Loan Originator Platform"]';
        this.profileButton = "(//div[@id='profileImage'])[1]";
        this.signOutBtn = "//span[text()='Signout']";

    }
    async goToLogInPage() {

        console.log('entering the url');
        await page.goto('https://uat.toorakcapital.info/');

    }

    async LogInAsORG() {
        fs.readFile('./Page-objects/prop.json', 'utf-8', async (err, jsonString) => {
            if (err) {
                console.log(err)
            }
            else {
                const data = JSON.parse(jsonString);
                this.OrgUser = data.LMN_ORG_User;
                this.Password = data.LMN_Password;
                console.log(this.OrgUser, this.Password);
                console.log('Logging in as Originator user');
                console.log('Org User Name is ' + this.OrgUser);
                console.log('Org password is ' + this.Password);
                await page.locator(this.logInPageUserNameBox).fill(this.OrgUser);
                console.log('user name entered');
                await page.locator(this.logInPagePasswordNameBox).fill(this.Password);
                console.log('password entered');
            }
        })
        await page.locator(this.logInPageCheckBox).click();
        console.log('checked box clicked');
        await page.locator(this.SignInButton).click();
        console.log('sign in button clicked');
        try {
            await page.locator(this.AfterLogInPopUp).click();
        }
        catch (error) {
        }
        console.log('important button clicked');
    }

    async LogInAsLAT() {
        fs.readFile('./Page-objects/prop.json', 'utf-8', async (err, jsonString) => {
            if (err) {
                console.log(err)
            }
            else {
                const data = JSON.parse(jsonString);
                this.LATUser = data.LMN_LAT_User;
                this.Password = data.LMN_Password;
                console.log(this.LATUser, this.Password);
                console.log('Logging in as LAT user');
                console.log('LAT User Name is ' + this.LATUser);
                console.log('LAT password is ' + this.Password);
                await page.locator(this.logInPageUserNameBox).fill(this.LATUser);
                console.log('user name entered');
                await page.locator(this.logInPagePasswordNameBox).fill(this.Password);
                console.log('password entered');
            }
        })
        await page.locator(this.logInPageCheckBox).click();
        console.log('checked box clicked');
        await page.locator(this.SignInButton).click();
        console.log('sign in button clicked');
        try {
            await page.locator(this.AfterLogInPopUp).click();
        }
        catch (error) {
        }
        console.log('important button clicked');
        await page.locator(this.LoanOriginatorPlatform).click();
        console.log('Loan Originator Platform button clicked');
    }
    async LogInAsTreasurer() {
        fs.readFile('./Page-objects/prop.json', 'utf-8', async (err, jsonString) => {
            if (err) {
                console.log(err)
            }
            else {
                const data = JSON.parse(jsonString);
                this.TreasurerUser = data.Treasurer_User;
                this.TreasurerPassword = data.Treasurer_Password;
                console.log('Logging in as LAT user');
                console.log('Treasurer User Name is ' + this.TreasurerUser);
                console.log('treasurer password is ' + this.TreasurerPassword);
                await page.locator(this.logInPageUserNameBox).fill(this.TreasurerUser);
                console.log('user name entered');
                await page.locator(this.logInPagePasswordNameBox).fill(this.TreasurerPassword);
                console.log('password entered');
            }
        })
        await page.locator(this.logInPageCheckBox).click();
        console.log('checked box clicked');
        await page.locator(this.SignInButton).click();
        console.log('sign in button clicked');
        try {
            await page.locator(this.AfterLogInPopUp).click();
        }
        catch (error) {
        }
        console.log('important button clicked');
        await page.locator(this.LoanOriginatorPlatform).click();
        console.log('Loan Originator Platform button clicked');
    }

    
    async reloginAsLATinUAT() {

        fs.readFile('./Page-objects/prop.json', 'utf-8', async (err, jsonString) => {
            if (err) {
                console.log(err)
            }
            else {

                const data = JSON.parse(jsonString);

                do{

                    this.LATUser = data.LMN_LAT_User;
                    this.Password = data.LMN_Password;
                    console.log(this.LATUser, this.Password);


                    console.log('Logging in as LAT user');
                    console.log('LAT User Name is ' + this.LATUser);
                    console.log('LAT password is ' + this.Password);
                    await page.locator(this.logInPageUserNameBox).click();
                    await page.locator(this.logInPageUserNameBox).fill(this.LATUser);

                    await page.locator(this.logInPagePasswordNameBox).click();
                    await page.locator(this.logInPagePasswordNameBox).fill(this.Password);
                    console.log('password entered');
                    await page.locator(this.logInPageCheckBox).click();
                    console.log('checked box clicked');
                }
                while((await page.isChecked(this.logInPageCheckBox))==false);

                
            }
        })

        

        await page.locator(this.SignInButton).click();
        console.log('sign in button clicked');

        try {
            await page.locator(this.AfterLogInPopUp).click();
        }
        catch (error) {
        }
        console.log('important button clicked');
        await page.locator(this.LoanOriginatorPlatform).click();

        console.log('Loan Originator Platform button clicked');


    }

    async reloginAsOriginatorInUAT(){
        fs.readFile('./Page-objects/prop.json', 'utf-8', async (err, jsonString) => {
            if (err) {
                console.log(err)
            }
            else {
                const data = JSON.parse(jsonString);
                do{

                    this.OrgUser = data.LMN_ORG_User;
                this.Password = data.LMN_Password;
                console.log(this.OrgUser, this.Password);


                console.log('Logging in as Originator user');
                console.log('Org User Name is ' + this.OrgUser);
                console.log('Org password is ' + this.Password);
                await page.locator(this.logInPageUserNameBox).click();
                await page.locator(this.logInPageUserNameBox).type(this.OrgUser);
                console.log('user name entered');
                await page.locator(this.logInPagePasswordNameBox).click();
                await page.locator(this.logInPagePasswordNameBox).type(this.Password);

                console.log('password entered');

                await page.locator(this.logInPageCheckBox).click();
        console.log('checked box clicked');
                

                }while(await page.isChecked(this.logInPageCheckBox)==false);
                
            }
        })
        
        
        await page.locator(this.SignInButton).click();
        console.log('sign in button clicked');
        try {
            await page.locator(this.AfterLogInPopUp).click();
        }
        catch (error) {
        }
        console.log('important button clicked');
    }

    async userLogsOut() {
        console.log("from the 'userLogsOut()' method");
        await page.locator(this.profileButton).click();
        expect(await page.locator(this.signOutBtn)).to.exist;
        console.log("user can see the sign out button");
        await page.locator(this.signOutBtn).click();
        expect(await page.locator(this.logInPageUserNameBox)).to.exist;
        console.log("user landed on the login page");
        await page.waitForTimeout(5000);
    }





};

module.exports = { LogInPage };