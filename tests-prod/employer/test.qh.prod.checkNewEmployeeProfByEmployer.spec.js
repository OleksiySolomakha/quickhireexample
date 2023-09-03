const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let email = 'playwrightcom@g.com';

test('Check some new selectors at employee profile by employer', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    await page.click('[data-qa="employer-dashboard-link"]');
    await page.click('text=Not Yet');
    await page.click('[data-qa="job-link-Kling - Halvorson"]');
    await page.click('text=Hi Janny');
    await page.isVisible('[data-qa="pdf-button"]');
    await page.isVisible('[data-qa="applicant-profile-modal-notes-edit-button"]');
    await page.reload();
    await page.click('text=Jobs');
    await page.click('text=Not Yet');
    await page.click('[data-qa="employer-profile-button"]');
    await page.click('button[data-qa="logout-button"]');
});
