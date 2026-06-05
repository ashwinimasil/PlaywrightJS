import { pwWrapper } from "../Utility/playwrightWrapper";
import { LoginPage } from "./1.loginPage";

export class welcomePage extends pwWrapper{
    validateElement(): void {
        throw new Error("Method not implemented.");
    }

    async clickCRMSFA(){
    await this.page.locator('//a[contains(text(),"CRM")]').click()
      
}
}