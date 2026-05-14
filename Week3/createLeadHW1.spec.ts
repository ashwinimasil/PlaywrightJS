import {test,expect} from "@playwright/test";
    test ( 'createTestLead', async ({page})=> {
        
        //launch the page
        await page.goto ("https://leaftaps.com/opentaps/control/main");
        
        //Enter the user id 
        await page.locator("//label[text()='Username']/following::input[1]").fill("democsr2");
        
        //Enter the password
        await page.locator("//input[@id='password'] ").fill("crmsfa");

        //Click on the login button 
        await page.locator("//p/input[@value='Login']").click();

        //click on CRM/SFA link
        await page.locator("//div[@class='crmsfa']/div/a").click();

        //click on create Lead button
        await page.locator("//a[text()='Create Lead']").click();

        //css selector for company name - using class
        await page.locator("//input[@id='createLeadForm_companyName']").fill("Cognizant");

        //css selector for id - first Name
        await page.locator("#createLeadForm_firstName").fill("Ashwini")

        //xpath for last Name
        await page.locator("(//input[contains(@name,'lastName')])[3]").fill("Masilamani");


        //select the industry
        //await page.selectOption("//select[@id='createLeadForm_industryEnumId']", {label:"Aerospace"});

        //count the industry values
       const industryValues = page.locator("//select[@id='createLeadForm_industryEnumId']/option");
       const noOfInIndustry= await industryValues.count()

       for (let index = 0; index < noOfInIndustry; index++) {
        
        console.log(await(industryValues.nth(index)).innerText());
        
       }  
        //Fill the Salutation
       await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Hello Ashwini")
       
       //Fill the Title
       await page.locator("//input[@name='generalProfTitle']").fill("Mrs")

       //Fill the Annual Revenue
       await page.locator("//input[@name='annualRevenue']").fill("35000")

       // Fill the Department
       //await page.getByRole("textbox",{name:'departmentName'}).fill("Healthcare")
       await page.locator("//input[@name='departmentName']").fill("Healthcare")

       //Fill the Phone number    
        await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("436758399")

        //select state/province
        await page.selectOption("//select[@name='generalStateProvinceGeoId']",{label:'Arizona'})

        const states =await page.locator("//select[@name='generalStateProvinceGeoId']/option")
        const noOfStates=await states.count()
            
        for (let index1 = 0; index1 < noOfStates; index1++) {
           //console.log(await(industryValues.nth(index)).innerText());
          console.log(await (states.nth(index1).innerText()));           
        }
       //click the create lead button
        await page.locator("//input[@name='submitButton']").click();

       // Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions
       const cName = await page.locator("//span[@id='viewLead_companyName_sp']").textContent()
        const lName = await page.locator("//span[@id='viewLead_lastName_sp']").textContent()
        const status = await page.locator("//span[@id='viewLead_statusId_sp']").textContent
        console.log(`company Name: ${cName}`);
        console.log(`Last Name: ${lName}`);
       // console.log(`Status: ${status}`);
               
        expect.soft(cName).toContain("Cognizant")
        expect.soft(lName).toContain("Masilamani")
        //expect.soft(status).toContain("Cognizant")

       //page wait
        await page.waitForTimeout(3000);
    }
    )




