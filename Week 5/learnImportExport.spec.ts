    import {test} from "@playwright/test";    
    
    import {createLeadinSF} from "./loginimportExport.ts"

    test("Learn Import &Export",async({page,context})=>{
    
    //Login to https://login.salesforce.com   
    
    const loginPage = new createLeadinSF(page)

    await loginPage.urlLoad("https://leaftaps.com/opentaps/control/main")
    
    await loginPage.credentialsFill("democsr2", "crmsfa")
    
    await loginPage.loginClick() 

    await loginPage.clickCRMSFA()

    await loginPage.search()

    await loginPage.createLead()

    //await loginPage.verifyToastMsg()
    
     await page.waitForTimeout(3000)

    }
)