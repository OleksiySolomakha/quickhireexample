const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../../pageObjects/loginPage');

let email = 'playwrightcomnojob@g.com';

test('Check employer witch can\'t allow to job posting', async ({ page }) => {
    // ----------- use page object ----------
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.login(email);
    // ----------------------------------------
    //  close upgrade plan modal window
    await page.click('[testid="upgrade-plan-modal-close-button"]');
    await expect(page.locator("text='Plan: No Plan'"), 'should be visible').toBeVisible();
    //  Check plan page
    await page.click('a[data-qa="try-premium-button"]');
    await expect(page.locator('text=$199.00/month'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="plan-button-0"]'), 'should be visible').toBeVisible();
    await expect(page.locator('text=$499.00/month'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="plan-button-1"]'), 'should be visible').toBeVisible();
    await expect(page.locator('text=$899.00/month'), 'should be visible').toBeVisible();
    await expect(page.locator('button[data-qa="plan-button-2"]'), 'should be visible').toBeVisible();
    // Logout
    await page.click('[aria-label="profile"]');
    await page.click('button[data-qa="logout-button"]');
});
