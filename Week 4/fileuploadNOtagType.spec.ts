
//Method-2 Without the input tag and type="file"

import {test} from "@playwright/test"
//import path from "path";

test("Upload file - Without the input tag and type='file'", async ({ page }) => {


    await page.goto("https://the-internet.herokuapp.com/upload");


    const filePromise = page.waitForEvent("filechooser"); // filePromise is a variable that holds an unresolved promise


    await page.locator('[id="drag-drop-upload"]').click();


    const fileUpload = await filePromise


    //await fileUpload.setFiles(("Data/Absolute.png"),("Data/TestLeaf Logo.png"),);

 await fileUpload.setFiles(['Data/TestLeafLogo.png'])
    await page.waitForTimeout(3000)
})