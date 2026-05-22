import {test} from "@playwright/test";

import userInfo from "../../../Data/dataParametrisation.json";

test.describe("Create Lead to be created in serial mode",async () => {

for (const data of userInfo) {

test(`DP Hw ${data.Lead}`, async({page})=>{
   
        // Navigate to the page
        await page.goto ("https://leaftaps.com/opentaps/control/main");
        
        //Enter the user id 
        await page.locator("//label[text()='Username']/following::input[1]").fill("democsr2");
        
        //Enter the password
        await page.locator("//input[@id='password'] ").fill("crmsfa");

        //Click on the login button 
        await page.locator("//p/input[@value='Login']").click();

        //click on CRM/SFA link
        await page.locator("//div[@class='crmsfa']/div/a").click();

        //click on create Lead button
        await page.locator("//a[text()='Create Lead']").click();

        //css selector for company name - using class
        await page.locator("//input[@id='createLeadForm_companyName']").fill(data.CompanyName);

        //css selector for id - first Name
        await page.locator("#createLeadForm_firstName").fill(data.firstName)

        //xpath for last Name
        await page.locator("(//input[contains(@name,'lastName')])[3]").fill(data.lastName);

        // Select Direct Mail from the Source dropdown using label
        await page.selectOption("//select[@name='dataSourceId']", {label:"Direct Mail"})

        // Select Demo Marketing Campaign from the Marketing Campaign dropdown using value 
        const marketingValue = page.locator("//select[@name='marketingCampaignId']/option")
        const marketingCount = await marketingValue.count()
       
        for (let index = 0; index < marketingCount; index++) {
           console.log("Marketing Value",await marketingValue.nth(index).innerText());
        }
        
        // Get the count and print all the values in the Marketing Campaign dropdown
        await page.selectOption("//select[@name='marketingCampaignId']",{label:"Demo Marketing Campaign"});

        const industries= page.locator("//select[@name='industryEnumId']/option")
        const noOfIndustry =  await industries.count()
        for (let index = 0; index < noOfIndustry; index++) {
            
           console.log("Industries", await industries.nth(index).innerText());
                   
        }
        // Select General Services from the Industry dropdown using index 
        page.selectOption("//select[@name='industryEnumId']",{label: "Aerospace"})

        // Select INR from the Preferred Currency dropdown
        page.selectOption("//select[@name='currencyUomId']",{label:"INR - Indian Rupee"})

        // Select India from the Country dropdown
        page.selectOption("//select[@name='generalCountryGeoId']",{label:"India"})

        // Select any state from the State dropdown 
        page.selectOption("//select[@name='generalStateProvinceGeoId']",{label:"Washington"})

        // Get the count of all states and print the values in the console 
        
         await page.waitForTimeout(3000)
         
        // 16. Click Create Lead
        await page.locator("//input[@name='submitButton']").click();

        await page.waitForTimeout(3000)
      
      }
   )
}
}
)