import {Page, Locator} from '@playwright/test';

export class LoginPage{

    // declare readonly locators 

    private readonly page:Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    // constructor to initialize page and locators
    constructor(page:Page){
        this.page=page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');
    }

    //actions methods to login
    async login(username:string, password:string){
        try{
            await this.usernameInput.fill(username);
            await this.passwordInput.fill(password);
            await this.loginButton.click();
        }catch(error){
            console.error("Error during login: ", error);
            throw error;
        }
    }
}