import { Page, Locator } from "@playwright/test";
export class RegistrationPage {
   // private readonly page: Page;

   //private readonly elements
   //1.Locators
   // private readonly
   private readonly page: Page;
   private readonly registerLink: Locator;
   private readonly firstNameInput: Locator;
   private readonly lastNameInput: Locator;
   private readonly addressInput: Locator;
   private readonly cityInput: Locator;
   private readonly stateInput: Locator;
   private readonly zipCodeInput: Locator;
   private readonly phoneNumberInput: Locator;
   private readonly ssnInput: Locator;
   private readonly usernameInput: Locator;
   private readonly passwordInput: Locator;
   private readonly confirmPasswordInput: Locator;
   private readonly registerButton: Locator;

   //constructor loading page and initializing locators
   constructor(page: Page) {
      this.page = page;

      // Initialize locators with CSS selectors
      this.registerLink = page.locator('a[href="register.htm"]');
      this.firstNameInput = page.locator('input[id="customer.firstName"]');
      this.lastNameInput = page.locator('input[id="customer.lastName"]');
      this.addressInput = page.locator('input[id="customer.address.street"]');
      this.cityInput = page.locator('input[id="customer.address.city"]');
      this.stateInput = page.locator('input[id="customer.address.state"]');
      this.zipCodeInput = page.locator('input[id="customer.address.zipCode"]');
      this.phoneNumberInput = page.locator('input[id="customer.phoneNumber"]');
      this.ssnInput = page.locator('input[id="customer.ssn"]');
      this.usernameInput = page.locator('input[id="customer.username"]');
      this.passwordInput = page.locator('input[id="customer.password"]');
      this.confirmPasswordInput = page.locator('input[id="repeatedPassword"]');
      this.registerButton = page.locator('input[value="Register"]');
   }

   //methods to interact with elements

   //navigate to registration page
   async clickOnRegisterLink() {
      try {
         await this.registerLink.click();
      } catch (error) {
         console.error("Error clicking on register link: ", error);
         throw error;
      }
   }

   //fill registration form
   async fillRegistrationForm(
      firstName: string,
      lastName: string,
      address: string,
      city: string,
      state: string,
      zipCode: string,
      phoneNumber: string,
      ssn: string,
      username: string,
      password: string
   ) {
      try {
         await this.firstNameInput.fill(firstName);
         await this.lastNameInput.fill(lastName);
         await this.addressInput.fill(address);
         await this.cityInput.fill(city);
         await this.stateInput.fill(state);
         await this.zipCodeInput.fill(zipCode);
         await this.phoneNumberInput.fill(phoneNumber);
         await this.ssnInput.fill(ssn);
         await this.usernameInput.fill(username);
         await this.passwordInput.fill(password);
         await this.confirmPasswordInput.fill(password);
      } catch (error) {
         console.error("Error filling registration form: ", error);
         throw error;
      }
   }

   //click on register button
   async clickOnRegisterButton() {
      try {
         await this.registerButton.click();
      } catch (error) {
         console.error("Error clicking on register button: ", error);
         throw error;
      }
   }

   //validate successful registration message
   async validateSuccessMessage() {
      const successMessage = this.page.locator("div#rightPanel p");
   }

   //second approach to fill registration form using a single method with an object parameter
   
   async fillRegistrationFormWithObject(userData: {
     firstName: string;
     lastName: string;
     address: string;
     city: string;
     state: string;
     zipCode: string;
     phoneNumber: string;
     ssn: string;
     username: string;
     password: string;
   }) {
     try {
       await this.firstNameInput.fill(userData.firstName);
       await this.lastNameInput.fill(userData.lastName);
       await this.addressInput.fill(userData.address);
       await this.cityInput.fill(userData.city);
       await this.stateInput.fill(userData.state);
       await this.zipCodeInput.fill(userData.zipCode);
       await this.phoneNumberInput.fill(userData.phoneNumber);
       await this.ssnInput.fill(userData.ssn);
       await this.usernameInput.fill(userData.username);
       await this.passwordInput.fill(userData.password);
       await this.confirmPasswordInput.fill(userData.password);
     } catch (error) {
       console.error("Error filling registration form with object: ", error);
       throw error;
     }
   }
   
   //validate successful registration message
   async getSuccessMessage() {
      try {
         const successMessage = await this.page.locator("div#rightPanel p").textContent();
         return successMessage ? successMessage.trim() : "";
      } catch (error) {
         console.error("Error getting success message: ", error);
         throw error;
      }
   }
}
