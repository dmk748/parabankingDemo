import {Page, Locator} from "@playwright/test";

export class OpenNewAccountPage{
    //data members
    private readonly page:Page;

    //locators
    private readonly clickOpenNewAccountLink: Locator;
    private readonly accountType: Locator;
    private readonly minAmount: Locator;
    private readonly openNewAccountButton: Locator;
    private readonly accStatusMessage: Locator; 
    // constructor

    constructor(page: Page){
        this.page = page;

        //initialize locators
        this.clickOpenNewAccountLink = page.locator('a[href="/parabank/openaccount.htm"]');
        this.accountType = page.locator('#type');
        this.minAmount = page.locator('#fromAccountId');
        this.openNewAccountButton = page.locator('input[value="Open New Account"]');
        this.accStatusMessage = page.locator('div#openAccountResult .title');
    }

    //methods to open accounts and validate status on test one branch

    
    async selectAccountType(type: string){
        try{
            await this.accountType.selectOption(type.toUpperCase());
        }
        catch(error){
            console.error("Error selecting account type: ", error);
            throw error;
        }   
    }

    async selectMinAmount(amount: number){
        try{
            await this.minAmount.selectOption(amount.toString());
        }
        catch(error){
            console.error("Error selecting minimum amount: ", error);
            throw error;
        }
    }

    async clickOpenNewAccount(){
        try{
            await this.openNewAccountButton.click();
        }
        catch(error){
            console.error("Error clicking on open new account button: ", error);
            throw error;
        }
    }

    async getAccountStatusMessage(): Promise<string>{
        try{
            return await this.accStatusMessage.textContent() || "";
        }
        catch(error){
            console.error("Error getting account status message: ", error);
            throw error;
        }
    }

}