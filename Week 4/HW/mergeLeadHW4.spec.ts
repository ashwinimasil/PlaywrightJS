import {test} from "@playwright/test";

test("Windows Handling HW" , async({page})=>{

    page.goto("http://leaftaps.com/opentaps/control/main")

    //Enter the username : demosalesmanager. 
    await page.locator("//label[text()='Username']/following::input[1]").fill("democsr2");

    //Enter the password : crmsfa. 
    await page.locator("//input[@id='password'] ").fill("crmsfa");

    //Click the Login button. 
    await page.locator("//p/input[@value='Login']").click();

    //Click CRM/SFA 
    await page.locator("//div[@class='crmsfa']/div/a").click();

    //Click Leads 
    await page.locator("//a[text()='Leads']").click()

    //Click Merge Leads 
      await page.locator("//a[text()='Merge Leads']").click() 

    //Click From Lead widget 
    await page.locator("//img[@alt='Lookup' and contains(@src, 'fieldlookup.gif')]").first().click()

    //Select the first resulting lead id 
    
    //Click To Lead widget 
    //Select the second resulting lead id 
    //Click Merge button 
    //Get the message and type of the alert 
    //Accept the alert 
    //Click Merge button 
    //Assert the title of the page






})