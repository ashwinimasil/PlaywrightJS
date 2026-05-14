import {expect, test} from "@playwright/test";
    test ( 'Learn Assertion', async ({page})=> {
        
        //launch the page
        await page.goto ("https://leaftaps.com/opentaps/control/main");
                 
        //Enter the user id 
        await page.locator("//label[text()='Username']/following::input[1]").fill("democsr2");
        
        //soft assertion
        await expect(page.locator("//label[text()='Username']/following::input[1]")).toBeEnabled();
            
        //Enter the password
        await page.locator("//input[@id='password'] ").fill("crmsfa");

        //hard assertion
        await expect.soft(page.locator("//p/input[@value='Login']")).toBeDisabled();

       //Click on the login button 
        await page.locator("//p/input[@value='Login']").click();

          //title
        let titlePage = await page.title();
        console.log(`The title page is ${titlePage}`);
       expect(titlePage).toBe("Login");

        //Hard assersion for title page
        await page.waitForTimeout(8000);
    }
)