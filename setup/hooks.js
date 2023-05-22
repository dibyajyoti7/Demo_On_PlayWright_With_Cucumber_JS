const playwright=require('playwright');
const {Before,BeforeAll,After,AfterAll, AfterStep,Status}=require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { before } = require('lodash');
const DEFAULT_TIMEOUT=require('@cucumber/cucumber')
DEFAULT_TIMEOUT.setDefaultTimeout(60000)



BeforeAll(async () => {
console.log('Launching Browser');
global.browser = await playwright['chromium'].launch({headless:false});
console.log('Browser launched');
});

Before(async()=>{
    console.log('######################################## creating new context & page ########################################');
    global.context=await browser.newContext();
    global.page=await context.newPage();
    await page.setViewportSize({width: 1400, height: 800});
});

AfterAll(async()=>{
console.log(' Closing the browser')
await browser.close();
console.log('Browser closed');
});

After(async()=>{
    console.log('closing new context page');
    await context.close();
});

AfterStep(async function(Scenario){
    //for failure only
    if(Scenario.result.status===Status.FAILED)
    {
        await this.attach(await page.screenshot({path: `../reports/screenshots/${Scenario.pickle.name}.png`,fullpage:true}),"image/png");
    }
    //for all steps
    // await this.attach(await page.screenshot({path: `../reports/screenshots/${Scenario.pickle.name}.png`,fullpage:true}),"image/png");
})


