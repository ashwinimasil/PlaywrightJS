import {test} from "@playwright/test"

test("serviceNow Marathon",async({page})=>{

   



    //1. Launch the ServiceNow application using the given URL.
    await page.goto("https://dev331650.service-now.com")
    //2. Enter User name as admin.
    await page.locator("//input[@id='user_name']").fill("admin")

    //3. Enter Password with valid credentials. 
    await page.locator("//input[@id='user_password']").fill("Ig@-R6iFfOv1")

    //4. Click on the Log in button. sysverb_login
    await page.locator("//button[@id='sysverb_login']").click()

    //5. Wait for the ServiceNow home page to load successfully.
    //6. Click on the All menu from the left navigation panel.
    await page.getByRole("menuitem",{name:"All"}).click()
    //await page.pause()

    //7. Click on Service Catalog from the menu options.
    await page.locator("[aria-label='Service Catalog 3 of 23']").click() 

    //8. Switch to the Service Catalog iframe.
    const frameInside = page.frameLocator("#gsft_main")

    

    //9. Click on the Mobiles category.
    frameInside.locator("//h2[contains(text(),'Mobiles')]").click()
    console.log("Clicked mobiles");
    //await page.pause()
    
    //10. Select Apple iPhone 13 Pro from the product list.
    await frameInside.locator("//strong[text()='Apple iPhone 13 pro']").click()

    //11. Choose Yes for the Lost or Broken iPhone option.
    await frameInside.locator("//label[text()='Yes']").click()

    //12. Enter 99 in the Original phone number field.
    const enterValue= frameInside.locator('//span[@aria-label="What was the original phone number?"]/../../following-sibling::div/input[2]')
    await enterValue.fill("99")
   
    //13. Select Unlimited from the Monthly data allowance dropdown.
    //await frameInside.locator("//select[@class='form-control cat_item_option']").selectOption({label:'500MB [add $1.00]'})
   await frameInside.locator(".form-control.cat_item_option ").nth(1).selectOption({ value: "unlimited" })

    //  14. Select Sierra Blue as the color option.
    await frameInside.locator("//label[text()='Sierra Blue']").click()

    //15. Select 512 GB as the storage option.
    await frameInside.locator("//label[text()='512 GB [add $300.00]']").click()

    //16. Click on the Order Now button.
    await frameInside.locator("//button[text()='Order Now']").click()

    //17. Verify the confirmation message is displayed.
    const successMsg = frameInside.locator("//span[@class='notification-icon icon-check-circle']/following::span[1]")
    console.log(successMsg);

    //18. Capture a full-page screenshot of the order confirmation page.

    await page.screenshot({ path: 'servicenow_fullpage.png'})

    await page.waitForTimeout(3000)


})