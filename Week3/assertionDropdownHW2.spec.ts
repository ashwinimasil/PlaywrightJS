import {expect,test} from "@playwright/test";

test('Homework', async ({page})=>{

    //Navigate to the url
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter the username  
    await page.locator("//label[text()='Username']/following::input[1]").fill("democsr2")
    
    //Enter the password as  
    await page.locator("//input[@id='password']").fill("crmsfa")

    //Click the Login button
    await page.locator('.decorativeSubmit').click()
    
    //Click CRM/SFA
    await page.locator("//a[contains(text(),'SFA')]").click()
                       
    //Click Leads
    await page.locator("//a[text()='Leads']").click()
        
    //Click Find Leads
    await page.locator("//a[text()='Find Leads']").click()

    //Enter the first name 
    await page.locator("(//input[@name='firstName'])[3]").fill("Ashwini")

    //Click Find Leads button 
    await page.locator("//button[text()='Find Leads']").click()

    //Click the first resulting Lead ID
    await page.locator("(//tbody/tr/td/div/a)[1]").click()

    //Click Edit 
    await page.locator("//a[text()='Edit'] ").click()

    // Edit Company name
    await page.locator("//input[@name='companyName']").first().fill("updated")

    // Edit Annual Revenue
    await page.locator("//input[@name='annualRevenue']").fill("10000")

    // Edit Department 
    await page.locator("//input[@name='departmentName']").fill("updated")

    // Enter Description
    await page.locator("//textarea[@name='description']").fill("updated")

    // Click Update 
    await page.locator("//input[@value='Update']").click()

    // Verify the edited fields and print the title of the page
    await expect("title").toContain("Login | Salesforce")

    //await expect page
    

    expect(page.waitForTimeout(9000))

}
)