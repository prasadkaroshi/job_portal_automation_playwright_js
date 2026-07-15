import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {ProfilePage} from '../pages/ProfilePage';
import { profile } from 'node:console';

test('Update Resume', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.ClickOnLoginBtnOnHomePage();
    await loginPage.enterCredentialAndLogin();
    const homePage = new HomePage(page);
    await homePage.clickOnViewProfileBtn();
    const profilepage = new ProfilePage(page);
    await profilepage.uploadResume();
    await profilepage.updateResumeHeadline();
});