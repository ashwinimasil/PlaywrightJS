///<reference types="node" />

import {test} from "@playwright/test"

import path from 'path';
//import { fileURLToPath } from 'node:url';


test("upload SalesForce" ,async({page})=>{

await page.goto("https://login.salesforce.com/")

//Enter username
await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com");

//Enter password
await page.locator("//input[@id='password']").fill("TestLeaf@2025");

//Click Login
await page.locator("//input[@id='Login']").click()

//Click App Launcher icon
await page.locator("//div[@class='slds-icon-waffle']").click()

await page.waitForTimeout(3000)

//Click View All
  await page.locator('//button[text()="View All"]').click()

await page.waitForLoadState("domcontentloaded")

//Enter Accounts in App Launcher search box
await page.locator("//input[@placeholder='Search apps or items...']").fill("Accounts")
//await page.locator("(//input[contains(@type,'search')])[1]").fill("Accounts")

//Click Accounts
await page.locator("//mark[text()='Accounts']").click()

//Click New
await page.locator("//div[@title='New']").click()

//Enter Account Name
await page.locator("//input[@name='Name']").fill("Ashwini")

//Select Warm from the Rating dropdown

//Select Prospect from the Type dropdown
page.locator("//button[@aria-label='Type']").click()

await page.locator("//span[@title='Prospect']").click()

//Select Banking from the Industry dropdown
await page.locator("//button[@aria-label='Industry']").click()

//Select Public from the Ownership dropdown

//Click Save
await page.locator("//button[text()='Save']").click()
//Assert the Account created

// without input tag and type=file
const filePromise = page.waitForEvent("filechooser")

//Upload files 
await page.locator("//span[@part='button']").click()

const fileUpload =await filePromise

//Click Done and assert the uploaded file
//await fileUpload.setFiles(path.join(__dirname,"../../Data/TestLeafLogo.png"))

/* const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); */

const myPath = path.join(__dirname, 'Data', 'TestLeafLogo.png');
console.log(myPath);

await page.waitForTimeout(3000)

}
)