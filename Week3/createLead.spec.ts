import {test} from "@playwright/test";
    test ( 'createTestLead', async ({page})=> {
        
        //launch the page
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
        await page.locator("//input[@id='createLeadForm_companyName']").fill("Cognizant");

        //css selector for id - first Name
        await page.locator("#createLeadForm_firstName").fill("Ashwini")

        //xpath for last Name
        await page.locator("(//input[contains(@name,'lastName')])[3]").fill("Masilamani");

        //click the create lead button
        await page.locator("//input[@name='submitButton']").click();

        //page wait
        await page.waitForTimeout(3000);


        
    
    }
    )




