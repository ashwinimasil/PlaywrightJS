import {test} from "@playwright/test";

test ("Alert HW", async({page})=> {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
     
    await page.frameLocator('[title="FastCMP"]').locator("//button[text()='Accept']").click();
    const framelocator = page.frameLocator("//iframe[@id='iframeResult']")

    page.on("dialog", async x => {
    console.log("Listeners on");
      const tryItButton=  page.locator("//button[text()='Try it']")
    await tryItButton.waitFor({ state: 'visible' });
        tryItButton.click() 
        //await framelocator.getByRole("button",{name:'Try it'}) .click()
            
         console.log(`The type of Alert is ${x.type()}`);
         console.log(`The Alert is ${x.accept()}`);
         await x.accept()       
         await page.waitForTimeout(3000)
         }
      
)
}
)