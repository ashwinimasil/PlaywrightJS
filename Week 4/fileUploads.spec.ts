/* Notes:
FileUpload is of 2 types:
1. With input tag and type="file" => Earlier
2. Without input tag and without type="file" => Modern REACT based applications*/

import { test } from "@playwright/test";
//import path from "path";

//Method-1 - Learn to Upload the file with input tag and type=file


test("Learn to Upload the file with input tag and type=file", async ({ page }) => {


    await page.goto("https://leafground.com/file.xhtml");


    const uploadFile = page.locator("(//input[@type='file'])[1]"); // reference of the locator to upload/ inject the file to the locator


    await uploadFile.setInputFiles('Data/TestLeafLogo.png')

    await page.waitForTimeout(5000);


})



