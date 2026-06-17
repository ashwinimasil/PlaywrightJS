import {Page,expect} from "@playwright/test";

//test ("Create Lead in SalesForce", async({page}) =>{    

    export class createLeadinSF{
    page :Page

    constructor (localPage : Page){

    this.page = localPage    

   }
    async urlLoad(url : string){

     await this.page.goto(url)
    }

    async credentialsFill(username : string, password :string){
     await this.page.locator('#username').fill(username)

     await this.page.locator('#password').fill(password)
    console.log(`username ${username} and password ${password} entered`);
    
    }
    async loginClick(){
    await this.page.locator("//input[@class='decorativeSubmit']").click()
    console.log("success");
}
     async  clickCRMSFA(){
    //Click on toggle menu button from the left corner
     
    await this.page.locator("(//div[@class='slds-icon-waffle'])").click()   

    await this.page.waitForLoadState("domcontentloaded")

    //Click view All and click Sales from App Launcher
    await this.page.locator("//button[contains(text(),'View All')]").click()
     }
     async search(){
    await this.page.locator('[placeholder="Search apps or items..."]').fill("sales")


    await this.page.waitForLoadState("domcontentloaded")
 //Click on Leads tab
    await this.page.locator("//p[contains(text(),'Manage your sales')]").click()

     await this.page.waitForLoadState("domcontentloaded")    
}
   
async createLead(){
    await this.page.getByRole("link",{name:'Leads'}).click()

    //Click on New button
    await this.page.locator("//div[@title='New']").click()
    
    //Select Salutation 
    await this.page.locator("//button[@aria-label='Salutation']").click()

    await this.page.locator("//span[text()='Prof.']").click()
    

    //Enter the Last Name
    await this.page.locator('//input[@placeholder="Last Name"]').fill("Masilamani")

    //Enter the Company 
    await this.page.locator("//input[@name='Company']").fill("cognizant")

    //Click Save and Verify Leads name created
    await this.page.locator("(//button[text()='Save'])[2]").click()
}

  /*  async verifyToastMsg(){
   const toastmsg = this.page.locator("//span[@data-aura-class='forceActionsText']").innerText()
   console.log(toastmsg);
   expect(toastmsg).toContain("created") 
    
    } */
    }

