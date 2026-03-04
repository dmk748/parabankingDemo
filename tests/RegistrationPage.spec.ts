/**
 * Test Case: Register New User for Online Banking Application
 *
 * Tags:  @sanity @regression @registration
 *
 * Steps:
 * 1) Navigate to application URL
 * 2) Click on 'Register' link from login panel
 * 3) Validate registration page is displayed
 * 4) Fill all mandatory fields with valid data
 * 5) Click 'Register'
 * 6) Validate successful registration message
 */

import { test, expect } from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataGenerator } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let registrationPage: RegistrationPage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    testConfig = new TestConfig();
    await page.goto(testConfig.baseURL);
});

test("Register New User with Valid Data @sanity @regression @registration ", async ({
    page,
}) => {
    //click on register link
    await registrationPage.clickOnRegisterLink();
    await expect(page).toHaveURL(/.*register/);

    //fill registration form with random data with object parameter
    await registrationPage.fillRegistrationFormWithObject(RandomDataGenerator.getRegistrationUser());
    
    //click on register button
    await registrationPage.clickOnRegisterButton();

    /* for filling registration form with individual parameters
    await registrationPage.fillRegistrationForm(
        RandomDataGenerator.getFirstName(),
        RandomDataGenerator.getLastName(),
        RandomDataGenerator.getAddress(),
        RandomDataGenerator.getCity(),
        RandomDataGenerator.getState(),
        RandomDataGenerator.getZipCode(),
        RandomDataGenerator.getPhoneNumber(),
        RandomDataGenerator.getSSN(),
        RandomDataGenerator.getUsername(),
        RandomDataGenerator.getPassword(),
    );*/
    
    // Validate successful registration message
    expect(await registrationPage.getSuccessMessage()).toContain("Your account was created successfully. You are now logged in.");
    
});
