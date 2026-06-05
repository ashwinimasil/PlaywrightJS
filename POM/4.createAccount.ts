import { faker } from "@faker-js/faker";
import { pwWrapper } from "../../DataParametrisatinEnv/Utility/playwrightWrapper";

export class cA extends pwWrapper{
    validateElement(): void {
        throw new Error("Method not implemented.");
    }

    async fillAccInfo(){
        //Enter Account Name
        await this.page.locator("//input[@id='accountName']").fill(faker.internet.displayName())

        //click on Submit
        await this.page.locator("//input[@type='submit']").click()
        await this.getTitle();
        await this.page.waitForTimeout(3000)
        }


}
