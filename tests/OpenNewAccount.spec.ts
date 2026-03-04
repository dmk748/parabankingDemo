import {test, expect} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { OpenNewAccountPage } from '../pages/OpenNewAccount';
import { TestConfig } from '../test.config';

let loginPage: LoginPage;
let openNewAccountPage: OpenNewAccountPage;
let testConfig: TestConfig;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    openNewAccountPage = new OpenNewAccountPage(page);
    testConfig = new TestConfig();
    await page.goto(testConfig.baseURL);
    await loginPage.login(testConfig.username, testConfig.password);
});

test('open new account with valid details', async({page})=>{
    
})