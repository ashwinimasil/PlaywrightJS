import { test } from "@playwright/test";


test("Learn to handle Alerts", async ({ page }) => {



await page.goto("https://leafground.com/alert.xhtml");


page.on("dialog", async (x) => { // playwrigt listener 


console.log(`The type of alert is ${x.type()}`)// Return the type of alert => simple, confirm, prompt


console.log(`The message inside the alert is ${x.message()}`)


if (x.message() === 'Did you call me?') {
await x.accept()
console.log("Message1",(x.type()));

} else if (x.type() === 'prompt') {
console.log("Message2",(x.message()));
await x.dismiss("Ashwini")

} else {
await x.dismiss()
}


})


await page.locator('//span[text()="Show"]').first().click();
await page.waitForTimeout(3000); // demo purpose


await page.locator(".card").filter({ hasText: "Alert (Confirm Dialog)" }).locator('//span[text()="Show"]').click();
await page.waitForTimeout(3000); // demo purpose


await page.locator(".card").filter({ hasText: " Alert (Prompt Dialog)" }).locator('//span[text()="Show"]').click();
await page.waitForTimeout(3000); // demo purpose


//Out of 3 "class=card" we are to filter it to a unique webement inorder to click the Show button




}
)