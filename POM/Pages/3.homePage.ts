import {welcomePage} from "../Pages/2.WelcomePage"
import { pwWrapper } from "../Utility/playwrightWrapper"

export class HomePage extends pwWrapper {
    validateElement(): void {
        throw new Error("Method not implemented.")
    }

    async homePage(){       
        await this.page.locator("//a[text()='Create Account']").click()

        await this.page.waitForTimeout(3000)
        }

    
}

