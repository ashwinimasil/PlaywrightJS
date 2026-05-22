import { test } from "@playwright/test";

test("Learn to interact with webelements present inside frames", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");

    const frame1=page.frameLocator('[src="nested.xhtml"]')
   const nameFrame= frame1.frameLocator("//button[contains(text(),'Click Me')]")
  console.log(nameFrame.getByText);
 
})