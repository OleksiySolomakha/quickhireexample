const { test } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let email = 'playwrightedit@g.com';

test('Check new prompt for employer without jobs', async ({ page }) => {

    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('a[data-qa="employer-dashboard-link"]');
    await page.reload();
    // await page.pause();
    // await expect(page.locator(`text=Looks like you don\'t have any active jobs`), 'should be visible').toBeVisible();
    // await expect(page.locator('a[href="/employer-dashboard/new-job"]'), 'should be disabled').toBeDisabled();
    await page.click('#root', { position: { x: 500, y: 350} });
    await page.click('[aria-label="profile"]');
    await page.click('button[data-qa="logout-button"]');
});
