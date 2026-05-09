import {test, chromium, webkit} from "@playwright/test"

test ("launch the browser", async({page})=>{

/* const  browser = await chromium.launch()
 const context  =await browser.newContext()
  const newpage = await context.newPage () */

await page.goto("https://www.redbus.in/")
await page.title()
page.url()

await page.waitForTimeout(3000)
}
)
test ("launch the browser webkit", async({})=>{

const  browser = await webkit.launch()
 const context  =await browser.newContext()
  const page = await context.newPage () 

await page.goto("https://www.amazon.in/")
await page.title()
page.url()

await page.waitForTimeout(3000)
}
)

// browser launch, new context, new page 
