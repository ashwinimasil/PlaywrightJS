/* import {expect, test} from "@playwright/test"

test ("HW Create Accout with PWLocators", async({page}) =>{

    //Navigate to the url
    await page.goto("https://login.salesforce.com/")

    //Enter username using getByLabel 
    await page.getByLabel("Username", {exact:true}).fill("dilipkumar.rajendran@testleaf.com")

    //Enter password using getByLabel
    await page.getByLabel("Password",{exact:true}).fill("TestLeaf@2025")

    //Click Login 
    await page.getByText("Log In",{exact:true}).click()
    
   await page.waitForLoadState("domcontentloaded")
  //Click App Launcher using the class locator 
     await expect (page.getByRole("button",{name:"App Launcher",exact:true})).toBeVisible
 
     await page.waitForLoadState("domcontentloaded")
    //Verify the title and url of the page using appropriate assertions -- check

    const title = await page.title(); 
    console.log(`The title of the page:${title}`);
    expect.soft(title).toBe("Lightning Experience")
       
    //Click App Launcher using the class locator -- check
    await page.getByRole("button",{name:"App Launcher",exact:true}).click()

    //Click View All using getByText 
   
   await page.locator('//button[text()="View All"]').click()

   await page.waitForLoadState("domcontentloaded")

    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    
    await page.waitForLoadState("domcontentloaded")
        
    //Click Service using index based XPath --- check
    await page.locator("//mark[text()='Service']").nth(0).click()

    await page.waitForLoadState("domcontentloaded")

    // Click Accounts using attribute based CSS selector --- check
   // await page.locator('text="Accounts"').click();
  await page.getByText('Accounts', { exact: true }).click()

    // Click New using getByRole 
    //await page.getByRole("button",{name:"New",exact:true}).click()
    await page.locator("//button[normalize-space()='New']").click();
    // Enter Account name using attribute based CSS selector
    await page.locator('[name="Name"]').fill("Ashwini")

    // Click Save button using XPath 
    await page.locator("//button[text()='Save']").click()

    // Verify the toast message displayed
    const toastMsg=page.locator("//span[text()='Success notification.']").textContent()
    expect.soft(toastMsg).toBe("toastMsg")
    
   await page.waitForTimeout (35000)
}
)
 */

import {expect, test} from "@playwright/test"

test ("HW Create Accout with PWLocators", async({page}) =>{

    //Navigate to the url
     await page.goto("https://login.salesforce.com/")
     const pageTitle = await page.title()
     console.log(`The page title is ${pageTitle}`);
     
    //Enter username using getByLabel 
    await page.getByLabel("Username", {exact:true}).fill("dilipkumar.rajendran@testleaf.com")

    //Enter password using getByLabel
    await page.getByLabel("Password",{exact:true}).fill("TestLeaf@2025")

    //Click Login 
    await page.getByText("Log In",{exact:true}).click()
    
    await page.waitForLoadState("domcontentloaded")
    //Click App Launcher using the class locator 
     expect (page.getByRole("button",{name:"App Launcher",exact:true})).toBeEnabled
 
    await page.waitForTimeout(4000)
    //Verify the title and url of the page using appropriate assertions -- check
    const title = await page.title()
    console.log(`The title of the page:${title}`);
    expect.soft(title).toBe("Home | Salesforce")
       
     await page.waitForTimeout(4000)
    //Click App Launcher using the class locator -- check
    await page.getByRole("button",{name:"App Launcher",exact:true}).click()

    await page.waitForTimeout(4000)

    //Click View All using getByText   
    await page.locator('//button[text()="View All"]').click()
 
    //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    
    await page.waitForTimeout(4000)
        
    //Click Service using index based XPath --- check
    await page.locator("//mark[text()='Service']").first().click()  

    // Click Accounts using attribute based CSS selector --- check
    // await page.locator('text="Accounts"').click();
    await page.getByRole('link', {name:'Accounts', exact: true }).click()

    // Click New using getByRole 
    //await page.getByRole("button",{name:"New",exact:true}).click()
    await page.locator("//div[@title='New']").click();
    // Enter Account name using attribute based CSS selector
    await page.locator('[name="Name"]').fill("Ashwini")

    // Click Save button using XPath 
    await page.locator("//button[text()='Save']").click()

    // Verify the toast message displayed
   /*  const toastMsg=page.locator("//span[text()='Success notification']").allInnerTexts()
    console.log(`Toast message ${toastMsg}`);
    
    expect.soft(toastMsg).toBe("Account ash was created.") */
    //const successMsg = page.locator("(//span[contains(@class,'toastMessage')])[1]")
    const toastMsg= await page.locator("//span[text()='Success notification.']").textContent()
    console.log(`Toast Message ${toastMsg}`);    
   expect.soft(toastMsg).toContain("Success notification.")
    }
)