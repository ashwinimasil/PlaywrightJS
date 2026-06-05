import {Page} from "@playwright/test"
import { pwWrapper } from "../Utility/playwrightWrapper";

        export class LoginPage extends pwWrapper{
        
        validateElement(): void {
            throw new Error("Method not implemented.");
        }              
        async credentials(url:string, username:string, password:string){
        
        //launch the page
        await this.page.goto(url);
        
        //Enter the user id 
        await this.page.locator("//label[text()='Username']/following::input[1]").fill(username);
        
        //Enter the password
        await this.page.locator("//input[@id='password'] ").fill(password)

        //click on submit
        await this.page.locator("(//input[@type='submit'])[1]").click()
                  
        }
    }