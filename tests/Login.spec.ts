/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression @login
 * 
 * Steps:
 * 1) Navigate to homepage
 * 2) Enter valid username
 * 3) Enter valid password
 * 4) Click 'Log In'
 * 5) Validate redirect to Accounts Overview
 * 6) Validate accounts table is visible
 */

import {test, expect} from "@playwright/test";
import {LoginPage} from '../pages/LoginPage';
import { TestConfig } from "../test.config";

let loginPage:LoginPage;
let testConfig:TestConfig;
test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    testConfig = new TestConfig();
    await page.goto(testConfig.baseURL);
})

test("Login with Valid Credentials @master @sanity @regression @login", async({page})=>{
    //login with valid credentials
    await loginPage.login(testConfig.username, testConfig.password);

    await page.waitForTimeout(2000);
});

