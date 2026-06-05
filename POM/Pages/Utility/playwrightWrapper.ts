import { faker } from "@faker-js/faker";
import {Page} from "@playwright/test";
export abstract class pwWrapper{

    page : Page

    constructor (LocalPage :  Page){
    this.page = LocalPage
    }
    async getTitle():Promise<string>{
       const Title = await this.getTitle();
       console.log(Title);       
       return Title
    }

    abstract validateElement() : void

     async clearandFill(locator:string,data:string){
        await this.page.locator(locator).clear()
        await this.page.locator(locator).fill(data)    
     }
    }