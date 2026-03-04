import { th } from "@faker-js/faker";
import {Page, Locator} from "@playwright/test";

export class HomePage{

    private readonly page: Page;

    //private readonly elements
    private readonly registerLink : Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginInButton: Locator;

    constructor(page: Page){
        this.page = page;

        //initialize locators
        
        this.registerLink = page.locator('a[href="/register"]');
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginInButton = page.locator('input[value="Log In"]');

    }

    //check homepage exists

    async isHomePageDisplayed(): Promise<boolean>{
        let title = await this.page.title();
        if(title)       return true;
        return false;
    }

    //navigate to registration page

    async clickOnRegisterAccount(){
        try{
            await this.registerLink.click();
        }catch(error){
            console.error("Error clicking on register link: ", error);
            throw error;
        }
    }

    //enter username
    async enterUsername(username: string){
        try{
            await this.usernameInput.fill(username);
        }catch(error){
            console.error("Error entering username: ", error);
            throw error;
        }
    }

    //enter password
    async enterPassword(password: string){
        try{
            await this.passwordInput.fill(password);
        }catch(error){
            console.error("Error entering password: ", error);
            throw error;
        }   
    }

    //click on login button
    async clickOnLoginButton(){
        try{
            await this.loginInButton.click();
        }catch(error){
            console.error("Error clicking on login button: ", error);
            throw error;
        }
    }

}